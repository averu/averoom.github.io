// ajaxでコンタクトフォーム送信
function send_contact_form() {
  // 今回、Submitボタンが押されても画面は遷移せず（フォームは送信せず）、
  // あくまでボタンクリックのイベントをトリガーにこのAjaxを呼び出しPHPを呼び出すので、
  // フォームに入力された内容を取得するにはjQueryの記述でCSSのセレクタを使ってフォームの要素を指定して内容を取得する。
  var contact_form_contents = {
    krile : $(':text[name="krile"]').val(),
    titlebar : $(':text[name="titlebar"]').val(),
    krile_content : $(':text[name="krile-content"]').val(),
    tweet : $(':text[name="tweet"]').val(),
    tab : $(':text[name="tab"]').val(),
    tldefault : $(':text[name="tldefault"]').val(),
    tlmyself : $(':text[name="tlmyself"]').val(),
    tlretweet : $(':text[name="tlretweet"]').val(),
    tlmention : $(':text[name="tlmention"]').val(),
    tldirect : $(':text[name="tldirect"]').val()
  };


  // AjaxでPHPを呼び出す
  $.ajax({
    type: 'POST',
    url: '../html/xmloutput.php', // 実行するPHPの相対パス
    cache: false,
    data: contact_form_contents, // PHPに渡すデータ。↑で定義。PHPでは$_POST['sender_name']のように、通常フォーム送信された時と同じように値が取得できる。
    success: function(html) {
      console.log(html);
      document.getElementById("xml-output").href = html;
      // 特にエラーが無くPHPが実行された後に実行する処理
      // jQueryなどが記述可能
      // 引数の html は予約語（決められた名前）で、実行したPHPのecho命令（複数可）などで出力された内容が格納されている。
    },
    error: function() {
      // エラーが返ってきた場合の処理
    }
  });
}
