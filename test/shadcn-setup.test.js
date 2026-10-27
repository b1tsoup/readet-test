const assert = require("node:assert/strict");
const { existsSync, readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const root = join(__dirname, "..");

function readProjectFile(path) {
	return readFileSync(join(root, path), "utf8");
}

function readPackageJson() {
	return JSON.parse(readProjectFile("package.json"));
}

test("shadcn is configured for the New York style with the Neutral base color", () => {
	const config = JSON.parse(readProjectFile("components.json"));
	const packageJson = readPackageJson();
	const packages = {
		...packageJson.dependencies,
		...packageJson.devDependencies,
	};

	assert.equal(config.style, "new-york");
	assert.equal(config.tailwind.baseColor, "neutral");
	assert.equal(config.tailwind.css, "app/globals.css");
	assert.equal(config.aliases.components, "@/components");
	assert.equal(config.aliases.ui, "@/components/ui");
	assert.equal(config.aliases.utils, "@/lib/utils");

	for (const path of [
		"components/ui/button.tsx",
		"lib/utils.ts",
		"components.json",
		"app/globals.css",
	]) {
		assert.ok(existsSync(join(root, path)), `Expected ${path} to exist`);
	}

	for (const name of [
		"shadcn",
		"tailwindcss",
		"class-variance-authority",
		"clsx",
		"tailwind-merge",
		"@radix-ui/react-slot",
	]) {
		assert.ok(packages[name], `Expected ${name} in package dependencies`);
	}

  const css = readProjectFile("app/globals.css");
  assert.match(
    css,
		/@import\s+["']tailwindcss["']|@tailwind\s+(?:base|components|utilities)/,
    "globals.css should load Tailwind CSS",
  );
  assert.ok(
    readProjectFile("app/layout.tsx").includes('import "./globals.css"'),
    "the root layout should load the global stylesheet",
  );
});

test("cn utility combines clsx inputs and merges conflicting Tailwind classes", () => {
	const utils = readProjectFile("lib/utils.ts");

	assert.match(utils, /from\s+["']clsx["']/);
	assert.match(utils, /from\s+["']tailwind-merge["']/);
	assert.match(utils, /function\s+cn\s*\(/);
	assert.match(utils, /twMerge\s*\(\s*clsx\s*\(/);
	assert.match(utils, /export\s+(?:\{[^}]*\bcn\b[^}]*\}|(?:const|function)\s+cn\b)/s);
});

test("generated Button exposes variants and supports rendering through Radix Slot", () => {
	const button = readProjectFile("components/ui/button.tsx");

	assert.match(button, /from\s+["']@radix-ui\/react-slot["']/);
	assert.match(button, /from\s+["']class-variance-authority["']/);
	assert.match(button, /from\s+["']@\/lib\/utils["']/);
	assert.match(button, /buttonVariants\s*=\s*cva\s*\(/);
	assert.match(button, /variant\s*:\s*\{/);
	assert.match(button, /size\s*:\s*\{/);

	for (const variant of ["default", "destructive", "outline", "secondary", "ghost", "link"]) {
		assert.match(button, new RegExp(`\\b${variant}\\s*:`));
	}
	for (const size of ["default", "sm", "lg", "icon"]) {
		assert.match(button, new RegExp(`\\b${size}\\s*:`));
	}

	assert.match(button, /defaultVariants\s*:/);
	assert.match(button, /asChild\s*=\s*false/);
	assert.match(button, /asChild\s*\?\s*Slot\s*:\s*["']button["']/);
	assert.match(button, /className\s*=\s*\{\s*cn\s*\(/);
	assert.match(button, /\.\.\.props/);
	assert.match(button, /export\s*\{[^}]*\bButton\b[^}]*\}/s);
	assert.match(button, /export\s*\{[^}]*\bbuttonVariants\b[^}]*\}/s);
});
