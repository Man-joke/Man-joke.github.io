var link = document.location.href;
var linka = link.split("/")

if(linka.indexOf("community")){
    var contents = document.querySelectorAll('.contents');
    var cur = document.querySelector('.cur')
    cur.textContent = contents.length
}
