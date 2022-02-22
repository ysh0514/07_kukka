var ui = {
  update: function () {
    this.screenWidth = screen.width;
    this.screenHeight = screen.height;
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    this.header_h =
      document.getElementsByClassName('header').length < 1
        ? 0
        : document.getElementsByClassName('header')[0].offsetHeight;
    this.content_top = this.height;
    this.browser = getBrowserType();
    this.cartHeight = this.height - 200;
  },
  deviceName: function () {
    var mobileKeyWords = new Array(
      'Android',
      'iPhone',
      'iPod',
      'BlackBerry',
      'Windows CE',
      'SAMSUNG',
      'LG',
      'MOT',
      'SonyEricsson'
    );
    for (var info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
        return 'mobile';
      }
    }
    return 'pc';
  },
};

const footer = document.querySelector('.footer');
