// expressモジュール読み込み
const express = require('express')
// dotenvモジュール読み込み
const dotenv = require('dotenv')
// routerモジュール読み込み
const routes = require('./routes')

// dotenvの設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

// サーバ作成
const app = express()

// ミドルウェアの設定
// publicフォルダを静的コンテンツのフォルダに設定
app.use(express.static(__dirname + '/public'))

// URLエンコード
app.use(express.urlencoded({ extended: true }))

// express-ejs-layoutsモジュール読み込み
const layouts = require('express-ejs-layouts')
// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs')
// views/layouts/default.ejs をレイアウトとして利用
app.set('layout', 'layouts/default')
// ミドルウェアとして利用
app.use(layouts)

//Express Sessionのミドルウェア追加
const session = require('express-session')
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitalized: false,
}))

// ルーティングを有効
app.use(routes)

//　サーバ停止: 起動中のターミナルで Ctrl + C
// サーバ待機（Listen）
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})