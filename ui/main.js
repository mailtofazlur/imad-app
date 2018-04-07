//Submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function(){

    //create a request object
    var request = new XMLHttpRequest();

    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
        //Take some action
        if(request.status === 200) {
            alert('Logged in succesfully');
        } else if(request.status === 400) {
            alert('Username/password is  incorrect');
        } else if(request.status===500) {
            alert('Something went wrong on the server');
        }
      }
    };
    
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://fazlursmailbox.imad.hasura-app.io/login',true);
    request.send(JSON.stringify({username: username, password: password}));
};



















/*//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){

    //Make the request to the counter endpoint
    var request = new XMLHttpRequest();


    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        //Take some action
        if(request.status == 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            
        }
    };
    //Make the request
    request.open('POST','http://fazlursmailbox.imad.hasura-app.io/counter',true);
    request.send(null);
}; */

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
};
    //Render the variable to the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
*/