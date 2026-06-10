// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a,b){
    return a+b
}
let result = sum(9,1)
console.log(result)


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function myArrNums(arrNums){
    let mayor = arrNums[0]
    for(let value of arrNums){
        if(value >= mayor){
            mayor = value
        }
    }
    return mayor
}

let a1 = [5,10,3,8,400,3,4,8,100]
console.log(myArrNums(a1))



// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numsVocales(chain){
    let count = 0
    chain = chain.toLocaleLowerCase()
    for(let value of chain){
         if(value == "a" || value== "e" || value == "i" || value == "o" || value == "u"){
        count++
        }
    }
    return count
}

console.log(`Numero de vocales ${numsVocales("HOla mundo de nuevo")}`)




// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let arrChains = ["domi","Hana","haya","konichiwa"]

function mayus(arrChain){
    let arrMayus = []
    for (let index = 0; index < arrChain.length; index++) {
        arrMayus.push(arrChain[index].toUpperCase())
    }
    return arrMayus
}

console.log(mayus(arrChains))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let numBool = function(num){
    if((num%2) == 0){
        return false
    }else {
        return true
    }
}

console.log(`El numero 3 es primo: ${numBool(3)}`)


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let a01 = [1,6,7,4,5,8,2,4,8,1]
let a02 = [1,2,3,4,5,6,7,8,9,10,100,15,25]

function comprobacion(arr1,arr2){
    let arrIguales = []

    for(v1 of arr1){
        for(v2 of arr2){
            if(v1 == v2){
                arrIguales.push(v1)
            }
        }
    }


    
    for (let i = 0; i < arrIguales.length; i++) {
        for (let index = 0; index < arrIguales.length; index++) {
            if(arrIguales[i]== arrIguales[index] && i!= index){
                arrIguales.splice(index,1)
            }
        }
    }
    
    return arrIguales

}

console.log(comprobacion(a01,a02))




// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let numsTotal = [80,15,6,9,89,31,4,16]
function sumPares(param01){
    let par = []
    let sumaFinal = 0
    for(values of param01){
        if(values % 2 == 0){
            par.push(values)
        }
    }

    for(values of par){
        sumaFinal+= values
    }

    return [sumaFinal,par]

}
let [suma,arr05] = sumPares(numsTotal)

console.log(`el total es de = ${suma} y los pares son ${arr05}`)



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let n = [1,2,3,4,5,6,7,8,9]
function quad(nums){
    let arrQuad = []
    for(values of nums){
        arrQuad.push(values**2)
    }

    return arrQuad
}

console.log(quad(n))


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function inv(chain02){
    let newChain = ""
    for (let x = (chain02.length - 1); x>=0 ; x--) {
        newChain = newChain + chain02[x]
    }
    return newChain
}

console.log(inv("hola mundo"))


// 10. Crea una función que calcule el factorial de un número dado
function fac(num){
    let newFac = 1
    if(num >= 0){
        if(num == 0){
            return 1
        }else{
            for(let i = num ; i >= 1 ; i--){
                newFac *= i
            }

        }

    }else{
        console.log("gracias por participar")
    }

    return newFac

}
 console.log(`El factorial de 5 es = ${fac(5)}`)
