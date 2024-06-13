# Turborepo スターター

公式スターターのターボレポ。

## Using this example

以下のコマンドを実行:

```sh
npx create-turbo@latest
```

## 内容

本 TurboRepo には以下のパッケージ/アプリが含まれています:

### Apps と Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

各パッケージ／アプリは100% [TypeScript](https://www.typescriptlang.org/).

### ユーティリティ

このTurborepoには、すでにいくつかの追加ツールがセットアップされています:

- [TypeScript](https://www.typescriptlang.org/) 静的型チェック用
- [ESLint](https://eslint.org/) コードリンティング用
- [Prettier](https://prettier.io) コードフォーマット用

### Build

すべてのアプリとパッケージをビルドするには、以下のコマンドを実行:

```
cd my-turborepo
yarn build
```

### Develop

すべてのアプリとパッケージを開発するには、以下のコマンドを実行:

```
cd my-turborepo
yarn dev
```

### Remote Caching

Turborepoは、[リモートキャッシング](https://turbo.build/repo/docs/core-concepts/remote-caching)と呼ばれる技術を使用して、マシン間でキャッシュアーティファクトを共有することができ、チームやCI/CDパイプラインでビルドキャッシュを共有することができます。

デフォルトでは、Turborepoはローカルにキャッシュします。リモートキャッシュを有効にするには、Vercelのアカウントが必要です。[アカウント](https://vercel.com/signup)をお持ちでない場合は、アカウントを作成し、以下のコマンドを入力してください。


```
cd my-turborepo
npx turbo login
```
これにより、Turborepo CLIはあなたの[Vercelアカウント](https://vercel.com/docs/concepts/personal-accounts/overview)で認証されます。

```
npx turbo link
```

## リンク

ターボレポの威力についてもっと知る:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
