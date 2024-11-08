/** @typedef {import("prettier").Config} PrettierConfig */
/** @type { PrettierConfig } */
const config = {
  arrowParens: 'always',
  printWidth: 80,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  tabWidth: 2,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrderTypeScriptVersion: '4.4.0',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/(.*)$',
    '^[./]',
  ],
  proseWrap: 'always',
}

module.exports = config
