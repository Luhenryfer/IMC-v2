function start() {     
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener("click",handleButtonClick);
    
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height'); 

    inputWeight.addEventListener('input',handleButtonClick);
    inputHeight.addEventListener('input',handleButtonClick);  

    handleButtonClick();
}

function calculateImc(weight,height) {
    return weight / (height * height );
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    
    var weight = Number(inputWeight.value);
    var height = Number(inputWeight.value);

    var imc = calculateImc(weight, height);
    var Imc = imc.toFixed(2).replace('.',',');
    
    imcResult.textContent = imc;
}
start();