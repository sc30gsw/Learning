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

  // async・await構文でのPromiseの呼び出し
  // const putImage = async (url, element) => {
  //   loadImage()関数の解決を待ってから要素を追加する
  //   const img = await loadImage(url);
  //   element.appendChild(img);
  // }
  // 上記関数の呼び出し方法
  // putImage('img/pic1.png', imgdiv);
  // putImage('img/pic2.png', imgdiv);
  // putImage('img/pic3.png', imgdiv);
  // putImage('img/pic4.png', imgdiv);

  // 複数のawaitの実装
  // const putImage = async (url1, url2, element) => {
  //    loadImage()関数の解決を待ってから要素(img1)を追加する
  //    const img1 = await loadImage(url1);
  //    element.appendChild(img);
  //    loadImage()関数の解決を待ってから要素(img2)を追加する
  //    const img2 = await loadImage(url2);
  //    element.appendChild(img2);
  // }
  // 上記関数の呼び出し方法
  // putImage('img/pic1.png', 'img/pic2.png', imgdiv);

  // 上記の実装を繰り返し処理にした場合
  const putImage = async (urls, element) => {
    for (const url of urls) {
      // loadImage()関数の解決を待ってから要素を追加する
      const img = await loadImage(url);
      element.appendChild(img);
    }
  };

  // 表示したい画像のURLを配列に格納
  const urls = [
    'img/pic1.png',
    'img/pic2.png',
    'img/pic3.png',
    'img/pic4.png'
  ];

  putImage(urls, imgdiv);
}