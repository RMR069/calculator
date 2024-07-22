let display=document.getElementById('display');

function clicka(input){
display.value += input;
}

function calculate(){
    try{
    display.value =eval(display.value);
    }
    catch(error){
        display.value="Error";
    }

}

function clearDisplay(){
    display.value="";

}