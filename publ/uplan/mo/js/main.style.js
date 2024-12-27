$(".treenode").click(function () {
  const $this = $(this);
  const $svg = $(this).find(".anticon");

  if ($svg.hasClass("open")) {
    $svg.removeClass("open");
    $this.siblings(".tree-content-list").hide(100);
    $this.removeClass("focus");    
    return;
  }else{
    $(".tree-content-list").hide(100);
    $(".anticon").removeClass("open")
    $svg.addClass("open");
    $this.siblings(".tree-content-list").show(150);
    $this.addClass("focus");
  }

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
    "./html/" + path + "/" + $TextHREF + ".html"
  );

  console.log("./publ/uplan/mo/html/" + path + "/" + $TextHREF + ".html");
  

});


