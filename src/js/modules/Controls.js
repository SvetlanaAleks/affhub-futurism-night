const Controls = (function () {
  "use strict";

  return {
    showGallery: function () {
      $(".js-show-gallery").click(function (e) {
        e.preventDefault();
        const _this = $(this);
        console.log("click");
        $(".js-gallery").toggleClass("active");
        _this.toggleClass("active");
      });
    },
    init: function () {
      Controls.showGallery();
    },
  };
})();

export default Controls;
