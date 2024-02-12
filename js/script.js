
function convertFahren() {
  const celcius = parseFloat(document.getElementById('celcius').value);
  
  const fahrenheitResult = (celcius * 9/5) + 32;
  const hasilFaren = fahrenheitResult;

  document.getElementById('celcius').value = celcius;
  document.getElementById('fahrenheit').value = hasilFaren;

  const kalkulasi = document.getElementById('kalkulasi');
  kalkulasi.innerText = ` ( ${celcius} °C * 1/8 ) + 32 = ${hasilFaren} °F`;
}

function convertCelc(){
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

  const celciusResult = (fahrenheit - 32);
  const hasilCelc = celciusResult;

  document.getElementById('celcius').value = hasilCelc;
  document.getElementById('fahrenheit').value = fahrenheit;
   
  const kalkulasi = document.getElementById('kalkulasi');
  kalkulasi.innerText = ` ( ${fahrenheit} °F - 32) = ${hasilCelc} °C`;
}

// Supaya Input Hanya Angka
function onlyNum(evt) {
  let charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) 
    return false;
  return true;

}

function hanyaAngka(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

// Reset
function reset() {
  document.getElementById('celcius').value = "";
  document.getElementById('kalkulasi').innerText = "";
  document.getElementById('fahrenheit').value = "";
}

