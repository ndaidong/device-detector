/**
 * DeviceDetector
 * @ndaidong
**/

export var parse = (userAgent = false) => {

  let re = {
    type: 'Unknown',
    browser: '',
    engine: '',
    version: '',
    os: ''
  };

  let ua = userAgent;

  if (!ua && typeof window !== 'undefined' && window.navigator) {
    ua = window.navigator.userAgent;
  }

  if (!ua) {
    return re;
  }

  let n = ua.toLowerCase();

  re.userAgent = ua;

  let detect = (p) => {
    return p.test(n);
  };

  let isChrome = detect(/chrome/i);
  let isSafari = detect(/safari/i);
  let isFirefox = detect(/firefox/i);
  let isVivaldi = detect(/vivaldi/i);
  let isOpera = detect(/opera/i);
  let isOperaMini = detect(/opera mini/i);
  let isEdge = detect(/edge/);
  let isIE = detect(/msie/i);
  let isMidori = detect(/midori/i);
  let isMaxthon = detect(/maxthon/i);
  let isNetscape = detect(/netscape/i);
  let isKonqueror = detect(/konqueror/i);
  let isMinefield = detect(/minefield/i);
  let isOmniWeb = detect(/omniweb/i);
  let isUCBrowser = detect(/ucbrowser/);

  let isWebkit = detect(/webkit/i);
  let isGecko = detect(/gecko/i);
  let isPresto = detect(/presto/i);
  let isTrident = detect(/trident/i);
  let isAvantBrowser = detect(/avant browser/i);
  let isSeaMonkey = detect(/seamonkey/i);
  let isDeepnetExplorer = detect(/deepnet/i);
  let isDorothy = detect(/dorothy/i);
  let isFennec = detect(/fennec/i);
  let isMaemo = detect(/maemo/i);

  re.type = (() => {
    let t;
    switch (true) {
      case detect(/(ipad|android(?!.*mobile))/i) || detect(/\W(kindle|silk|tablet)\W/i):
        t = 'Tablet';
        break;
      case detect(/(iphone|ipod|((?:android)?.*?mobile)|j2me|mobi|blackberry|nokia|maemo|mini)/i):
        t = 'Mobile';
        break;
      case detect(/(bot|crawler|spider|slurp|seeker)/i):
        t = 'Bot';
        break;
      case detect(/(fetcher|scan|valid|check|news|engine)/i):
        t = 'Util';
        break;
      default:
        t = 'Desktop';
    }
    return t;
  })();

  re.os = (() => {

    let o = '';

    if (re.type === 'Bot' || re.type === 'Util') {
      return o;
    }

    if (detect(/android/i)) {
      o = 'Android';
    } else if (detect(/(ipad|iphone|ipod)/i)) {
      o = 'iOS';
    } else if (detect(/(blackberry)/i)) {
      o = 'BlackBerry';
    } else if (detect(/(symbos|symbian|nokia|maemo)/i)) {
      o = 'SymbianOS';
    } else if (detect(/linux/i)) {
      o = 'Linux';
    } else if (detect(/mac/i)) {
      o = 'Mac';
    } else if (detect(/iemobile/i)) {
      o = 'WindowsPhone';
    } else if (detect(/win/i)) {
      if (detect(/windows nt/i)) {
        o = 'Windows NT';
      } else {
        o = 'Windows';
      }
    } else if (detect(/cros/i)) {
      o = 'ChromeOS';
    }
    return o;
  })();

  re.browser = (() => {

    let b = '';

    if (re.type === 'Bot' || re.type === 'Util') {
      return b;
    }

    if (isWebkit && isChrome && !isMidori && !isVivaldi && !isEdge && !isUCBrowser) {
      b = 'Chrome';
    } else if (isMinefield) {
      b = 'Minefield';
    } else if (isGecko && isFirefox && !isFennec && !isMaemo) {
      b = 'Firefox';
    } else if (isWebkit && isSafari && !isChrome && !isMidori && !isOmniWeb &&
      !isUCBrowser && !isVivaldi && !isMaxthon && !isDorothy) {
      b = 'Safari';
    } else if (isDeepnetExplorer) {
      b = 'Deepnet Explorer';
    } else if (isOmniWeb) {
      b = 'OmniWeb';
    } else if (isUCBrowser) {
      b = 'UCBrowser';
    } else if (isKonqueror) {
      b = 'Konqueror';
    } else if (isMaxthon) {
      b = 'Maxthon';
    } else if (isVivaldi) {
      b = 'Vivaldi';
    } else if (isMidori) {
      b = 'Midori';
    } else if (isOperaMini) {
      b = 'Opera Mini';
      if (re.os === 'Android' && re.type === 'Tablet') {
        re.type = 'Unknown';
      }
    } else if (isOpera) {
      b = 'Opera';
    } else if (isEdge) {
      b = 'Edge';
    } else if (isAvantBrowser) {
      b = 'Avant Browser';
    } else if (isSeaMonkey) {
      b = 'SeaMonkey';
    } else if (detect(/iemobile/i)) {
      b = 'IEMobile';
    } else if (isIE && !isOpera && !isVivaldi) {
      b = 'MSIE';
    } else if (isDorothy) {
      b = 'Dorothy Browser';
    } else if (isFennec) {
      b = 'Fennec';
    } else if (isMaemo) {
      b = 'Maemo Browser';
    } else if (isNetscape) {
      b = 'Netscape';
    }

    if (!b) {
      if (re.os === 'SymbianOS') {
        if (detect(/doris/i)) {
          b = 'Doris';
        } else if (detect(/gobrowser/)) {
          b = 'GoBrowser';
        } else {
          b = 'Nokia Browser';
        }
      }
    }
    return b;
  })();

  re.engine = (() => {
    let e = '';

    if (re.type === 'Bot' || re.type === 'Util') {
      if (detect(/google/i)) {
        if (detect(/image/i)) {
          e = 'Googlebot-Image';
        } else if (detect(/feedfetcher/i)) {
          e = 'Feedfetcher-Google';
        } else if (detect(/appengine/i)) {
          e = 'AppEngine-Google';
        } else {
          e = 'Googlebot';
        }
      } else if (detect(/bing/i)) {
        e = 'Bingbot';
      } else if (detect(/baidu/i)) {
        e = 'BaiduSpider';
      } else if (detect(/yandexbot/i)) {
        e = 'YandexBot';
      } else if (detect(/yandeximages/i)) {
        e = 'YandexImages';
      } else if (detect(/yahoo/i)) {
        if (detect(/yahooseeker/i)) {
          e = 'YahooSeeker';
        } else {
          e = 'Yahoo! Slurp';
        }
      } else if (detect(/soso/i)) {
        e = 'Sosospider';
      } else if (detect(/exabot/i)) {
        e = 'Exabot';
      } else if (detect(/sogou/i)) {
        e = 'Sogou Spider';
      } else if (detect(/newsgator/i)) {
        e = 'NewsGator';
      }
    } else if (isWebkit) {
      e = 'Webkit';
    } else if (isGecko) {
      e = 'Gecko';
    } else if (isTrident) {
      e = 'Trident';
    } else if (isPresto) {
      e = 'Presto';
    }
    return e;
  })();

  let getVersionByName = () => {

    let isEngine = re.type === 'Bot' || re.type === 'Util';
    let bname = isEngine ? re.engine : re.browser;

    let v = '';

    if (isDeepnetExplorer) {
      v = (() => {
        let x = '';
        let a = n.split(';');
        for (let i = 0; i < a.length; i++) {
          let ai = a[i];
          if (/deepnet explorer/.test(ai)) {
            x = ai.replace(/[^0-9.]/ig, '');
            break;
          }
        }
        return x;
      })();
    } else if (bname === 'YahooSeeker') {
      v = (() => {
        let a = n.split(' ');
        let b = a[0];
        let c = b.replace('yahooseeker/', '');
        return c;
      })();
    } else if (isAvantBrowser || isIE) {
      v = (() => {
        let x = '';
        let a = n.split(';');
        for (let i = 0; i < a.length; i++) {
          let ai = a[i];
          if (/msie/.test(ai)) {
            x = ai.replace(/[^0-9.]/ig, '');
            break;
          }
        }
        return x;
      })();
    } else if (re.browser === 'Nokia Browser') {
      v = (() => {
        let a = n.split('symbianos/');
        return a[1] ? parseFloat(a[1]) : '';
      })();
    } else if (re.browser === 'GoBrowser') {
      v = (() => {
        let a = n.split('gobrowser/');
        return a[1] ? parseFloat(a[1]) : '';
      })();
    } else {
      let key = bname.toLowerCase();
      let xkey = key;
      let a = n.replace(xkey, '________').split(' ');

      if (key === 'safari' || isDorothy) {
        key = 'version/';
      } else {
        key += '/';
      }

      for (let i = 0; i < a.length; i++) {
        let s = a[i].replace('________', xkey);
        if (s.indexOf(key) !== -1) {
          let x = s.split('/');
          if (x.length > 1) {
            v = x[1];
          }
          break;
        }
      }
    }

    if (v.indexOf(';')) {
      let av = v.split(';');
      v = av[0];
    }

    return v;
  };

  re.version = getVersionByName();

  return re;
};
