let inputtone= document.getElementById("number-1");
let inputtwo= document.getElementById("number-2");
let output= document.getElementById("output");

function doAdd(){
    let result = Number(inputtone.value) + Number(inputtwo.value);
    output.innerHTML=String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

}

function doSub(){
    let result = Number(inputtone.value) - Number(inputtwo.value);
    output.innerHTML=String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function doMult(){
    let result = Number(inputtone.value) * Number(inputtwo.value);
    output.innerHTML=String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function doDiv(){
    let result = Number(inputtone.value) / Number(inputtwo.value);
    output.innerHTML=String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function doExp(){
    let first = Number(inputtone.value);
    let second = Number(inputtwo.value);
    let result = 1;

    for (let i = 0; i < second; i++) {
        result = result * first;
    }

    if((inputtwo.value <0 && inputtone.value > 0) || (inputtone.value<0 && inputtwo.value > 0) ){
        result = 1/result;
    }

    output.innerHTML = String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

}

function doClear(){
    output.innerHTML=String("");
    inputtone.value="";
    inputtwo.value="";
}