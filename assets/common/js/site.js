$(".over").hover(function() {
    $(this).children().eq(1).addClass("navigation-hover");
}, function() {
  $(this).children().eq(1).removeClass("navigation-hover");
});