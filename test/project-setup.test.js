const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const projectRoot = join(__dirname, "..");
const packageJson = JSON.parse(
  readFileSync(join(projectRoot, "package.json"), "utf8"),
);

test("package configuration provides the Next.js development and test commands", () => {
  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.test, "node --test");
  assert.ok(packageJson.dependencies.next);
  assert.ok(packageJson.dependencies.react);
  assert.ok(packageJson.dependencies["react-dom"]);
});

test("shadcn/ui uses the approved setup and provides a configured Button", () => {
  const shadcnConfig = JSON.parse(
    readFileSync(join(projectRoot, "components.json"), "utf8"),
  );

  assert.equal(shadcnConfig.style, "new-york");
  assert.equal(shadcnConfig.tailwind.baseColor, "neutral");
  assert.equal(shadcnConfig.tailwind.css, "app/globals.css");
  assert.ok(packageJson.dependencies["@radix-ui/react-slot"]);
  assert.ok(packageJson.dependencies["class-variance-authority"]);
  assert.ok(packageJson.devDependencies["@tailwindcss/postcss"]);
  assert.ok(packageJson.devDependencies.tailwindcss.startsWith("^4."));

  const postCssConfig = readFileSync(
    join(projectRoot, "postcss.config.mjs"),
    "utf8",
  );
  assert.match(postCssConfig, /["']@tailwindcss\/postcss["']\s*:/);

  const globalCss = readFileSync(
    join(projectRoot, shadcnConfig.tailwind.css),
    "utf8",
  );
  assert.match(globalCss, /@import\s+["']tailwindcss["']\s*;/);
  assert.match(globalCss, /@theme\s+inline\s*\{/);

  const buttonSource = readFileSync(
    join(projectRoot, "components/ui/button.tsx"),
    "utf8",
  );
  assert.match(buttonSource, /\bcva\s*\(/);
  assert.match(buttonSource, /\bbuttonVariants\b/);
  assert.match(buttonSource, /import\s+\{\s*cn\s*\}\s+from\s+["'][^"']+["']/);
  assert.match(buttonSource, /\bcn\s*\(/);
  assert.match(buttonSource, /React\.ComponentProps<"button">/);
  assert.match(buttonSource, /const Comp = asChild \? Slot : "button"/);
  assert.match(
    buttonSource,
    /export\s+(?:function|const)\s+Button\b|export\s*\{[^}]*\bButton\b[^}]*\}/s,
  );
});
