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

  $(".iframe-wrap iframe").attr(
    "src",
    "/publ/uplan/pc/html/pages-2301/" + $TextHREF + ".html"
  );

});


