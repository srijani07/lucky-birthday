var date = document.querySelector('#userinputdate');
var btnCheck = document.querySelector('#btn-check');

var number = document.querySelector
('#userinput-number');
var output = document.querySelector('#output-area');

function clickHandler(){
    var userDate = date.value;
    var userNumber = parseInt(number.value);
    var elementYear = parseInt(userDate.slice(0,4));
    var elementMonth = parseInt(userDate.slice(5,7));
    var elementDate = parseInt(userDate.slice(9,11));

    if(userNumber === elementYear+elementMonth+elementDate)
output.innerHTML = "Yayyyy!! Your birthday is lucky!";

else 
output.innerHTML = "Sorry. Your birthday is not lucky :(";
}


btnCheck.addEventListener("click", clickHandler);


//07-05-2001