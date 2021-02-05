// $(".nav-link").on("click", function () {
//   // ambil isi href

//   var href = $(this).attr("href");

//   //tangkap elemen
//   var elemenHref = $(href);
//   // console.log(elemenHref.offset().top);

//   $("body").scrollTop(elemenHref.offset().top - 100);
// });

// $("href").easeInOutExpo;

// $(".main").onepage_scroll({
//   easing: "ease-in", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
// });

// $('.page-scroll').slideUp(1000, method, callback});

$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#toTopBtn").fadeIn();
    } else {
      $("#toTopBtn").fadeOut();
    }
  });

  $("#toTopBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
});
