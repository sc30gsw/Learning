'use strict';

{
  /**
   * 画像読み込み処理(非同期)
   * 
   * @param {*} url URL
   * @param {*} element imgタグの親要素
   */
  const addImage = (url, element) => {
    const request = new XMLHttpRequest();

    // リクエストの初期化
    // 第一引数: HTTPメソッド 第二引数: リクエストを送信するURL
    request.open('GET', url);
    // レスポンスのデータ型を指定
    request.responseType = 'blob';

    // リクエストが送信されたときにイベント発火
    request.addEventListener('load', () => {
      // HTTPステータスコードが200の場合
      if (request.status === 200) {
        // reqponseプロパティで、リクエストの本文の内容をリクエストのプロパティの値(responseType)に応じた形で返す
        // レスポンスとなる画像を配列(複数枚)受け取る
        // 画像タイプはpng
        const blob = new Blob([request.response], {type: 'image/png'});
        
        // imgタグの生成
        const img = document.createElement('img');
        // src属性に引数で指定されたオブジェクトを含むURL文字列の作成
        img.src = URL.createObjectURL(blob);
        // 関数の引数に指定された要素の子要素に追加する
        element.appendChild(img);

        // HTTPステータスコードがエラーの場合
      } else {
        // HTTPステータスとステータスのテキスト('Not Found'など)をコンソールに表示する
        console.log(`${request.status}: ${request.statusText}`);
      }
    });

    // スクリプトに実行エラーが生じた場合コンソールにメッセージを表示する
    request.addEventListener('error', e => {
      console.log('Network Error');
    });

    request.send();
  }

  // imgタグの親となる要素を取得
  const imgdiv = document.getElementById('images');
  // 画像読み込み(非同期)関数の呼び出し
  addImage('img/pic1.png', imgdiv);
  addImage('img/pic2.png', imgdiv);
  addImage('img/pic3.png', imgdiv);
  addImage('img/pic4.png', imgdiv);
}