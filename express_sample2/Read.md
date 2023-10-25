# Node.js アプリ開発
- Node.jsのインストールが必要
- JavaScriptでプログラミング

## プロジェクトの初期化
```
npm init -y
```

## パッケージインストール
- インターネットからプログラムダウンロード
```
npm install express dotenv nodemon fs

// または
npm i express dotenv nodemon fs
```

## プログラム作成
- xxxx.js

### プログラムの実行
```
node xxx.js
```

### 実行コマンド登録
#### package.json
```
  "scripts": {
    "dev": "nodemon server",
    ...
  },
```
ターミナルで実行
```
npm run dev
```
- Node Monitor でプログラム実行
- ファイルを保存するたびに、node xxxx.js が実行

## View
### EJS （テンプレートエンジン）
- Viewを表示するためのパッケージ

```
npm i ejs
```

#### Viewファイルの作成
- views/ に xxx.ejs を作成して、HTMLを記述

#### Viewファイルの表示
- レスポンスで render() を利用

```
var data = { title: "Top Page" }
res.render('index', data)
```
- views/index.ejs にデータを受け渡して表示

### レイアウト作成
- Viewを表示するためのパッケージ

```
npm i express-ejs-layouts
```