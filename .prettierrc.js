/** @type {import('prettier').Options} */
const commonConfig = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
}

/** @type {import('prettier').Options} */
const tsConfig = {
  ...commonConfig,
  parser: "typescript",
}

/** @type {import('prettier').Options} */
const jsConfig = {
  ...commonConfig,
  parser: "babel",
}

/** @type {import('prettier').Options} */
const cssConfig = {
  ...commonConfig,
  parser: "css",
}

/** @type {import('prettier').Options} */
const htmlConfig = {
  ...commonConfig,
  parser: "html",
}

module.exports = {
  // Common options for all file types
  ...commonConfig,

  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      ...tsConfig,
    },
    {
      files: ["**/*.js", "**/*.jsx"],
      ...jsConfig,
    },
    {
      files: ["**/*.css"],
      ...cssConfig,
    },
    {
      files: ["**/*.html"],
      ...htmlConfig,
    },
  ],
  // Add any other options specific to your project here
}
