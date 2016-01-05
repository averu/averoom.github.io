/*// ajaxでコンタクトフォーム送信
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
    url: './xmloutput.php', // 実行するPHPの相対パス
    cache: false,
    data: contact_form_contents, // PHPに渡すデータ。↑で定義。PHPでは$_POST['sender_name']のように、通常フォーム送信された時と同じように値が取得できる。
    success: function(html) {
      document.getElementById("xml-output").href = html;
      console.log(html);
      // 特にエラーが無くPHPが実行された後に実行する処理
      // jQueryなどが記述可能
      // 引数の html は予約語（決められた名前）で、実行したPHPのecho命令（複数可）などで出力された内容が格納されている。
    },
    error: function() {
      // エラーが返ってきた場合の処理
    }
  });
}*/
/*function xml_update(){

  xmlDoc=loadXMLDoc("./xml/StarryEyesXml.xml");

  ThemeProfile = xmlDoc.getElementsByTagName("ThemeProfile")[0]
    BaseColor = ThemeProfile.getElementsByTagName("BaseColor")[0]
      BaseBackgroundColor = BaseColor.getElementsByTagName("BackgroundColor")[0].childNodes[0];
      BaseBackgroundColor.nodeValue = ($(':text[name="krile-content"]').val()).replace("#", "#FF");
    GlobalKeyColor = ThemeProfile.getElementsByTagName("GlobalKeyColor")[0].childNodes[0];
    GlobalKeyColor.nodeValue = ($(':text[name="krile"]').val()).replace("#", "#FF");
    TitleBarColor = ThemeProfile.getElementsByTagName("TitleBarColor")[0]

      TitleBarBackgroundColor = TitleBarColor.getElementsByTagName("BackgroundColor")[0].childNodes[0];
      TitleBarBackgroundColor = ($(':text[name="titlebar"]').val()).replace("#", "#FF");

    TabColor = ThemeProfile.getElementsByTagName("TabColor")[0]
      DefaultColor = TabColor.getElementsByTagName("DefaultColor")[0].childNodes[0];
      SelectedColor = TabColor.getElementsByTagName("SelectedColor")[0].childNodes[0];
      FocusedColor = TabColor.getElementsByTagName("FocusedColor")[0].childNodes[0];
      DefaultColor.nodeValue = ($(':text[name="tab"]').val()).replace("#", "#33");
      SelectedColor.nodeValue = ($(':text[name="tab"]').val()).replace("#", "#88");
      FocusedColor.nodeValue = ($(':text[name="tab"]').val()).replace("#", "#FF");

    TweetDefaultColor = ThemeProfile.getElementsByTagName("TweetDefaultColor")[0]
      TweetDefault = TweetDefaultColor.getElementsByTagName("Default")[0]
        TweetBackgroundColor = BaseColor.getElementsByTagName("BackgroundColor")[0].childNodes[0];
        TweetForegroundColor = BaseColor.getElementsByTagName("ForegroundColor")[0].childNodes[0];
        TweetBackgroundColor.nodeValue = ($(':text[name="tldefault"]').val()).replace("#", "#16");
        TweetForegroundColor.nodeValue = ($(':text[name="tldefault"]').val()).replace("#", "#FF");
      TweetForegroundKeyColor = TweetDefaultColor.getElementsByTagName("ForegroundKeyColor")[0].childNodes[0];
      TweetForegroundKeyColor.nodeValue = ($(':text[name="tweet"]').val()).replace("#", "#FF");

    TweetMyselfColor = ThemeProfile.getElementsByTagName("TweetMyselfColor")[0]
      MyselfDefault = TweetMyselfColor.getElementsByTagName("Default")[0]
        MyselfBackgroundColor = BaseColor.getElementsByTagName("BackgroundColor")[0].childNodes[0];
        MyselfForegroundColor = BaseColor.getElementsByTagName("ForegroundColor")[0].childNodes[0];
        MyselfBackgroundColor.nodeValue = ($(':text[name="tlmyself"]').val()).replace("#", "#16");
        MyselfForegroundColor.nodeValue = ($(':text[name="tlmyself"]').val()).replace("#", "#FF");
      MyselfForegroundKeyColor = TweetMyselfColor.getElementsByTagName("ForegroundKeyColor")[0].childNodes[0];
      MyselfForegroundKeyColor.nodeValue = ($(':text[name="tweet"]').val()).replace("#", "#FF");

    TweetMentionColor = ThemeProfile.getElementsByTagName("TweetMentionColor")[0]
      MentionDefault = TweetMentionColor.getElementsByTagName("Default")[0]
        MentionBackgroundColor = BaseColor.getElementsByTagName("BackgroundColor")[0].childNodes[0];
        MentionForegroundColor = BaseColor.getElementsByTagName("ForegroundColor")[0].childNodes[0];
        MentionBackgroundColor.nodeValue = ($(':text[name="tlmention"]').val()).replace("#", "#16");
        MentionForegroundColor.nodeValue = ($(':text[name="tlmention"]').val()).replace("#", "#FF");
      MentionForegroundKeyColor = TweetMentionColor.getElementsByTagName("ForegroundKeyColor")[0].childNodes[0];
      MentionForegroundKeyColor.nodeValue = ($(':text[name="tweet"]').val()).replace("#", "#FF");

    TweetRetweetColor = ThemeProfile.getElementsByTagName("TweetRetweetColor")[0]
      RetweetDefault = TweetRetweetColor.getElementsByTagName("Default")[0]
        RetweetBackgroundColor = BaseColor.getElementsByTagName("BackgroundColor")[0].childNodes[0];
        RetweetForegroundColor = BaseColor.getElementsByTagName("ForegroundColor")[0].childNodes[0];
        RetweetBackgroundColor.nodeValue = ($(':text[name="tlretweet"]').val()).replace("#", "#16");
        RetweetForegroundColor.nodeValue = ($(':text[name="tlretweet"]').val()).replace("#", "#FF");
      RetweetForegroundKeyColor = TweetRetweetColor.getElementsByTagName("ForegroundKeyColor")[0].childNodes[0];
      RetweetForegroundKeyColor.nodeValue = ($(':text[name="tweet"]').val()).replace("#", "#FF");

    TweetDirectColor = ThemeProfile.getElementsByTagName("TweetDirectMessageColor")[0]
      DirectDefault = TweetDirectColor.getElementsByTagName("Default")[0]
        DirectBackgroundColor = BaseColor.getElementsByTagName("BackgroundColor")[0].childNodes[0];
        DirectForegroundColor = BaseColor.getElementsByTagName("ForegroundColor")[0].childNodes[0];
        DirectBackgroundColor.nodeValue = ($(':text[name="tldirect"]').val()).replace("#", "#16");
        DirectForegroundColor.nodeValue = ($(':text[name="tldirect"]').val()).replace("#", "#FF");
      DirectForegroundKeyColor = TweetDirectColor.getElementsByTagName("ForegroundKeyColor")[0].childNodes[0];
      DirectForegroundKeyColor.nodeValue = ($(':text[name="tweet"]').val()).replace("#", "#FF");

      document.getElementById("xml-output").value = xs.serializeToString(xml);
      var XmlParser = new JKL.ParseXML( xmlDoc ); // JKL.ParseXMLオブジェクトを作成
      var obj = XmlParser.parse(); // XMLファイルをパース
      console.log(obj);
}*/

