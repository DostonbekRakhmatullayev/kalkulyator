var elForm = document.querySelector(".js-form");
var elInput1 = document.querySelector(".js-input1");
var elInput2 = document.querySelector(".js-input2");
var elInput3 = document.querySelector(".js-input3");
var elText = document.querySelector(".js-text");

// var asd = +prompt('1 chi son')
// var dsa = +prompt('2 chi son')  
// var amal = prompt('amal')

function qushish(a,b) {
  return a + b ;
}

function ayirish(a,b) {
  return a - b ;
}

function kupaytirish(a,b) {
  return a * b ;
}

function bulish(a,b) {
  return a / b ;
}


elForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var elInputVal1 = +elInput1.value;
  var elInputVal2 = +elInput2.value;
  var amal = elInput3.value;

  if(amal == "+" ) {
    elText.textContent = qushish(elInputVal1,elInputVal2);
    console.log(qushish(elInputVal1,elInputVal2));
    return;
  }
  if(amal == "-" ) {
    elText.textContent = ayirish(elInputVal1,elInputVal2);
    return;
  }
  if(amal == "*" ) {
    elText.textContent = kupaytirish(elInputVal1,elInputVal2);
    return;
  }
  if(amal == "/" ) {
    elText.textContent = bulish(elInputVal1,elInputVal2);
    return;
  }else {
    elText.textContent =   "Xatolik bor qayta urunib kuring"
  }


  
})




// if (amal == "+");{
  
//   console.log(qushish(asd, dsa));
// }
// if (asd == "+");{
//   console.log(qushish(a,b));
// }
// if (asd == "+");{
//   console.log(qushish(a,b));
// }
// if (asd == "+");{
//   console.log(qushish(a,b));
// }




// elForm.addEventListener("submit", function(e) {
//   e.preventDefault();
//   var elInputVal = elInput.value;

//   if (elInputVal % 2 == 0 ) {
//     elText.textContent = "Siz juft son kirtingiz"
//   }
//   if ((elInputVal - 1) % 2 == 0) {
//     elText.textContent = "Siz toq  son kirtingiz"
//   }
// })