module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
      rules: {
        "no-console": "warn",
        "prefer-destructuring": "error",
        "arrow-body-style": ["error", "as-needed"],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-unsafe-assignment": ["off"],
        "@typescript-eslint/no-unsafe-call": ["off"],
        "@typescript-eslint/no-unsafe-member-access": ["off"],
        "@typescript-eslint/no-unsafe-return": ["off"],
      },
    },
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  settings: {
    "import/resolver": {
      "babel-module": {},
      "babel-plugin-root-import": {},
    },
    react: {
      version: "detect",
    },
  },
};
