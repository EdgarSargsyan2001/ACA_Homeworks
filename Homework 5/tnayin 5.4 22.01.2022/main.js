// a =========================== intersection 
function intersection(...arrays){
let array = []

arrays[0].forEach(function(firstelem){
let count = 0
let bool = false
    
    for(let j = 1;j < arrays.length; j++){
      if(bool) break 

      for(let i = 0;i<arrays[j].length;i++){  

        if(firstelem == arrays[j][i]) {count++;break}
      }

      if(count !== j) bool = true
        
    }

    if(count == arrays.length-1) array.push(firstelem)
        
})

return array
}



let k = intersection([1,4,1,7],[3,8,4,99,44,7],[2,4,7],[4,1,7],[7,8,9,10,111,4])

console.log(k)



//b.============================== pull


function pull(arr,...values){

    values.forEach((value)=>{

        for(let j = 0;j<arr.length;j++){
            if(value === arr[j]) arr.splice(j,1)

        }
    })
    
 return arr
}


let k1 = pull(["n","b","a","n","a","5"],"a","n",5)

console.log(k1)


//c. ============================ tail

function tail(arr){
 arr.shift()

return arr

}

let k2 = tail([1,2,3])

console.log(k2)


//.d ==================================== take


function take(arr,index = 1){

 return arr.splice(0,index)

}
   
let k3 = take([1,2,3,5,7],4)

console.log(k3)