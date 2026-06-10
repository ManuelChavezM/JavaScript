//loops o bucles

//for
for (let index = 0; index <= 3; index++) {
    console.log(index)
}

//while
let i = 0

while(i<5){
    console.log(`Hola: ${i}`)
    i++
}

//do while
let x =10
do{
    console.log(`Elemento: ${x}`)
    x++

}while(x<10)




//for of
let myArrAnimals = ["perro","gato","aguila","pez","oso"]
for(let value of myArrAnimals){

    console.log(value)
}




let mySetBook = new Set(["B1","B2","B3","B4","B5"])
for(let value of mySetBook){

    console.log(value)
}




let myMapMonth = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"]
])
for(let value of myMapMonth){

    console.log(value)
}

//continue y break
for (let i = 0; i < 10; i++) {
    if(i==5){
        continue //salta esa ejecucion pero sigue en bucle
    }else if(i == 7 ){
        break //saca del bucle totalmente
    }
    console.log(`ele: ${i}`)
}