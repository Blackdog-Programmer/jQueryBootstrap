$(function() {
  // jQuery goes here...

  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);

  $(".blue-box").fadeTo(2000, 0.6);

  $(".red-box").fadeToggle();
  $(".green-box").fadeToggle();
});
