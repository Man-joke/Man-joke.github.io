$(".treenode").click(function () {
  const $this = $(this);
  const $svg = $(this).find(".anticon");
  if ($svg.hasClass("open")) {
    $svg.removeClass("open");
    $this.siblings(".tree-content-list").hide(100);
    $this.removeClass("focus");
    return;
  }

  $svg.addClass("open");
  $this.siblings(".tree-content-list").show(150);
  $(this).addClass("focus");
});

const $listLength = $(".tree-treenode");
let path = "";

$(".tree-content-item").click(function (e) {
  let $TextHREF = e.currentTarget.dataset.href;

  const idx = $(this).parents(".tree-treenode").index();

  if (idx === $listLength.length - 1) {
    path = "life";
  } else {
    path = "pages-2301";
  }

  $(".iframe-wrap iframe").attr(
    "src",
    "/publ/uplan/html/" + path + "/" + $TextHREF + ".html"
  );
});
