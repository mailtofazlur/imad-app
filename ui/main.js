console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main-text');

element.innerHTML='New Content from Client Side Java Script';

//Moving the image i.e. Animation
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
};