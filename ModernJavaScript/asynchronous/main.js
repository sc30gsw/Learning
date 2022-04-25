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

  // promsiseの実行(連鎖) → 指定した順に処理を実行できる(1つ目のPromiseが終了しないと次のPromiseは実行されない)
  // 画像読み込み処理の呼び出し
  // loadImage('img/pic1.png')
  //   // promiseの実行
  //   .then(img => {
  //     imgdiv.appendChild(img);
  //     // 画像読み込み処理の呼び出し
  //     return loadImage('img/pic2.png');
  //   })
  //   // promiseの実行
  //   .then(img => {
  //     imgdiv.appendChild(img);
  //     // 画像読み込み処理の呼び出し
  //     return loadImage('img/pic3.png');
  //   })
  //   // promiseの実行
  //   .then(img => {
  //     imgdiv.appendChild(img);
  //     // 画像読み込み処理の実行
  //     return loadImage('img/pic4.png');
  //   });

  // 上記の連鎖を短くしたもの
  // Promise.resolve() → Promiseの結果が格納されている
  Promise.resolve()
    // 画像読み込み処理の呼び出し
    .then(() => loadImage('img/pic1.png'))
    .then(img => imgdiv.appendChild(img))
    // 画像読み込み処理の呼び出し
    .then(() => loadImage('img/pic2.png'))
    .then(img => imgdiv.appendChild(img))
    // 画像読み込み処理の呼び出し
    .then(() => loadImage('img/pic3.png'))
    .then(img => imgdiv.appendChild(img))
    // 画像読み込み処理の呼び出し
    .then(() => loadImage('img/pic4.png'))
    .then(img => imgdiv.appendChild(img))
    // エラーハンドリング
    .catch(reason => console.log({reason}));
  
  // 上記をループ処理することも可能
  // ※ 画像読み込みが順不同となるため、上記の連鎖がベターか
  // let p = Promise.resolve();
  // for (let i = 1; i <= 4; i ++) {
  //   p = p.then(() => {
  //     loadImage(`img/pic${i}.png`)
  //     .then(img => imgdiv.appendChild(img));
  //   });
  // }
}