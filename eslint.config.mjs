import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Set up directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Make sure compat.extends returns an array of strings and not functions
const eslintConfig = compat.extends("next/core-web-vitals");

export default eslintConfig;
