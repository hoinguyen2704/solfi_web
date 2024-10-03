/* Rất vui được chia sẻ tới mọi người
Chào các bạn mình là UI UX Design & Development, hiện đang làm Freelancer 
Các bạn Follow kênh Tiktok Youtube @teksdeign để ủng hộ mình nhé
Có gì thắc mắc mn cứ kết bạn Zalo 0392229397 với mình, mình sẽ sắp xếp thời gian để Rep các bạn */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  AOS.init({
    easing: "ease",
    startEvent: "DOMContentLoaded",
    disable: function () {
      var maxWidth = 500;
      return window.innerWidth < maxWidth;
    },
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800, "easeInOutExpo");
    return false;
  });

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  var showChar = 80;
  var ellipsestext = "...";
  $(".more-80").each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var html = c + ellipsestext;
      $(this).html(html);
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

  // Smooth scroll for the menu and links with .scrollto classes
  $(".main-nav a, .mobile-nav a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 50;

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          800,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this).closest("li").addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "ion-android-close ion-android-menu"
          );
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  //Replace carousel images into background images.
  $("img.imgBG").each(function () {
    var imgSrc = $(this).attr("src");
    $(this)
      .parent()
      .css({ "background-image": "url(" + imgSrc + ")" });
    $(this).remove();
  });

  $(".itemheight").matchHeight();

  var chswiper = new Swiper(".cauhoiSwiper", {
    slidesPerView: "auto",
    spaceBetween: 5,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
  });

  var rpswiper = new Swiper(".roadmapSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
  });
});

//refresh animations
$(window).on("load", function () {
  AOS.refresh();
});

/* Rất vui được chia sẻ tới mọi người
Chào các bạn mình là UI UX Design & Development, hiện đang làm Freelancer 
Các bạn Follow kênh Tiktok Youtube @teksdeign để ủng hộ mình nhé
Có gì thắc mắc mn cứ kết bạn Zalo 0392229397 với mình, mình sẽ sắp xếp thời gian để Rep các bạn */
