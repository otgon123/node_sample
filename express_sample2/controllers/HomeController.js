// モジュール化
// Top
exports.index = (req, res) => {
    // リクエストの処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)
    // レスポンスの処理
    // res.send('Hello!!!!!!')
    //テンプレート表示（レンダリング）
    // views/index.ejs を表示
    res.render('index')
}

// Profile
exports.profile = (req, res) => {
    var user = {
        id: 1,
        name: 'YSE',
        birthplace: '横浜',
        hobby: ['旅行', 'グルメ', 'スポーツ'],
    }
    var data = {
        title: 'プロフィール',
        user: user,
    }
    res.render('profile', data)
}