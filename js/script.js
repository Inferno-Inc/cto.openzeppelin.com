(function($) {
  function dropdownMenu() {
    return (function() {
      var $items = $('.box-menu .item');
      $items.hover(function handler(evt) {
        evt.stopPropagation();
        var $el = $(this).find('.sub-nav');
        $el.toggleClass('open');
      });
    })();
  }

  function mobileMenu() {
    return (function() {
      var $body = $('body');
      var $cont = $('.p-main-nav-mobile');
      var $icon = $('.p-main-nav-mobile .h-icon');
      $icon.click(function handler(evt) {
        $cont.toggleClass('open');
        $icon.toggleClass('open');
        $body.toggleClass('overlay');
      });
    })();
  }

  function init() {
    dropdownMenu();
    mobileMenu();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
