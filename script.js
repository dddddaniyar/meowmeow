$(".menu-btn").on("click", function (e) {
  $(this).toggleClass("menu-btn_active");
  $(".menu-nav").toggleClass("menu-btn_active");
});
