const display = document.getElementById("display");
function appe(input){
    display.value+= input;
}

function clearDisplay(){
    display.value = "";
}
function equ(){
    display.value = eval(display.value);
}