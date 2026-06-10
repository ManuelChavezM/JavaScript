//Condicionales 
//if (si) , else (si no entonces)

let age = 35

if(age > 18){
    console.log("todo bien")
}else{
    console.log("no pasa")
}

//else if (si  no , si)

if(age == 18){
 console.log("la edad es 18")
} else if( age < 18){
    console.log("edad es incluso menor de 18")
}else{
    console.log("la edad es mas de 18")
}

//OPerador ternario
let message = age == 18 ? "la edad es 18" : "la edad no es 18"
console.log(message)


//switch
let day = 4
let dayName

switch(day){
    case 0:
        dayName ="Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "numero de dia incorrecto"
}

console.log(dayName)