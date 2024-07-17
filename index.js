let value = 0;
document.getElementById("plusButton").onclick = function(){//function for plus button
  let firstNumber = document.getElementById("firstInput").value;
  let secondNumber = document.getElementById("secondInput").value;
  let randomNumber = Math.floor(Math.random() * 100);
  if(randomNumber < 10){
    value = Number(firstNumber) - Number(secondNumber);
  }
  else{
    value = Number(firstNumber) + Number(secondNumber);
  }
  document.getElementById("Result").textContent = value;
}

document.getElementById("minusButton").onclick = function(){//function for minus button
  let firstNumber = document.getElementById("firstInput").value;
  let secondNumber = document.getElementById("secondInput").value;
  let randomNumber = Math.floor(Math.random() * 100);
  if(randomNumber < 10){
    value = Number(firstNumber) / Number(secondNumber);
  }
  else{
    value = Number(firstNumber) - Number(secondNumber);
  }
  document.getElementById("Result").textContent = value;
}

document.getElementById("multiplyButton").onclick = function(){//function for multiply button
  let firstNumber = document.getElementById("firstInput").value;
  let secondNumber = document.getElementById("secondInput").value;
  let randomNumber = Math.floor(Math.random() * 100);
  if(randomNumber < 10){
    value = Number(firstNumber) + Number(secondNumber);
  }
  else{
    value = Number(firstNumber) * Number(secondNumber);
  }
  document.getElementById("Result").textContent = value;
}

document.getElementById("divideButton").onclick = function(){//function for divide button
  let firstNumber = document.getElementById("firstInput").value;
  let secondNumber = document.getElementById("secondInput").value;
  let randomNumber = Math.floor(Math.random() * 100);
  if(randomNumber < 10){
    value = Number(firstNumber) ** Number(secondNumber);
  }
  else{
    value = Number(firstNumber) / Number(secondNumber);
  }
  document.getElementById("Result").textContent = value;
}
