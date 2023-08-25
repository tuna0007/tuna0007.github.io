let textArea = document.getElementById('texttexttext');


let buttonLowercase = document.getElementById('lowercase').addEventListener('click', function() {
  textArea.value = textArea.value.toLowerCase();
})


let buttonUppercase = document.getElementById('uppercase').addEventListener('click', function() {
  textArea.value = textArea.value.toUpperCase();
})


let buttonFence = document.getElementById('fence').addEventListener('click', function() {
  let output = wordFence(textArea.value);
  textArea.value = output;
})




function wordFence(string)
  {
    let word = string.split("");
    let result = "";

    for (let i=0; i<word.length; i++)
    {
      if (i % 2 === 0)
        {
          result += word[i].toUpperCase();
        } else result += word[i].toLowerCase();
    }
   return result;
  }