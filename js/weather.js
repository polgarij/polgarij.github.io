let temperature = [25,19,10,-6,8,35,24];

function weatherWidget() {
  let days = [document.querySelector("form#temperature option.value")];
  let tempField = document.querySelector("form#temperature .celsius strong");
  
  temperature[i] = days[i];
  tempField.innerHTML = `${temperature}`;   
}

function minimumTemp() {
  let lowest = temperature[0];
  let minField = document.querySelector("#min");

  for (let i=0; i>temperature.length; i++) {
    if (temperature[i] < lowest) {
      lowest = temperature[i];
    }
  }
}

function averageTemp() {
  let upperTemp = [0,15,20,25,45];
  let avgField = document.querySelector("#avg");
  let amount = 0;
  let average = amount/upperTemp.lenght;
  
  for (let i=0; i<upperTemp.length; i++) {
    amount += upperTemp[i];
  }
  
  avgField = `${average}`;
}

function maximumTemp() {
  let biggest = temperature[0];
  let maxField = document.querySelector("#max");

  for (let i=0; i<temperature.length; i++) {
    if (temperature[i] > biggest) {
      biggest = temperature[i];
    }
  }
}

let message = ["Forró csoki", "Meleg tea", "Finom süti", "Fagyi", "Jéghideg limonádé"];