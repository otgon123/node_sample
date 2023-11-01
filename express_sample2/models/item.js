//Modelモジュール読み込み
const Model = require('./Model')

//Modelクラスを継承
class Item extends Model {
    dataFile = "./data/items.json"
}

//モジュール化
module.exports = Item