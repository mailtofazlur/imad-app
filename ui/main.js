console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='New Content from Client Side Java Script';
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = MarginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
};