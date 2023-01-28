module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:node/recommended",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  settings: {
    node: {
      tryExtensions: [".js", ".json", ".node", ".ts"],
    },
    typescript: true,
    "import/resolver": {
      typescript: true,
      node: true,
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
  },
  plugins: ["prettier", "@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-var-requires": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};
