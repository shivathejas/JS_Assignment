var username = document.querySelector("#username");
var email = document.querySelector("#email");
var usertype = document.querySelector("#usertype");
var paswrd = document.querySelector("#paswrd");
var confirmPasWrd = document.querySelector("#confirmPasWrd");
var signIn = document.querySelector("#signIn");
var learnMore = document.querySelector("a.learnMore");
var userTypeError =  document.querySelector(".userTypeError");
var passwrdError = document.querySelector(".paswrdError");
var cinfirmPasWrdError = document.querySelector(".cinfirmPasWrdError");
var signInForm = document.querySelector("#signInForm");   
// on mouse over
learnMore.onmouseover = function(){
    // learnMore.style.border-color = "orange";
    this.setAttribute("style","border-color:#959AC3; color:#959AC3; text-decoration:none");
}
// on mouse out
learnMore.onmouseout = function(){
    this.setAttribute("style","border-color:#fff; color:#ccc; text-decoration:none");
}
var passRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
// password validation
paswrd.oninput = function(){
    if(!(passRegEx.test(this.value))){
        passwrdError.innerHTML = "weak";
        passwrdError.setAttribute("style","color:#a94442");
    }
    else{
        passwrdError.innerHTML = "strong";
        passwrdError.setAttribute("style","color:green");
    }
}
// password confirmation validation
confirmPasWrd.onchange = function(){
    if(paswrd.value == confirmPasWrd.value){
        cinfirmPasWrdError.innerHTML = "password confirmed";
        cinfirmPasWrdError.setAttribute("style","color:green");
    }
    else{
        cinfirmPasWrdError.innerHTML = "password mismatch";
        cinfirmPasWrdError.setAttribute("style","color:#a94442");
    }
}
// on submit form data will store in local storage
console.log("hhhhhhhhhhhhhhhh "+username.value);
// signIn.onclick = function(){
  
//     console.log("name before submit"+username.value);
//     var user = username.value;
//       console.log(user);

//     signInForm.addEventListener('click',function(){
      
//       localStorage.setItem("username", user);
//       console.log("name after submit"+username.value);
//       // window.location.href = "dashboard.html";
//     })
// }

signInForm.onsubmit = function(e){
  e.preventDefault();
  console.log("name before submit"+username.value);
    var user = username.value;
      console.log(user);
      localStorage.setItem("username", user);
      console.log("name after submit"+username.value);
  // location.href = "dashboard.html";
  this.submit();
    }

// var $form = $("form"),
$.validate({
  // modules : 'security' , 
  onModulesLoaded : function() {
    var optionalConfig = {
        fontSize: '12pt',
        padding: '4px',
        bad : 'Very bad',
        weak : 'Weak',
        good : 'Good',
        strong : 'Strong'
      };
    // Show strength of password
    $('input[name="pass_confirmation"]').displayPasswordStrength(optionalConfig);
  },
//   onSuccess: function(){
//     $successMsg.show();
//     return false; // stops submitting
//   }
 
});
$('.ml10 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay: function(el, i) {
        return 45 * i;
      }
    }).add({
      targets: '.ml10',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });