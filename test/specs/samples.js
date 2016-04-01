/**
 * Testing
 * @ndaidong
 */

/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/
/* eslint no-console: 0*/
/* eslint max-len: 0*/

'use strict';

export var mobiles = [
  {
    ua: 'Opera/9.80 (J2ME/MIDP; Opera Mini/9.80 (S60; SymbOS; Opera Mobi/23.348; U; en) Presto/2.5.25 Version/10.54',
    ex: {
      type: 'Mobile',
      browser: 'Opera Mini',
      engine: 'Presto',
      version: '9.80',
      os: 'SymbianOS'
    }
  },
  {
    ua: 'Opera/9.80 (Android; Opera Mini/7.6.35766/35.5706; U; en) Presto/2.8.119 Version/11.10',
    ex: {
      type: 'Mobile',
      browser: 'Opera Mini',
      engine: 'Presto',
      version: '7.6.35766',
      os: 'Android'
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
    ex: {
      type: 'Mobile',
      browser: 'IEMobile',
      engine: 'Trident',
      version: '9.0',
      os: 'WindowsPhone'
    }
  },
  {
    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    ex: {
      type: 'Mobile',
      browser: 'Safari',
      engine: 'Webkit',
      version: '4.0',
      os: 'Android'
    }
  },
  {
    ua: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+',
    ex: {
      type: 'Mobile',
      browser: 'Safari',
      engine: 'Webkit',
      version: '7.1.0.346',
      os: 'BlackBerry'
    }
  },
  {
    ua: 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-US; LT28h Build/6.1.E.3.7) AppleWebKit/534.31 (KHTML, like Gecko) UCBrowser/9.2.2.323 U3/0.8.0 Mobile Safari/534.31',
    ex: {
      type: 'Mobile',
      browser: 'UCBrowser',
      engine: 'Webkit',
      version: '9.2.2.323',
      os: 'Android'
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows; U; Dorothy Browser; ko-kr) AppleWebKit/533.3 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.3',
    ex: {
      type: 'Mobile',
      browser: 'Dorothy Browser',
      engine: 'Webkit',
      version: '4.0',
      os: 'Windows'
    }
  },
  {
    ua: 'Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; SM-T210R Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30 UCBrowser/2.3.2.300',
    ex: {
      type: 'Tablet',
      browser: 'UCBrowser',
      engine: 'Webkit',
      version: '2.3.2.300',
      os: 'Android'
    }
  }
];

export var desktops = [
  {
    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b4pre) Gecko/20100815 Minefield/4.0b4pre',
    ex: {
      type: 'Desktop',
      browser: 'Minefield',
      engine: 'Gecko',
      version: '4.0b4pre',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Deepnet Explorer 1.5.3; Smart 2x2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)',
    ex: {
      type: 'Desktop',
      browser: 'Deepnet Explorer',
      engine: '',
      version: '1.5.3',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0',
    ex: {
      type: 'Desktop',
      browser: 'MSIE',
      engine: 'Trident',
      version: '10.6',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/4.0; Deepnet Explorer 1.5.3; Smart 2x2; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)',
    ex: {
      type: 'Desktop',
      browser: 'Deepnet Explorer',
      engine: 'Trident',
      version: '1.5.3',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36',
    ex: {
      type: 'Desktop',
      browser: 'Chrome',
      engine: 'Webkit',
      version: '45.0.2454.93',
      os: 'Linux'
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
    ex: {
      type: 'Desktop',
      browser: 'Firefox',
      engine: 'Gecko',
      version: '40.1',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A',
    ex: {
      type: 'Desktop',
      browser: 'Safari',
      engine: 'Webkit',
      version: '7.0.3',
      os: 'Mac'
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Vivaldi/1.0.94.2 Safari/537.36',
    ex: {
      type: 'Desktop',
      browser: 'Vivaldi',
      engine: 'Webkit',
      version: '1.0.94.2',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
    ex: {
      type: 'Desktop',
      browser: 'Opera',
      engine: 'Presto',
      version: '9.80',
      os: 'Linux'
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    ex: {
      type: 'Desktop',
      browser: 'Edge',
      engine: 'Webkit',
      version: '12.246',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Mozilla/5.0 (X11; Linux) KHTML/4.9.1 (like Gecko) Konqueror/4.9',
    ex: {
      type: 'Desktop',
      browser: 'Konqueror',
      engine: 'Gecko',
      version: '4.9',
      os: 'Linux'
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285',
    ex: {
      type: 'Desktop',
      browser: 'Netscape',
      engine: 'Gecko',
      version: '9.1.0285',
      os: 'Windows'
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b4pre) Gecko/20100815 Minefield/4.0b4pre',
    ex: {
      type: 'Desktop',
      browser: 'Minefield',
      engine: 'Gecko',
      version: '4.0b4pre',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/528.16 (KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0.112941',
    ex: {
      type: 'Desktop',
      browser: 'OmniWeb',
      engine: 'Webkit',
      version: 'v622.8.0.112941',
      os: 'Mac'
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1',
    ex: {
      type: 'Desktop',
      browser: 'Maxthon',
      engine: 'Webkit',
      version: '3.0.8.2',
      os: 'Windows NT'
    }
  },
  {
    ua: 'Mozilla/5.0 (X11; U; Linux i686; fr-fr) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) midori/1.19',
    ex: {
      type: 'Desktop',
      browser: 'Midori',
      engine: 'Webkit',
      version: '1.19',
      os: 'Linux'
    }
  }
];

export var bots = [
  {
    ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    ex: {
      type: 'Bot',
      browser: '',
      engine: 'Googlebot',
      version: '2.1',
      os: ''
    }
  },
  {
    ua: 'Feedfetcher-Google; (+http://www.google.com/feedfetcher.html; feed-id=8639390370582375869)',
    ex: {
      type: 'Util',
      browser: '',
      engine: 'Feedfetcher-Google',
      version: '',
      os: ''
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    ex: {
      type: 'Bot',
      browser: '',
      engine: 'Bingbot',
      version: '2.0',
      os: ''
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
    ex: {
      type: 'Bot',
      browser: '',
      engine: 'BaiduSpider',
      version: '2.0',
      os: ''
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
    ex: {
      type: 'Bot',
      browser: '',
      engine: 'YandexBot',
      version: '3.0',
      os: ''
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)',
    ex: {
      type: 'Bot',
      browser: '',
      engine: 'Yahoo! Slurp',
      version: '',
      os: ''
    }
  },
  {
    ua: 'YahooSeeker/1.2 (compatible; Mozilla 4.0; MSIE 5.5; yahooseeker at yahoo-inc dot com ; http://help.yahoo.com/help/us/shop/merchant/)',
    ex: {
      type: 'Bot',
      browser: '',
      engine: 'YahooSeeker',
      version: '1.2',
      os: ''
    }
  }
];
