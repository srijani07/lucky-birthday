var date = document.querySelector('#userinput-date');
var btnCheck = document.querySelector('#btn-check');
var imgHappy = document.querySelector('#happy-img');
var imgSad = document.querySelector('#sad-img');
var number = document.querySelector
('#userinput-number');
var output = document.querySelector('#output-area');


function clickHandler(){

    var birthDate = new Date(date.value);
    var userNumber = parseInt(number.value);

    var elementYear = birthDate.getFullYear();
    var elementMonth =birthDate.getMonth();
    var elementDate = birthDate.getDate();
    var sum = elementYear+elementMonth+elementDate+1;

if(date.value === "" || number.value === "" || isNaN(userNumber)=== true) {
        output.innerHTML= "Please enter a valid input.";
        imgSad.style.display = "none"; //resetting the display state
    imgHappy.style.display = "none";
    }
else if(sum % userNumber === 0) {
    output.innerHTML = "Yayyy!! You have a lucky birthday!";
    imgSad.style.display = "none"; //resetting the display state (if user gets not lucky output first and then lucky, the state is updated)
    imgHappy.style.display = "inline";

}

else{
output.innerHTML ="Sorry! You don't have a lucky birthday. :(";

imgHappy.style.display = "none"; //resetting the display state (if user gets lucky output first and then not lucky, the state is updated)
imgSad.style.display = "block";

}

}

btnCheck.addEventListener("click", clickHandler);

