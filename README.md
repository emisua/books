# 🚀 React-TS-Tailwind 🚀

Starter kit for modern web applications with EsLint and Husky

## Motivation
Starting a new project and setting up everything from scratch can be a pain. Therefor i decided to create my own little Starter kit with the most common Libraries and stuff.

## Features
- ✨ [Vite](#vite)
- ✨ [React](#react)
  - `v18`
- ✨ [TypeScript](#typescript)
- ✨ [Tailwind CSS](#tailwind)
- ✨ [ESlint](#eslint)
  - `AirBnB config`
  - `Prettier config`
- ✨ [Prettier](#prettier)
- ✨ [Husky](#husky)

#### Vite
[Vite](https://vitejs.dev/) is the build tool of choice. It is super fast and is based on [native ES modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), [rollup](https://rollupjs.org/guide/en/), and [esbuild](https://esbuild.github.io/)

#### React
[React](https://reactjs.org/) in the latest version (v18). All dependencies match up against the version of React.

#### TypeScript
"Not using [TypeScript](https://www.typescriptlang.org/) is like driving without a seatbelt" - [Matt Howard](https://twitter.com/MattDotHow).

TypeScript is a superset of JavaScript. Once you know JavaScript you should learn TypeScript easily and fast. Checkout the official [documentation](https://www.typescriptlang.org/docs/)!

#### Tailwind
"Rapidly build modern websites without ever leaving your HTML." - [Official Tailwind CSS Website](https://tailwindcss.com/).
[Tailwind](https://tailwindcss.com/) CSS is a framework for quickly building and customizing applications without writing custom CSS.

#### ESlint
[ESlint](https://eslint.org/) is preconfigured with one of the most popular config.

The following configs are included:
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)

#### Prettier
[Prettier](https://prettier.io/) is preconfigured. For the current configuration check the [./.prettierrc.cjs](./.prettierrc.cjs) file.

#### Husky
Check out [husky](https://typicode.github.io/husky/#/). Currently it is configured with a pre-commit hook that checks your code.

## Usage
You can fork/clone the repository.

Install dependencies:

```bash
npm install # or yarn
```

In order to run it in development, run:

```bash
npm run dev # or yarn dev
```

In order to do a production build, run:

```bash
npm run build # yarn build
```

To lint the code, run
```bash
npm run lint # yarn lint
```

To fix autofixable linting errors, run
```bash
npm run lint:fix # yarn lint:fix
```

To check your formatting, run
```bash
npm run format:check # yarn format:check
````

To fix your formatting, run
```bash
npm run format:fix # yarn format:fix
```

## License

[MIT](./LICENSE)