function loadXMLDoc(dname)
  {
  if (window.XMLHttpRequest)
    {
    xhttp=new XMLHttpRequest();
    }
  else
    {
    xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET",dname,false);
  xhttp.send("");
  return xhttp.responseXML;
}
function xml_update(){
    var url = "./xml/StarryEyesXml.xml";
    var xotree = new XML.ObjTree();
    var data = xotree.parseHTTP(url);
    //var data = xotree.parseXML(xml);
    console.log(data.ThemeProfile);
    //GlobalKeyColor
    data.ThemeProfile.GlobalKeyColor = ($(':text[name="krile"]').val()).replace("#", "#FF");
    //TitleBar
    data.ThemeProfile.TitleBarColor.BackgroundColor = ($(':text[name="titlebar"]').val()).replace("#", "#FF");
    //BaseColor
    data.ThemeProfile.BaseColor.BackgroundColor = ($(':text[name="krile-content"]').val()).replace("#", "#FF");
    data.ThemeProfile.TabColor.DefaultColor = ($(':text[name="tab"]').val()).replace("#", "#33");
    data.ThemeProfile.TabColor.SelectedColor = ($(':text[name="tab"]').val()).replace("#", "#88");
    data.ThemeProfile.TabColor.FocusedColor = ($(':text[name="tab"]').val()).replace("#", "#FF");
    data.ThemeProfile.TweetDefaultColor.Default.BackgroundColor = ($(':text[name="tldefault"]').val()).replace("#", "#16");
    data.ThemeProfile.TweetDefaultColor.Default.ForegroundColor = ($(':text[name="tweet"]').val()).replace("#", "#FF");
    data.ThemeProfile.TweetDefaultColor.ForegroundKeyColor = ($(':text[name="tldefault"]').val()).replace("#", "#FF");

    data.ThemeProfile.TweetMyselfColor.Default.BackgroundColor = ($(':text[name="tlmyself"]').val()).replace("#", "#16");
    data.ThemeProfile.TweetMyselfColor.Default.ForegroundColor = ($(':text[name="tweet"]').val()).replace("#", "#FF");
    data.ThemeProfile.TweetMyselfColor.ForegroundKeyColor = ($(':text[name="tlmyself"]').val()).replace("#", "#FF");

    data.ThemeProfile.TweetMentionColor.Default.BackgroundColor = ($(':text[name="tlmention"]').val()).replace("#", "#16");
    data.ThemeProfile.TweetMentionColor.Default.ForegroundColor = ($(':text[name="tweet"]').val()).replace("#", "#FF");
    data.ThemeProfile.TweetMentionColor.ForegroundKeyColor = ($(':text[name="tlmention"]').val()).replace("#", "#FF");

    data.ThemeProfile.TweetRetweetColor.Default.BackgroundColor = ($(':text[name="tlretweet"]').val()).replace("#", "#16");
    data.ThemeProfile.TweetRetweetColor.Default.ForegroundColor = ($(':text[name="tweet"]').val()).replace("#", "#FF");
    data.ThemeProfile.TweetRetweetColor.ForegroundKeyColor = ($(':text[name="tlretweet"]').val()).replace("#", "#FF");

    data.ThemeProfile.TweetDirectMessageColor.Default.BackgroundColor = ($(':text[name="tldirect"]').val()).replace("#", "#16");
    data.ThemeProfile.TweetDirectMessageColor.Default.ForegroundColor = ($(':text[name="tweet"]').val()).replace("#", "#FF");
    data.ThemeProfile.TweetDirectMessageColor.ForegroundKeyColor = ($(':text[name="tldirect"]').val()).replace("#", "#FF");

    xmldata = xotree.writeXML(data)
    //console.log(xotree.writeXML(data));
    document.getElementById( "xml-output" ).value = xmldata;
}
function escape_html ( text ) {
    if ( typeof(text) == "undefined" ) return "";
    return text.replace( /&/g, "&amp;" ).replace( /</g, "&lt;" ).replace( />/g, "&gt;" ).replace( / /g, "&nbsp;" );
}
