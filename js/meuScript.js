function mudaCor() {
  var r = document.querySelector('#range-red').value;
  var g = document.querySelector('#range-green').value;
  var b = document.querySelector('#range-blue').value;

  var cor = 'rgba(' + r + ',' + g + ',' + b + ')';

  document.querySelector('.cores').style.backgroundColor = cor;
  document.querySelector('h1').style.backgroundColor = cor;

  var rTxt = document.querySelector('#txtRed');
  rTxt.textContent = r;
  var gTxt = document.querySelector('#txtGreen');
  gTxt.textContent = g;
  var bTxt = document.querySelector('#txtBlue');
  bTxt.textContent = b;
}
