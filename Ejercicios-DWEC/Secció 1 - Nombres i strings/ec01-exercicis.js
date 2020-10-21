//Ejercicio 1
function numero_signe() {
    //capturar contingut de camp "input1"

    input1 = document.getElementById("input1").value;

    console.log("El numero introduït es " + input1)

    if (input1 > 0) {
        document.getElementById("results").innerHTML = "POSITIU"
    } else {
        if (input1 < 0) {
            document.getElementById("results").innerHTML = "NEGATIU"
        } else {
            document.getElementById("results").innerHTML = "ES ZERO"
        }
    }
}

//Ejercicio 2
function verificar() {

    input1 = document.getElementById("input1").value;
    console.log("El numero introduït es " + input1)

    if (input1 >= 0 || input1 < 0) {
        document.getElementById("results").innerHTML = "Es un número"
    } else {
        document.getElementById("results").innerHTML = "No es un número"
    }
}

//Ejercicio 3
function retirarDecimales() {

    input1 = document.getElementById("input1").value;
    console.log("El numero introduït es " + input1)

    if (input1 >= 0 || input1 < 0) {
        document.getElementById("results").innerHTML = "El numero sin decimales es: " + Math.trunc(input1)
    } else {
        document.getElementById("results").innerHTML = "No es un numero"
    }
}

//Ejercicio 4
function retirarEntero() {

    input1 = document.getElementById("input1").value;
    var lengthEntero = input1.indexOf(".");
    var decimales = input1.split(".", lengthEntero);

    document.getElementById("results").innerHTML = decimales[1];
    var numeroEntero = Math.trunc(input1)
    var resultado = input1 - numeroEntero;

    if (input1 >= 0 || input1 < 0) {
        document.getElementById("results").innerHTML = "El numero sin entero es: " + resultado
    } else {
            document.getElementById("results").innerHTML = "No es un numero"
        }
}

//Ejercicio 5
function division() {

    input1 = document.getElementById("input1").value;

    var division = input1 / 19;
    var resultado = division.toFixed(3);

    if (input1 >= 0 || input1 < 0) {
        document.getElementById("results").innerHTML = "El resultado de la division es: " + resultado
    } else {
        document.getElementById("results").innerHTML = "No es un numero"
    }
}

//Ejercicio 6
function comprobarString() {

    input1 = document.getElementById("input1").value;

    if (input1 == 0 || input1 == "") {
        document.getElementById("results").innerHTML = "El contenido de la casilla se considera vacio"
    } else {
        document.getElementById("results").innerHTML = "El contenido de la casilla no esta vacio, es: " + input1
    }
}

//Ejercicio 7
function invertirString() {

    input1 = document.getElementById("input1").value;

    var length = input1.length;
    var cadenaInvertida = "";

    while (length >= 0) {
        cadenaInvertida += input1.charAt(length);
        length--;
    }
    document.getElementById("results").innerHTML = cadenaInvertida
}

//Ejercicio 8
function contarLaLetraA() {

    input1 = document.getElementById("input1").value;

    var length = input1.length;
    var contador = 0;

    for (var i = 0; i < length; i++) {
        if (input1.charAt(i) == "A" || input1.charAt(i)=="a") {
            contador++;
        }
    }
    document.getElementById("results").innerHTML = "El numero de 'A' que hay es:" + contador
}

//Ejercicio 9
function antesDeA() {

    input1 = document.getElementById("input1").value;
    var separacionDeA = input1.split("a");

    document.getElementById("results").innerHTML = separacionDeA[0];
}

//Ejercicio 10
function posiciones_Primera_Ultima_A() {

    input1 = document.getElementById("input1").value;

    var posicionPrimeraA;
    var posicionUltimaA = 0;

    for (var x = 0; x < input1.length; x++) {
        if (input1.charAt(x) == "A") {
            if (posicionPrimeraA === undefined) {
                posicionPrimeraA = x;
            } else if (posicionUltimaA < x) {
                posicionUltimaA = x;
            }
        } else if (input1.charAt(x) == "a") {
            if (posicionPrimeraA === undefined) {
                posicionPrimeraA = x;
            } else if (posicionUltimaA < x) {
                posicionUltimaA = x;
            }
        }
    }
    document.getElementById("results").innerHTML = "La 'A' del principio es:" + posicionPrimeraA + " y la final es: " + posicionUltimaA;
}

//Ejercicio 11
function quitarLa() {

    input1 = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = input1.replace(/la/gi, "")
}

//Ejercicio 12
function substituirLa() {

    input1 = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = input1.replace(/la/gi, "*")
}

//Ejercicio 13
function delante_Y_Detras() {

    input1 = document.getElementById("input1").value;
    var letraInicial = input1.charAt(0);
    var nuevoInput = letraInicial + input1 + letraInicial;
    document.getElementById("results").innerHTML = nuevoInput;
}

//Ejercicio 14
function quitarEspacios() {

    input1 = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = input1.replace(/ /gi, "")
}

//Ejercicio 15
function cambioEspaciosPorGuiones() {

    input1 = document.getElementById("input1").value;
    var nuevoString = "";

    for (x = 0; x < input1.length; x++) {
        if (input1[x] != " ") {
            nuevoString += input1[x];
        } else {
            if (input1[x + 1] != " ") {
                nuevoString += input1[x]
            }
        }
    }

    document.getElementById("results").innerHTML = nuevoString.replace(/ /gi, "-")
}

//Ejercicio 16
function crearAcronimo() {

    input1 = document.getElementById("input1").value;
    var nuevoString = input1[0].toUpperCase();

    for (x = 0; x < input1.length; x++) {
        if (input1[x] == " ") {
            nuevoString += input1[x + 1].toUpperCase();
        }
    }
    document.getElementById("results").innerHTML = nuevoString
}

//Ejercicio 17
function validarCorreoElectrico() {

    input1 = document.getElementById("input1").value;

    var countArroba = 0;
    var extension = input1[input1.length - 4] + input1[input1.length - 3] + input1[input1.length - 2] + input1[input1.length - 1];
    var validArroba = false;
    var validExtension = false;
    for (i = 0; i < input1.length; i++) {
        if (input1[i] == "@") {
            countArroba++;
        }
    }
    if (extension == ".net" || extension == ".com" || extension == ".org") {
        validExtension = true;
    }
    if (countArroba == 1) {
        validArroba = true;
    }
    if (validArroba && validExtension) {
        document.getElementById("results").innerHTML = "correo valido";
    } else if (validArroba) {
        document.getElementById("results").innerHTML = "extensión mal";
    } else if (validExtension) {
        document.getElementById("results").innerHTML = "arroba mal";
    } else {
        document.getElementById("results").innerHTML = "introducelo de nuevo";
    }
}
