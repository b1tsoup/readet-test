const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const { createServer } = require("node:net");
const { setTimeout: delay } = require("node:timers/promises");
const { test } = require("node:test");

async function getAvailablePort() {
	const server = createServer();
	await new Promise((resolve, reject) => {
		server.once("error", reject);
		server.listen(0, "127.0.0.1", resolve);
	});
	const { port } = server.address();
	await new Promise((resolve, reject) => {
		server.close((error) => (error ? reject(error) : resolve()));
	});
	return port;
}

test(
	"the Next.js application serves the expected GET / page",
	{ timeout: 90_000 },
	async () => {
		const port = await getAvailablePort();
		const url = `http://127.0.0.1:${port}/`;
		const app = spawn(
			"npm",
			["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)],
			{
				cwd: process.cwd(),
				env: { ...process.env, PORT: String(port) },
				stdio: ["ignore", "pipe", "pipe"],
				detached: process.platform !== "win32",
			},
		);
		let output = "";
		app.stdout.setEncoding("utf8").on("data", (chunk) => (output += chunk));
		app.stderr.setEncoding("utf8").on("data", (chunk) => (output += chunk));
		const exited = new Promise((resolve) => {
			app.once("error", (error) => resolve({ error }));
			app.once("exit", (code, signal) => resolve({ code, signal }));
		});

		try {
			const deadline = Date.now() + 75_000;
			let response;
			while (Date.now() < deadline) {
				const exit = await Promise.race([exited, delay(0).then(() => null)]);
				if (exit) {
					throw new Error(
						`Next.js dev server exited before serving / (${JSON.stringify(exit)}).\n${output}`,
					);
				}

				try {
					response = await fetch(url, { signal: AbortSignal.timeout(1_000) });
					if (response.status === 200) {
						break;
					}
					await response.body?.cancel();
				} catch {
					// The dev server may still be starting; retry until the deadline.
				}
				await delay(250);
			}

			assert.equal(response?.status, 200, `GET / did not succeed.\n${output}`);
			const html = await response.text();
			const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1];
			assert.notEqual(body, undefined, "GET / should return an HTML body");

			const heading = body.match(/<h1\b([^>]*)>([\s\S]*?)<\/h1\s*>/i);
			assert.notEqual(heading, null, "GET / should render a semantic h1");
			const className = heading[1].match(
				/\bclass\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i,
			);
			assert.ok(
				className?.slice(1).some((value) => value?.split(/\s+/).includes("text-5xl")),
				"The h1 should include the text-5xl class",
			);
			const visibleText = (markup) =>
				markup
					.replace(/<[^>]*>/g, "")
					.replace(/&(?:nbsp|#160);/gi, " ")
					.trim();
			assert.equal(
				visibleText(heading[2]),
				"Hello world",
				"The h1 label should be exact",
			);

			const button = body.match(/<button\b[^>]*>([\s\S]*?)<\/button\s*>/i);
			assert.notEqual(button, null, "GET / should render a semantic button");
			assert.equal(visibleText(button[1]), "Click me", "The button label should be exact");
			assert.doesNotMatch(
				html,
				/\b(?:create next app|get started by editing|deploy now|read our docs|learn more|lorem ipsum)\b/i,
				"GET / should not include starter or demo content",
			);
		} finally {
			if (app.exitCode === null && app.signalCode === null) {
				if (process.platform === "win32") {
					app.kill("SIGTERM");
				} else {
					process.kill(-app.pid, "SIGTERM");
				}
				await Promise.race([exited, delay(5_000)]);
				if (app.exitCode === null && app.signalCode === null) {
					if (process.platform === "win32") {
						app.kill("SIGKILL");
					} else {
						process.kill(-app.pid, "SIGKILL");
					}
					await exited;
				}
			}
		}
	},
);
