
// if/else/else if/ternaria Ejercicios

// 1. Imprime por consola tu nombre si una variable toma su valor
let num = 5
if(num > 0){
    console.log("Nombre positivo")
}else{
    console.log("Nombre negativo")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "mani"
let pass = "123"


if(user == "mani" && pass == "123"){
    console.log("Acceso concedido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
 num = 0
if(num > 0){
    console.log("positivo")
}else if(num == 0){
 console.log("es cero")
}
else{
    console.log("negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 17

if(age > 18){
    console.log("puede votar de sobra")
}
else if(age == 18){
 console.log("su primera vez")
}
else{
    
    console.log("le falta "+ (18 - age) + " años para votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

age < 18 ? console.log("menor") : console.log("mayor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
 
let mes = "agosto"
if(mes == "marzo" || mes == "abril" || mes == "mayo" || mes == "junio"){
    console.log("primavera")
}
else if(mes == "junio" || mes == "julio" || mes == "agosto" || mes == "septiembre"){
    console.log("verano")
}
else if(mes == "septiembre" || mes == "octubre" || mes == "noviembre" || mes == "diciembre"){
    console.log("otoño")
}
else if(mes == "diciembre" || mes == "enero" || mes == "febrero" || mes == "marzo"){
console.log("invierno")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

switch(mes){
    case "enero":
        console.log(31)
        break
    case "febrero":
        console.log(28 + " o " + 29)
        break
    case "marzo":
        console.log(31)
        break
    case "abril":
        console.log(30)
        break
    case "mayo":
        console.log(31)
        break
    case "junio":
        console.log(30)
        break
    case "julio":
        console.log(31)
        break
    case "agosto":
        console.log(31)
        break
    case "septiembre":
        console.log(30)
        break
    case "octubre":
        console.log(31)
        break
    case "noviembre":
        console.log(30)
        break
    case "diciembre":
        console.log(31)
        break
    default:

}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 1

switch(idioma){
    case 0:
        console.log("hola")
        break
    case 1:
        console.log("konichiwa")
        break
    case 2:
        console.log("bonjour")
        break
    default:

}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch(mes){
    case "marzo":
    case "abril":
    case "mayo":
    case "junio":
        console.log("primavera")
        break

    case "julio":
    case "agosto":
    case "septiembre":
      console.log("verano")
        break

    case "octubre":
    case "noviembre":
    case "diciembre":
      console.log("otoño")
        break

    case "enero":
    case "febrero":
    case "marzo":
      console.log("invierno")
        break

    default:

}





// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes){
    case "enero":
        console.log(31)
        break
    case "febrero":
        console.log(28 + " o " + 29)
        break
    case "marzo":
        console.log(31)
        break
    case "abril":
        console.log(30)
        break
    case "mayo":
        console.log(31)
        break
    case "junio":
        console.log(30)
        break
    case "julio":
        console.log(31)
        break
    case "agosto":
        console.log(31)
        break
    case "septiembre":
        console.log(30)
        break
    case "octubre":
        console.log(31)
        break
    case "noviembre":
        console.log(30)
        break
    case "diciembre":
        console.log(31)
        break
    default:

}