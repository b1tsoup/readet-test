const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const packageJson = JSON.parse(
  readFileSync(join(__dirname, "..", "package.json"), "utf8"),
);

test("package configuration provides the Next.js development and test commands", () => {
  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.test, "node --test");
  assert.ok(packageJson.dependencies.next);
  assert.ok(packageJson.dependencies.react);
  assert.ok(packageJson.dependencies["react-dom"]);
});
