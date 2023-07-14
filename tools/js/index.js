$(document).ready(function () {
  $(".text-list").on("mousedown", function (e) {
      var startX = e.pageX - this.offsetLeft;
      var scrollLeft = this.scrollLeft;

      $(this).on("mousemove", function (e) {
          var newScrollLeft = e.pageX - startX;
          this.scrollLeft = scrollLeft - newScrollLeft;
      });
  });

  $(document).on("mouseup", function () {
      $(".text-list").off("mousemove");
  });
});
