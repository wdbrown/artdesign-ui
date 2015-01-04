!function (name, definition) {
  var module, define;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports['browser']                                               = definition();
  }
  else if (typeof define === 'function' && define.amd) {
    define(definition);
  }
  else {
    this[name]                                                              = definition();
  }
}('browser', function () {
  var t                                                                       = true,
      versionIdentifier;
  function detect(ua) {
    function getFirstMatch(regex) {
      var match                                                           = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }
    var result;

    if (/opera|opr/i.test(ua)) {
      result                                                              = {
        name                                                            : 'Opera',
        opera                                                           : t,
        version                                                         : versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
      };
    }
    else if (/msie|trident/i.test(ua)) {
      result                                                              = {
        name                                                            : 'Explorer',
        msie                                                            : t,
        version                                                         : getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      };
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result                                                              = {
        name                                                            : 'Chrome',
        chrome                                                          : t,
        version                                                         : getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      };
    }
    else if (/firefox|iceweasel/i.test(ua)) {
      result = {
        name                                                            : 'Firefox',
        firefox                                                         : t,
        version                                                         : getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
      };
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos                                                = t;
      };
    }
    else if (/safari/i.test(ua)) {
      result                                                              = {
        name                                                            : 'Safari',
        safari                                                          : t,
        version                                                         : versionIdentifier
      };
    }
    else {
      result                                                              = {};
    }
    return result;
  }
  var browser                                                                 = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '');
  browser._detect                                                             = detect;
  return browser;
});
window.Browser                                                                  = browser.name;
window.BrowserVersion                                                           = browser.version;