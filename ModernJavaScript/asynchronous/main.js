'use strict';

{
  /**
   * 画像読み込み処理(非同期)
   * 
   * @param {*} url URL
   */
  const loadImage = url => {
    return new Promise((resolve, reject) => {

      const request = new XMLHttpRequest();

      const callback = () => {
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
          // 生成したimg要素を結果として渡す
          // thenで呼び出し時に渡される
          resolve(img);

          // HTTPステータスコードがエラーの場合
        } else {
          // HTTPステータスとステータスのテキスト('Not Found'など)を表示する
          reject(`${request.status}: ${request.statusText}`);
        }
      }

      // リクエストの初期化
      // 第一引数: HTTPメソッド 第二引数: リクエストを送信するURL
      request.open('GET', url);
      // レスポンスのデータ型を指定
      request.responseType = 'blob';
      request.addEventListener('load', callback);
      request.addEventListener('error', e => {
        reject(Error('Network error'));
      })

      request.send();
    });
  }

  // imgタグの親となる要素を取得
  const imgdiv = document.getElementById('images');
  // 画像読み込み(非同期)関数の呼び出し
  const promise1 = loadImage('img/pic1.png');
  
  // promiseの実行
  promise1.then(img => {
    imgdiv.appendChild(img);
  });

  // 画像読み込み(非同期)関数の呼び出し
  const promise2 = loadImage('img/pic2.png');

  // promiseの実行
  promise2.then(img => {
    imgdiv.appendChild(img);
  });

  // 画像読み込み(非同期)関数の呼び出し
  const promise3 = loadImage('img/pic3.png');

  // promiseの実行
  promise3.then(img => {
    imgdiv.appendChild(img);
  });

  // 画像読み込み(非同期)関数の呼び出し
  const promise4 = loadImage('img/pic4.png');

  // promiseの実行
  promise4.then(img => {
    imgdiv.appendChild(img);
  });
}