var addition = document.querySelector("#addition");
var subtract = document.querySelector("#subtract");
var result = document.querySelector("#result");
var one = 0;

function plus(){
    //    console.log("hh")

    one = one + 1
    result.innerHTML = one
    
}

function minas(){
    //    console.log("hh")
    if(one != 0){
    one = one - 1
    result.innerHTML = one
    }
}

function reset() {
    one = 0
    result.innerHTML = one
}