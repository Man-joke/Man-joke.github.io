$(document).ready(function () {
  // 툴팁
  $('[data-bs-toggle="tooltip"]').tooltip();

  if ($(".videoConsult-body").length) {
    $(".videoConsult-body").css({ height: "100vh", overflow: "hidden" });
  }

  // 셀렉트
  $(".default_option").click(function () {
    $(this).parent().toggleClass("active");
  });
  $(".select_ul li").click(function () {
    var currentele = $(this).text();
    $(".default_option li").html(currentele);
    $(this).parents(".selc").removeClass("active");
  });

  // 리스트형태
  $(".middleBar-item").click(function () {
    let $class = $(this).data("class");
    $(".middleBar-item").removeClass("active");
    $(this).addClass("active");
    $(".inquiry-list").removeClass("colum1 colum2 colum3");
    $(".inquiry-list").addClass($class);
  });

  $(".chkList label").click(function () {
    let $this = $(this);
    let $input = $this.parent("li").find('input[type="checkbox"]');
    let inpChk = $input.is(":checked");
    $this.parents("ul").find("input:checkbox").prop("checked", false);
    if (inpChk) $input.prop("checked", true);
  });

  // 지인추가 기타입력시
  $(".interest-item label").click(function (e) {
    if (e.target.innerText == "기타입력") {
      let $item = $(".etc_text");
      if ($item.find("input").attr("data-chk") === "true") {
        $item.css({ display: "flex" });
        $item.find("input").attr("data-chk", "false");
      } else {
        $item.css({ display: "none " });
        $item.find("input").attr("data-chk", "true");
      }
    }
  });

  function loadScroll() {
    $width = $(".videoChatRight-figure").width();
    $(".capture-list").css({ height: $width });
  }
  loadScroll();

  $(window).resize(function () {
    loadScroll();
  });

  $(".documentPencle-item").click(function () {
    $(".documentPencle-item").removeClass("active");
    $(this).addClass("active");
  });

  // 모바일 검색
  $(".mo-header").click(function () {
    $(".header-search").addClass("on");
    $(".header-search input").focus();
  });
  $(".header-search input").focusout(function () {
    $(".header-search").removeClass("on");
  });

  if ($(".toast15").length) {
    setTimeout(() => {
      $(".toast15").fadeOut();
    }, 1500);
  }

  // 로딩
  function loadingPop() {
    let src = "";
    let i = 0;
    const loading = setInterval(() => {
      src = "../assets/images/loading/loading0" + i + ".png";
      $(".loading img").attr("src", src);
      i += 1;
      if (i >= 8) i = 0;
    }, 200);

    setTimeout(() => {
      clearInterval(loading);
      $(".loading").fadeOut();
    }, 3000);
  }
  loadingPop();

  // 날짜선택
  if ($(".datapicker").length) {
    let both = "";
    $(".manager").length ? (both = "right") : (both = "left");

    $(".configCalendar").daterangepicker({
      autoUpdateInput: false,
      autoApply: true,
      opens: both,
      autoApply: true,
      showCustomRangeLabel: false,
      stickyMonths: true,
      locale: {
        format: "YYYY.MM.DD",
        monthNames: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
      },
    });

    $(".singlePicker .configCalendar").daterangepicker({
      autoUpdateInput: false,
      autoApply: true,
      opens: both,
      autoApply: true,
      showCustomRangeLabel: false,
      stickyMonths: true,
      singleDatePicker: true,
      timePicker: true,
      timePickerIncrement: 10,

      locale: {
        format: "YYYY.MM.DD",
        monthNames: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
      },
    });

    $(".configCalendar").on("apply.daterangepicker", function (ev, picker) {
      $(this).val(
        picker.startDate.format("YYYY.DD.MM") +
          " ~ " +
          picker.endDate.format("YYYY.DD.MM")
      );
    });

    $(".singlePicker .configCalendar").on(
      "apply.daterangepicker",
      function (ev, picker) {
        $(this).val(picker.startDate.format("YYYY-MM-DD HH:mm"));
      }
    );
  }

  // 캡쳐 이미지 팝업
  $(".captureHistory-item").click(function () {
    $(".captuerPop").addClass("on");
  });

  $(".captuerPop .btn-close").click(function () {
    $(".captuerPop").removeClass("on");
  });

  $(".inpBox .input-group input").on("change paste input", function () {
    inpSearchFocuse();
  });

  $(".inpBox .input-group label img").click(function () {
    inpSearchC();
  });

  function inpSearchFocuse() {
    $(".inpBox .input-group img")
      .attr("src", "../assets/images/ico_cancle.svg")
      .css({ opacity: "0.3" });
  }
  function inpSearchC() {
    $(".inpBox .input-group img")
      .attr("src", "../assets/images/ico_serach.svg")
      .css({ opacity: "0.3" });
    $(".inpBox .input-group input").val("");
  }

  $(".systemList-item").click(function () {
    $(".noticeMDetail, .noticeMDetailWrite, .noticeMDetail, .userInfoDetail, .numberDetail, .shareDocumentDetail, .SMSDetail ")
      .css({ display: "none" });
  });
});
