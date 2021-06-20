# eslint-config

My custom eslint config.

## Usage

### Install Dependencies

```bash
pnpm add -D eslint @yunyoujun/eslint-config
```

### Extends Config

Create a new file called `.eslintrc`

```json
// .eslintrc
{
  "extends": "@yunyoujun"
}
```

Create a new file called `.eslintignore`

```txt
dist
node_modules
public
```

### Add Script

```json
// package.json
{
  "scripts": {
    "lint": "npx eslint --ext .js,.ts,.json,.vue --fix ."
  }
}
```

### Prettier

Custom `.prettierrc`.

```json
{
  "semi": false,
  "singleQuote": true
}
```

## Packages

| Name                                               | Version                                                                                                                             |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [@yunyoujun/eslint-config](packages/all/)          | [![npm](https://img.shields.io/npm/v/@yunyoujun/eslint-config)](https://www.npmjs.com/package/@yunyoujun/eslint-config)             |
| [@yunyoujun/eslint-config-react](packages/react/)  | [![npm](https://img.shields.io/npm/v/@yunyoujun/eslint-config-react)](https://www.npmjs.com/package/@yunyoujun/eslint-config-react) |
| [@yunyoujun/eslint-config-vue](packages/vue/)      | [![npm](https://img.shields.io/npm/v/@yunyoujun/eslint-config-vue)](https://www.npmjs.com/package/@yunyoujun/eslint-config-vue)     |
| [@yunyoujun/eslint-config-ts](packages/typescript) | [![npm](https://img.shields.io/npm/v/@yunyoujun/eslint-config-ts)](https://www.npmjs.com/package/@yunyoujun/eslint-config-ts)       |
| [@yunyoujun/eslint-config-basic](packages/basic/)  | [![npm](https://img.shields.io/npm/v/@yunyoujun/eslint-config-basic)](https://www.npmjs.com/package/@yunyoujun/eslint-config-basic) |

## Base

- [ESLint](https://eslint.org/)

## Ref

I referred to them and simplified some configurations that I don't need.

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@nuxt/eslint-config](https://github.com/nuxt/eslint-config)

## Release

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

- [`--no-push`](https://github.com/lerna/lerna/tree/main/commands/version#--no-push): By default, lerna version will push the committed and tagged changes to the configured git remote. Pass --no-push to disable this behavior.
