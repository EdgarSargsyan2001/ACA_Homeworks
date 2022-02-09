
// 8. Create a recursive function that will do deep clone of an object

function CloneObjet(obj){
  let obj1 = {}
  let arrKeys = Object.keys(obj)
  let arrvalues = Object.values(obj)
  
  function cycle(obj){

    obj1[arrKeys[arrKeys.length-1]] = arrvalues[arrKeys.length-1]

    if(arrKeys.length == 1) return 0

    arrKeys.length--
    cycle(obj)
       
  } 

  cycle(obj)


 return obj1

}


let object = {
  
  name:"Hayk",
  lastname:"Araqelyan",
  age:44,
  Getage:function() {return this.age}
    
}

console.log(object)
console.log(CloneObjet(object))


