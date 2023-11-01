//Modelモジュール読み込み
const Model = require('./Model')

//Modelクラスを継承
class User extends Model {
    dataFile = "./data/users.json"

    /**
     * 認証用のメソッド
     * @param string email 
     * @param string password 
     * @return array
     */
    auth = (email, password) => {
        //email と passswordが一致したらユーザを返す
        // TODO：データベースに接続してユーザ取得
        // TODO：パスワードはハッシュ値でチェック
        return this.get().find((value) => 
            (value.email == email && value.password == password)
        );
    }

}

//モジュール化
module.exports = User