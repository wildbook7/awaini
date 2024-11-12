This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 開発環境構築の手順

- `git clone` コマンドを使用して、ソースコードをローカル PC にダウンロード。
- `npm install` を実行して、使用するライブラリをダウンロード。
- `.env.local` ファイルをルートディレクトリーに作成して、Vercel Postgres の環境変数をコピーペーストする。
- `.env.local` ファイルに環境変数 `GOOGLE_BOOKS_API_KEY` を追加する。

## Prisma docs

開発環境でのホットリロード時に DB 接続インスタンスが増えないよう、`prisma.ts` にて対処している。本番環境はサーバーレスで動作するため、対処していない。

- [Deploy to Vercel](https://www.prisma.io/docs/orm/prisma-client/deployment/serverless/deploy-to-vercel)

## 環境変数を読み込んだ後に Prisma Studio を起動

次のコマンドをルートディレクトリーで実行します。

```bash
set -a && source .env.local && set +a && npx prisma studio
```

## Google API Console にて Books API を有効にする

- [Google API Console](https://console.developers.google.com/?hl=ja)
- [Google Books API](https://developers.google.com/books?hl=ja)

## その他

- https://youtu.be/vOLIVFKR-wI?si=wtYJDsKcg3i8_UQt
- [Standard Redux Toolkit Project Setup with TypeScript](https://redux.js.org/usage/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript)
- state の扱い方の比較
  | |特徴|
  |-|-|
  |useState|set 関数呼び出しが分散して、コードの見通しが悪くなる傾向がある。|
  |useReducer|set 関数呼び出し箇所を「アクション(type 等)」ディスパッチに変えることで、state ロジックが reducer 関数に集約される。|
  |Redux(Toolkit)|個別の『counterSlice.ts』等ファイルにて、initialState と reducers(reducer と ActionCreator の組合せ)を用意する。<br>『store.ts』ファイルにて、個別ファイルの reducer(上記の reducers に相当)を関連付ける。<br>state 値の参照は、useSelector 経由で store から取得する。<br> state 値の更新は、useDispatch 経由で Action を store へ送付する。|
