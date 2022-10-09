module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: "standard-with-typescript",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "warn",
      "double"
    ],
    semi: [
      "error",
      "never"
    ]
  }
}
