/**
 * Device Detector
 * GitHub : git@github.com:ndaidong/device-detector.git
 * Author by @ndaidong at Twitter
**/

;(function(context){

  var DeviceDetector = {
    ENV: 'browser'
  }

  if(typeof module !== 'undefined' && module.exports){
    DeviceDetector.ENV = 'node';
  }

  var detectDevice = function(userAgent){

    var re = {
      type: 'Unknown',
      browser: '',
      engine: '',
      version: '',
      os: ''
    }

    var ua = userAgent || navigator.userAgent;

    if(!ua){
      return re;
    }

    var n = ua.toLowerCase();

    re.userAgent = ua;

    var detect = function(p){
      return p.test(n);
    }

    var isChrome = detect(/chrome/i);
    var isSafari = detect(/safari/i);
    var isFirefox = detect(/firefox/i);
    var isVivaldi = detect(/vivaldi/i);
    var isOpera = detect(/opera/i);
    var isOperaMini = detect(/opera mini/i);
    var isEdge = detect(/edge/);
    var isIE = detect(/msie/i);
    var isMidori = detect(/midori/i);
    var isMaxthon = detect(/maxthon/i);
    var isNetscape = detect(/netscape/i);
    var isKonqueror = detect(/konqueror/i);
    var isMinefield = detect(/minefield/i);
    var isOmniWeb = detect(/omniweb/i);
    var isUCBrowser = detect(/ucbrowser/);

    var isWebkit = detect(/webkit/i);
    var isGecko = detect(/gecko/i);
    var isPresto = detect(/presto/i);
    var isTrident = detect(/trident/i);
    var isAvantBrowser = detect(/avant browser/i);
    var isSeaMonkey = detect(/seamonkey/i);
    var isDeepnetExplorer = detect(/deepnet/i);
    var isDorothy = detect(/dorothy/i);
    var isFennec = detect(/fennec/i);
    var isMaemo = detect(/maemo/i);

    re.type = (function(){
      var t = 'Desktop';
      if(detect(/(iphone|ipod|((?:android)?.*?mobile)|j2me|mobi|blackberry|nokia|maemo|mini)/i)){
        t = 'Mobile';
      }
      else if(detect(/(ipad|android(?!.*mobile))/i) || detect(/\W(kindle|silk|tablet)\W/i)){
        t = 'Tablet';
      }
      else if(detect(/(bot|crawler|spider|slurp|seeker)/i)){
        t = 'Bot';
      }
      else if(detect(/(fetcher|scan|valid|check|news|engine)/i)){
        t = 'Util';
      }
      return t;
    })();

    re.os = (function(){

      var o = '';

      if(re.type === 'Bot' || re.type === 'Util'){
        return o;
      }

      if(detect(/android/i)){
        o = 'Android';
      }
      else if(detect(/(ipad|iphone|ipod)/i)){
        o = 'iOS';
      }
      else if(detect(/(blackberry)/i)){
        o = 'BlackBerry';
      }
      else if(detect(/(symbos|symbian|nokia|maemo)/i)){
        o = 'SymbianOS';
      }
      else if(detect(/linux/i)){
        o = 'Linux';
      }
      else if(detect(/mac/i)){
        o = 'Mac';
      }
      else if(detect(/iemobile/i)){
        o = 'WindowsPhone';
      }
      else if(detect(/win/i)){
        if(detect(/windows nt/i)){
          o = 'Windows NT';
        }
        else{
          o = 'Windows';
        }
      }
      else if(detect(/cros/i)){
        o = 'ChromeOS';
      }
      return o;
    })();

    re.browser = (function(){

      var b = '';

      if(re.type === 'Bot' || re.type === 'Util'){
        return b;
      }

      if(isWebkit && isChrome && !isMidori && !isVivaldi && !isEdge){
        b = 'Chrome';
      }
      else if(isMinefield){
        b = 'Minefield';
      }
      else if(isGecko && isFirefox && !isFennec && !isMaemo){
        b = 'Firefox';
      }
      else if(isWebkit && isSafari && !isChrome && !isMidori && !isOmniWeb && !isUCBrowser && !isVivaldi && !isMaxthon && !isDorothy){
        b = 'Safari';
      }
      else if(isOmniWeb){
        b = 'OmniWeb';
      }
      else if(isUCBrowser){
        b = 'UCBrowser';
      }
      else if(isKonqueror){
        b = 'Konqueror';
      }
      else if(isMaxthon){
        b = 'Maxthon';
      }
      else if(isVivaldi){
        b = 'Vivaldi';
      }
      else if(isMidori){
        b = 'Midori';
      }
      else if(isOperaMini){
        b = 'Opera Mini';
      }
      else if(isOpera){
        b = 'Opera';
      }
      else if(isEdge){
        b = 'Edge';
      }
      else if(isAvantBrowser){
        b = 'Avant Browser';
      }
      else if(isSeaMonkey){
        b = 'SeaMonkey';
      }
      else if(isDeepnetExplorer){
        b = 'Deepnet Explorer';
      }
      else if(detect(/iemobile/i)){
        b = 'IEMobile';
      }
      else if(isIE && !isOpera && !isVivaldi){
        b = 'MSIE';
      }
      else if(isDorothy){
        b = 'Dorothy Browser';
      }
      else if(isFennec){
        b = 'Fennec';
      }
      else if(isMaemo){
        b = 'Maemo Browser';
      }
      else if(isNetscape){
        b = 'Netscape';
      }

      if(!b){
        if(re.os === 'SymbianOS'){
          if(detect(/doris/i)){
            b = 'Doris';
          }
          else if(detect(/gobrowser/)){
            b = 'GoBrowser';
          }
          else{
            b = 'Nokia Browser';
          }
        }
      }
      return b;
    })();

    re.engine = (function(){
      var e = '';

      if(re.type === 'Bot' || re.type === 'Util'){
        if(detect(/google/i)){
          if(detect(/image/i)){
            e = 'Googlebot-Image';
          }
          else if(detect(/feedfetcher/i)){
            e = 'Feedfetcher-Google';
          }
          else if(detect(/appengine/i)){
            e = 'AppEngine-Google';
          }
          else{
            e = 'Googlebot';
          }
        }
        else if(detect(/bing/i)){
          e = 'Bingbot';
        }
        else if(detect(/baidu/i)){
          e = 'BaiduSpider';
        }
        else if(detect(/yandexbot/i)){
          e = 'YandexBot';
        }
        else if(detect(/yandeximages/i)){
          e = 'YandexImages';
        }
        else if(detect(/yahoo/i)){
          if(detect(/yahooseeker/i)){
            e = 'YahooSeeker';
          }
          else{
            e = 'Yahoo! Slurp';
          }
        }
        else if(detect(/soso/i)){
          e = 'Sosospider';
        }
        else if(detect(/exabot/i)){
          e = 'Exabot';
        }
        else if(detect(/sogou/i)){
          e = 'Sogou Spider';
        }
        else if(detect(/newsgator/i)){
          e = 'NewsGator';
        }
      }
      else if(isWebkit){
        e = 'Webkit';
      }
      else if(isGecko){
        e = 'Gecko';
      }
      else if(isTrident){
        e = 'Trident';
      }
      else if(isPresto){
        e = 'Presto';
      }
      return e;
    })();

    var getVersionByName = function(){

      var bname = (re.type === 'Bot' || re.type === 'Util') ? re.engine : re.browser;

      var v = '';

      if(isDeepnetExplorer){
        v = (function(){
          var x = '', a = n.split(';');
          for(var i = 0; i < a.length; i++){
            var ai = a[i];
            if(/deepnet explorer/.test(ai)){
              x = ai.replace(/[^0-9\.]/ig, '');
              break;
            }
          }
          return x;
        })();
      }
      else if(bname === 'YahooSeeker'){
        v = (function(){
          var a = n.split(' ');
          var b = a[0];
          var c = b.replace('yahooseeker/', '');
          return c;
        })();
      }
      else if(isAvantBrowser || isIE){
        v = (function(){
          var x = '', a = n.split(';');
          for(var i = 0; i < a.length; i++){
            var ai = a[i];
            if(/msie/.test(ai)){
              x = ai.replace(/[^0-9\.]/ig, '');
              break;
            }
          }
          return x;
        })();
      }
      else if(re.browser === 'Nokia Browser'){
        v = (function(){
          var a = n.split('symbianos/');
          return a[1] ? parseFloat(a[1]) : '';
        })();
      }
      else if(re.browser === 'GoBrowser'){
        v = (function(){
          var a = n.split('gobrowser/');
          return a[1] ? parseFloat(a[1]) : '';
        })();
      }
      else{
        var key = bname.toLowerCase(), xkey = key;
        var a = n.replace(xkey, '________').split(' ');

        if(key === 'safari' || isDorothy){
          key = 'version/';
        }
        else{
          key += '/';
        }

        for(var i = 0; i < a.length; i++){
          var s = a[i].replace('________', xkey);
          if(s.indexOf(key) !== -1){
            var x = s.split('/');
            if(x.length > 1){
              v = x[1];
            }
            break;
          }
        }
      }

      if(v.indexOf(';')){
        var av = v.split(';');
        v = av[0];
      }

      return v;
    }

    re.version = (function(){
      var v = getVersionByName();
      return v;
    })();

    return re;
  }

  DeviceDetector.parse = detectDevice;

  // exports
  if(DeviceDetector.ENV === 'node'){
    module.exports = DeviceDetector;
  }
  else{
    DeviceDetector.info = detectDevice();
    var root = context || window;
    if(root.define && root.define.amd){
      root.define(function(){
        return DeviceDetector;
      });
    }
    root.DeviceDetector = DeviceDetector;
  }
})();
