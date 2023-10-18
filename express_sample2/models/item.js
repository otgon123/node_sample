// fs モジュールを読み込み
const fs = require('fs')

// data/items.jsonのパス設定
exports.filePath = "./data/items.json"

// すべてのデータを取得するメソッド
exports.get = () => {
    //外部ファイルの読み込み
    var json = fs.readFileSync(this.filePath)
    // JSONデータをパース（オブジェクトに変換）
    var values = JSON.parse(json);

    return values;
}