// models/item.js を読み込む
const item = require('../models/item')

/**
 * 商品一覧
 */
exports.index = (req, res) => {
    var data = {
        title: "商品一覧",
        items: item.get(),
    }
    // views/item/index.ejs にデータを渡して表示
    res.render('item/index', data)
}

/**
 * 商品詳細
 */
exports.detail = (req, res) => {
    const id = req.params.id
    // TODO: case1 RDBMS を利用する
    // TODO: case2 APIサーバを利用する
    var selectItem = item.find(id)
    var data = {
        title: "商品詳細",
        item: selectItem,
    }
    res.render('item/detail', data)
}