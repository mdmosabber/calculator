

var addition = document.getElementById('add');

addition.onclick  = function () {
    var firstval = Number( document.getElementById('firstValue').value);
    var secondval = Number(document.getElementById('secondValue').value);

    var result = firstval + secondval;
    document.getElementById('result').value=result;
};

var subtraction = document.getElementById('sub');
subtraction.onclick = function () {
    var firstval = document.getElementById('firstValue').value;
    var secondval = document.getElementById('secondValue').value;

    var result = firstval - secondval;
    document.getElementById('result').value=result;
};

var multiplication = document.getElementById('mul');
multiplication.onclick = function () {
    var firstval = document.getElementById('firstValue').value;
    var secondval = document.getElementById('secondValue').value;

    var result = firstval * secondval;
    document.getElementById('result').value=result;
};
var division = document.getElementById('div');
division.onclick = function () {
    var firstval = document.getElementById('firstValue').value;
    var secondval = document.getElementById('secondValue').value;

    var result = firstval / secondval;
    document.getElementById('result').value=result;
};

var modulus = document.getElementById('modulus');

modulus.onclick = function () {
  var firstval = document.getElementById('firstValue').value;
  var secondval = document.getElementById('secondValue').value;

  var result = firstval%secondval;
  document.getElementById('result').value=result;
};