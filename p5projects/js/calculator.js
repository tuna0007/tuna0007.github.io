let a;
let b;
let operator;

function addition()
{
  a = document.getElementById("result").value;
  document.getElementById("result").value = "";
  operator = "+";
}

function subtraction()
{
  a = document.getElementById("result").value;
  document.getElementById("result").value = "";
  operator = "-";
}

function multiplication()
{
  a = document.getElementById("result").value;
  document.getElementById("result").value = "";
  operator = "*";
}

function division()
{
  a = document.getElementById("result").value;
  document.getElementById("result").value = "";
  operator = "/";
}



function equal()
{
  b = document.getElementById("result").value;
  
  switch (operator) 
  {
  case "+":
    document.getElementById("result").value = Number(a) + Number(b);
    break;
    
  case "-":
    document.getElementById("result").value = Number(a) - Number(b);
    break;
 
  case "*":
    document.getElementById("result").value = Number(a) * Number(b);
    break;
    
  case "/":  
    document.getElementById("result").value = Number(a) / Number(b);
    break;
  }
}



function addSymbol(num)
{
  if (document.getElementById("result").value.length < 14)
    document.getElementById("result").value = document.getElementById("result").value + num;
}


function clearDis(){
  document.getElementById("result").value = "";
  alert('твоя мама голая');
}

