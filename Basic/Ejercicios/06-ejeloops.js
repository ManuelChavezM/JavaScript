// 1. Crea un bucle que imprima los números del 1 al 20
let i = 1
while(i <= 20){
    console.log(i)
    i++
}
    

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let r = 0
for (let index = 1; index <= 100; index++) {
    r +=index
}
console.log(r)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let par = 0
for (let x = 1; x <= 50; x++) {
    par =x % 2
    if(par == 0){
          console.log(`Elemento par ${x}`)
    }
  
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArrNames = ["Dom","Hanna","lucy","Mae"]

for(let value of myArrNames){
    console.log(value)
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let chain = "hola java script"
let count = 0
chain = chain.toLocaleLowerCase()
for(let value of chain){
    if(value == "a" || value== "e" || value == "i" || value == "o" || value == "u"){
        count++
    }
}
console.log(`Tiene ${count} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myArrNums = [2,4,5,6,8,10]
let R = 1
for(let value of myArrNums){
    R *=value
}
console.log(R)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let c = 0
while(c<=10){
    console.log(`${c} x 5 = ${c*5}`)
    c++
}

// 8. Usa un bucle para invertir una cadena de texto
for(let j = (chain.length -1); j>=0 ; j--){
    console.log(chain[j])
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let f = 0
let zz = [0]
while(f<8){
    if(f == 0){
        zz.push(1)
    }
    zz.push(zz.at(-2) + zz.at(-1))
    f++
}
console.log(zz)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let nums = [10,1.5,55,6,8,7,6,100]
let teenUp = []
for(let values of nums){
    if(values > 10){
        teenUp.push(values)
    }
}
console.log(teenUp)