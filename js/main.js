var $menuList = $(".menu");

// 함수실행
scrollAni();
typingTextAni();
clickPop();
workPop();
tabClick_moveTop();
workImgLength();

// 스크롤시 상단 %표시
function scrollAni() {
  var didScroll = false;
  var lastScrollTop = 0;
  var scHeight = $(document).height();
  var winHeight = $(window).height();

  $(window).scroll(function (e) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 50);

  function hasScrolled() {
    var logo = $(".logo_warp");
    var line = $(".line");

    var $home = $("#home").offset().top;
    var $introduce = $("#introduce").offset().top;
    var $contents = $("#contents").offset().top;
    var $mywork = $("#mywork").offset().top;

    var st = $(this).scrollTop();
    var left = (st / (scHeight - winHeight - 140)) * 100;

    line.css("width", left + "%");
    logo.css("left", Math.floor(left) + "%");
    if ((st / (scHeight - winHeight)) * 100 <= 0) {
      logo.css("left", "0%");
    }

    if (st > lastScrollTop) {
      // Scroll Down
      logo.removeClass("flip");
    } else {
      // Scroll Up
      logo.addClass("flip");
    }
    lastScrollTop = st;

    if ($introduce <= st && st <= $contents - 5) {
      classToggle();
      $(".Profile").addClass("on");
    } else if ($contents <= st && st <= $mywork - 5) {
      classToggle();
      $(".Portfolio").addClass("on");
    } else if ($mywork <= st) {
      classToggle();
      $(".Design").addClass("on");
    } else {
      classToggle();
      $(".home").addClass("on");
      $("header").removeClass("on");
    }
    function classToggle() {
      $("header").addClass("on");
      $menuList.removeClass("on");
    }
  }
}

// 텍스트 써지는 효과
function typingTextAni() {
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["HTML5", "CSS3", "JQUERY", "JAVASCRIPT"];
  const typingDelay = 80;
  const erasingDelay = 100;
  const newTextDelay = 500; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay);
  });
}

// 포폴 팝업창
function clickPop() {
  var popupChk = $(".living");
  var content_warp = $(".popup_rwap > div");

  popupChk.click(function (e) {
    e.preventDefault();
    var idx = $(this).index();

    content_warp.eq(idx).addClass("on");
    $("body").addClass("over");
  });

  $(".clo, .popup").on("click", function () {
    content_warp.removeClass("on");
    $("body").removeClass("over");
  });
}

// 리스트 새창으로 보기
function pop_center(fname, wth, hgt) {
  var W = wth;
  var H = hgt;
  var X = screen.availWidth / 2 - W / 2;
  var Y = screen.availHeight / 2 - H / 2;
  var wname = fname.split(".")[0];
  while (wname.indexOf("/") != -1) {
    wname = wname.replace("/", "_");
  }
  newWin = window.open(
    fname,
    wname,
    "width=" + W + ",height=" + H + ",left=" + X + ",top=" + Y
  );
  newWin.focus();
}

// 작업물 팝업창
function workPop() {
  var $button = $(".works li a");
  var $target = $(".lightbox-overlay");
  var $targetImg = $target.find("img");

  $button.click(function (e) {
    e.preventDefault();

    var newImg = $(this).find("img").attr("data-lightbox");
    $target.addClass("visible");
    $targetImg.attr("src", newImg);

    // 팝업 클릭시 스크롤 방지
    $(".lightbox-overlay").on("scroll touchmove mousewheel", function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });

  $target.click(function () {
    $(this).removeClass("visible");
  });
}

// 목차클릭 위치이동
function tabClick_moveTop() {
  $menuList.find("a").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500
    );
  });
}

function workImgLength() {
  $("#mywork .works li").hide().slice(0, 6).show();

  let count = 6;
  $("#mywork .more").click(function () {
    const $this = $("#mywork .more");
    count += 6;
    $("#mywork .works li").slice(0, count).fadeIn();
    if (count >= 21) {
      $this.hide();
    }
  });
}
