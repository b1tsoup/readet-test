const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  globalIgnores(['.expo/**', 'android/**', 'ios/**', 'dist/**', 'web-build/**']),
  expoConfig,
]);
