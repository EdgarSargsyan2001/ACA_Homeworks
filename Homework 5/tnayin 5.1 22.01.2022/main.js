//a. Concat

let Arr1 = [2,88,15]
let Arr2 = [7,6,1]

function myConcat(arr1,arr2){

    arr2.forEach(function(elem){
        arr1.push(elem)

    })
    return arr1
}

console.log(myConcat(Arr1,Arr2))






//b. Fill
function myFill(arr,x){
    for(let i = 0;i<arr.length;i++){
        arr[i] = x
    }
    return arr
}


console.log(myFill([5,7,8,1],[8,7,1]))






// c. Find

function myFind(arr,fn){

    for(let i = 0;i <arr.length;i++){

        if(fn(arr[i])) return arr[i]

    }
}

let k = myFind([4,7,8,9],function(elem){

    return elem > 0

})
console.log(k)






//d. findIndex

function myFindIndex(arr,fn){

    for(let i = 0;i < arr.length;i++){

        if(fn(arr[i])) return i
        
    }

    return -1
}

let j = myFindIndex(Arr1,function(elem){

    return elem > 87

})
console.log(j)






// e. Flat
let number = [

    [
        [10,77],
        [1,8]
    ],
    2,
    [5,4,7],
    9,
    7,
    [
        [10,77],
        [1,8]
    ],
]

function myFlat(Arr){
let newarr = []    

 function ii(arr){

    arr.forEach(function(el){
    
     Array.isArray(el) ? ( ii(el) ) : ( newarr.push(el) )
           
    })
     
 }

 ii(Arr)

return newarr
}


console.log(myFlat(number))


// ․f map

function myMap(arr,fn){
  let newarr = []
  
   arr.forEach(function(el) {  newarr.push(fn(el))  })
          
  return newarr
}


let p = myMap(Arr1,function(elem){

    return 11 * elem
})

console.log(p)





// .g reduce

function myReduce(arr,fn,x = arr[0]){
let l = 1
if(x !== arr[0]) l = 0

let aggr = x

    for(let i = l;i<arr.length;i++){

        aggr = fn(aggr,arr[i])
    }

return aggr 
}

let pp = myReduce([15,8,77,99],function(aggr,elem){

    return aggr -55

},)
console.log(pp)

