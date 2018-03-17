//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){


//Make the request to the counter endpoint



//capture the response and store it in a variable

//Render the variable to the correct span
counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
};





















/*console.log('Loaded!');
//change the text of main-text div
//var element = document.getElementById('main-text');

//element.innerHTML='New Content from Client Side Java Script';

//Moving the image i.e. Animation
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
}; */