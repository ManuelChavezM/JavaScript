//Funciones
function myfunctio(){
    console.log("Funcion desencadenada")
}

myfunctio()


//Funcion con parametros 
function myFuncionParams(name){
    console.log(`Hola ${name}`)
}

myFuncionParams("Haya")


//Funciones anonimas
// se tiene que agregar a una variable o constante
const myFunc = function(name){
    console.log(`que lo que ${name}`)
}

myFunc("hayabusha")


//Arrow function
//es otra manera de escribir funciones
// se tiene que agregar a una variable o constante
// es una sintaxis simplificada

const myFunc2 = (name)=>{
     console.log(`Hey ${name}`)
} 

const myFunc3 = (name) => console.log(`Hey ${name}`)


myFunc2("geo")
myFunc3("ZZZ")


//Parametros
function sum(a,b){
    console.log(a+b)
}
sum(5,10)
sum(5)
sum()

function defaultSum(a=0,b=0){ // valores por defecto
    console.log(a+b)
}
defaultSum(100,1)
defaultSum(1)
defaultSum()


//Retorno de Valores
function mult(a,b){
    return a * b
}
console.log(mult(5,1))


// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

//Funciones de orden superior
// son funciones que reciben otras funciones como parametros
function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc2,"funcion superior")



//For Each
// es una funcion que tienen los arrays en js
let myArr=[1,2,3,4,5]
myArr.forEach((value)=>console.log(value))

myArr.forEach( function (value){
    console.log(value)
})

