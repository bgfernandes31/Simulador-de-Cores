window.addEventListener('load', start);

function start() {
  var red = document.querySelector('#range-red');
  var green = document.querySelector('#range-green');
  var blue = document.querySelector('#range-blue');
  red.addEventListener('change', mudaCor);
  green.addEventListener('change', mudaCor);
  blue.addEventListener('change', mudaCor);
  red.addEventListener('change', mudaCorFonte);
  green.addEventListener('change', mudaCorFonte);
  blue.addEventListener('change', mudaCorFonte);
  red.addEventListener('change', insereBorda);
  green.addEventListener('change', insereBorda);
  blue.addEventListener('change', insereBorda);
}

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

function mudaCorFonte() {
  var r = document.querySelector('#range-red').value;
  var g = document.querySelector('#range-green').value;
  var b = document.querySelector('#range-blue').value;

  var title = document.querySelector('h1');

  if (r > 160 && g > 160 && b > 160) {
    title.style.color = 'black';
  } else {
    title.style.color = 'white';
  }
}

function insereBorda() {
  var r = document.querySelector('#range-red').value;
  var g = document.querySelector('#range-green').value;
  var b = document.querySelector('#range-blue').value;

  var cor = 'rgba(' + r + ',' + g + ',' + b + ')';

  var borda = document.querySelector('body');

  borda.style.border = `15px solid ${cor}`;

  var bordaCircle = document.querySelector('.cores');
  if (r >= 254 && g >= 254 && b >= 254) {
    bordaCircle.style.border = '3px solid black';
  } else {
    bordaCircle.style.border = '';
  }
}
