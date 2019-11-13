var name = localStorage.getItem('username');
    if (name != "undefined" || name != "null") {
    document.getElementById('welcomeMessage').innerHTML =  name ;
    } else
    document.getElementById('welcomeMessage').innerHTML = "user!";
var button = document.querySelector(".button");
var aboutUsDetails = document.querySelector(".aboutUsDetails");
var aboutUs = document.querySelector(".aboutUs");
var request = new XMLHttpRequest();
var requestURL = 'media/aboutUs.txt';
request.open('GET',requestURL);
request.responseType = 'text';
request.send();
// var data = request.response;
var information;
request.onload = () => {
    var data = request.response;
    information = data;
}
aboutUs.onmouseover = () =>{
    aboutUsDetails.innerHTML = information;
}
