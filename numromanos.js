function fadeFondo() {
  let body = document.getElementById("body");
  body.style.backgroundSize = "150%";
}

function numeroCompuesto(num) {
  let numArr = num.toString().split("");
  for (let i = 0; i < numArr.length; i++) {
    for (let x = numArr.length - i; x > 1; x--) {
      numArr[i] += "0";
    }
  }
  return numArr.filter((el) => el.charAt(0) != 0);
}

//
//
//     i
//                 x
//    [6, 5, 6, 5]

function numeroRomano(arr) {
  let numArr = arr;
  let numRomanos = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  let arrFinal = [];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] == 10000) {
      arrFinal.push("X");
    } else if (numArr[i] == 4000 || numArr[i] == 9000) {
      arrFinal.push(numRomanos[numArr[i][0] - 1]);
    } else if (numArr[i] >= 5000 && numArr[i] < 9000) {
      arrFinal.push("V");
      for (let x = 5; x < numArr[i][0]; x++) {
        arrFinal.push("M");
      }
    } else if (numArr[i] >= 1000 && numArr[i] <= 3000) {
      for (let x = 0; x < numArr[i][0]; x++) {
        arrFinal.push("M");
      }
    } else if (numArr[i] == 900) {
      arrFinal.push("CM");
    } else if (numArr[i] == 500) {
      arrFinal.push("D");
    } else if (numArr[i] > 500 && numArr[i] < 1000) {
      arrFinal.push("D");
      for (let x = 5; x < numArr[i][0]; x++) {
        arrFinal.push("C");
      }
    } else if (numArr[i] == 400) {
      arrFinal.push("CD");
    } else if (numArr[i] >= 100 && numArr[i] <= 500) {
      for (let x = 0; x < numArr[i][0]; x++) {
        arrFinal.push("C");
      }
    } else if (numArr[i] == 90) {
      arrFinal.push("XC");
    } else if (numArr[i] == 50) {
      arrFinal.push("L");
    } else if (numArr[i] > 50 && numArr[i] < 100) {
      arrFinal.push("L");
      for (let x = 5; x < numArr[i][0]; x++) {
        arrFinal.push("X");
      }
    } else if (numArr[i] == 40) {
      arrFinal.push("XL");
    } else if (numArr[i] > 19 && numArr[i] < 40) {
      for (let x = 0; x < numArr[i][0]; x++) {
        arrFinal.push("X");
      }
    } else {
      arrFinal.push(numRomanos[numArr[i] - 1]);
    }
  }
  return arrFinal.join("");
}

function transformarNum() {
  let input = document.getElementById("inputc");
  if (input.value == "" || isNaN(input.value)) {
    window.alert("Ingrese un número válido");
    input.value = "";
    window.reload();
  }
  if (input.value > 10000) {
    window.alert("Solo se permiten números menores a 10.000");
    input.value = "";
    window.reload();
  }
  var num = input.value;
  let array = numeroCompuesto(num);
  let resultado = numeroRomano(array);
  if ((num >= 4000 && num < 5000) || (num >= 9000 && num < 10000)) {
    let raya = document.getElementById("rayita");
    let nuevoSpan2 = document.createElement("span");
    nuevoSpan2.innerHTML = "__";
    raya.appendChild(nuevoSpan2);
    nuevoSpan2.style.marginLeft = "0.2vh";
    nuevoSpan2.style.marginTop = "-5.5vh";
    nuevoSpan2.style.fontSize = "6vh";
  } else if (num > 4000 && num !== 9000) {
    let raya = document.getElementById("rayita");
    let nuevoSpan2 = document.createElement("span");
    nuevoSpan2.innerHTML = "_";
    raya.appendChild(nuevoSpan2);
  }
  let borrar = document.getElementById("aborrar");
  borrar.innerHTML = "";
  let nuevoSpan = document.createElement("span");
  nuevoSpan.innerHTML = "Tu número convertido a romano es:";
  borrar.appendChild(nuevoSpan);
  let res = document.getElementById("res");
  let nuevoResultado = document.createElement("span");
  nuevoResultado.innerHTML = `${resultado}`;
  res.appendChild(nuevoResultado);
  let nuevoBoton = document.getElementById("volver");
  nuevoBoton.innerHTML +=
    '<button id ="botonvolver" onclick = location.reload()>Convertir de nuevo</button >';
}
