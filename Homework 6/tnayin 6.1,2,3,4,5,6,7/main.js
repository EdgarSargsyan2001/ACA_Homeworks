//1.write a rexursive function to determine whether all 
//digits of the number arr add or not.

function Allodd(num){

 let isodd = true

    function cycle(x){

      if((x % 10) % 2 == 0){
         isodd = false 
         return 0
      }    
 
      x = parseInt(x / 10)
      
      if(x == 0)return 0
      
      cycle(x)
         
    } 


   cycle(num)
 
 return isodd

}

console.log( Allodd(4211133) )
console.log( Allodd(7791) )
console.log( Allodd(7) )



//2. Given an array of numbers.Write a recursive function 
//to find its minimal positive element.

function minpositive(arr){

arr.sort((a,b) => a-b)

  function cycle(x){

    if(x.length == 0) return -1
    
    if(x[1] < 0){
        x.shift()
    }else{
        return x.shift()
    }  

    cycle(x)  

  }

  cycle(arr)
  
    
return cycle(arr)

}


// console.log( minpositive([45,-9,15,-1,0,5,-78,1]) )
// console.log( minpositive([45,-9,15,5,-75]) )
// console.log( minpositive([-55,-9,-111,-1000,-7]) )



//3. Given an arrat of numbers which is almost sorted in ascending order.
// Find the index whre sorting order is violated.

function Findindex(arr){

let i = 0

  function cycle(x){
 
    if(x.length == i) return i = -1
        
    if(x[i] > x[i+1])return i+=1
        
    i++
    cycle(x)  

  }

  cycle(arr)
  
    
return i
    
}
    
    
// console.log( Findindex([2,12,15,48,64]) )
// console.log( Findindex([-9,-4,-4,3,12,4,5]) )


//4. Given an array. Write a rexursive function that removes
// the first element and returns the given array.

function remfirstel(arr){

let arr2=[]
let  i = 0

  function cycle(x){
      
    if(arr2.length == x.length-1 || x.length==0)return arr2

    arr2[i] = x[i+1]
     
    
    i++
    cycle(x)  

  }

  cycle(arr)
  
    
return arr2

}

// console.log( remfirstel([6,78,"n",0,1]) )
// console.log( remfirstel([5]) )
// console.log( remfirstel([]) )




// 5. Given an array of nested arrays.
// Write a rexursive function that flattens it

function flattens(arr){

let arr1=[]
  
  function cycle(arr){
    arr.forEach(function (elem){

      if(Array.isArray(elem)) return cycle(elem)
        
      arr1.push(elem)
      
    })

  }
  cycle(arr)

return arr1

}



// console.log( flattens([1,[3,4,[1,2],10]]) )
// console.log( flattens(  [14,[1,[[[3,[]]]],1],0]   ) )




// 6. Given an array and a numbeer N.Write a rexursive function
// that rotates an array N places to the left.

function rotates(arr,x){

  
if(x==0)return arr

  if(x > 0){
    
    function cycle(arr){
      arr.push(arr.shift())
      
      if(x == 1 ) return 0
      x--
      cycle(arr)
    }
    cycle(arr)
  }else{
    function cycle(arr){
      arr.unshift(arr.pop())
      
      if(x == -1) return 0
      x++
      cycle(arr)
    }
    cycle(arr)
    
  }
    
      
return arr
  
}


// console.log( rotates( ["a","b","c","d","e","f","g","h"],3 ) )
// console.log( rotates( ["a","b","c","d","e","f","g","h"],-2 ) )




//7. Given a number. Write a function thet calculates its
// sum of the digits and if that sum has more then 1 digit
// find the sum of digits of the number .
// Repeat that process if needed and return the result.

function calculates(x){
let sum = 0
let firstDigit

  while(x != 0){
     
    let lastDigit = x % 10
    sum += lastDigit
    if(x<10) firstDigit = lastDigit
    x = parseInt(x / 10)
 
  }

if(sum > 9)return firstDigit

return sum
}


// console.log(calculates(14))
// console.log(calculates(29))
// console.log(calculates(99999999999))
// console.log(calculates(19))
