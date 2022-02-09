
let inp3 = document.querySelector('#inp3')

inp3.addEventListener('focus',function(){
    let content3 = document.querySelector('.content3')
    let content2 = document.querySelector('.content2')

    content2.classList.add("anim")
    function ddd (){ return content3.classList.replace("anim1","anim2")}
    function jjj (){ return content3.style.display="block"}

    setTimeout(jjj,200)
    setTimeout(ddd,230)

})

inp3.addEventListener('blur',function(){

    let content3 = document.querySelector('.content3')
    let content2 = document.querySelector('.content2')

    content3.classList.replace("anim2","anim1")
    function dd (){ return content2.classList.remove("anim")}
    function jjj (){ return content3.style.display="none"}

    setTimeout(jjj,200)
    setTimeout(dd,200)

})

inp3.addEventListener('keyup',function(){

    if(  isNaN(+inp3.value)  ){
        alert("Error not a Number")
        inp3.value=inp3.value.slice(0,inp3.value.length-1)
    }else{
        let text = document.querySelector('.text')
        text.innerText=inp3.value
    }
})

const inp2 = document.querySelector('#inp2')

inp2.addEventListener('focus',function(){
    const name = document.querySelector('.name')
    name.classList.replace('notborder',"border")
})
inp2.addEventListener('blur',function(){
    const name = document.querySelector('.name')
    name.classList.replace('border',"notborder")
    if(inp2.value.indexOf(" ") == -1 || inp2.value.indexOf(" ")+1 == inp2.value.length){
        alert("Input \"space\" or lastname")
    }

})

inp2.addEventListener('keyup',function(){
    const nametext = document.querySelector('.nametext')

    if(+inp2.value[inp2.value.length-1] ==" "|| isNaN(+inp2.value[inp2.value.length-1])){

        nametext.innerText = inp2.value
    }else{
    
        alert("Error not a string ")
        inp2.value=inp2.value.slice(0,inp2.value.length-1)
    }

})

const inp1 = document.querySelector('#inp1')

inp1.addEventListener('focus',function(){
    const number = document.querySelector('.number')
    number.classList.replace('notborder',"border")
})
inp1.addEventListener('blur',function(){
    const number = document.querySelector('.number')
    number.classList.replace('border',"notborder")

}) 




inp1.addEventListener('keyup',function(Eve){

    const numbertext1 = document.querySelector('.numbertext1')
    const numbertext2 = document.querySelector('.numbertext2')
    const numbertext3 = document.querySelector('.numbertext3')
    const numbertext4 = document.querySelector('.numbertext4')
    
    
  function duble(x){
      let k = ""
      for(let i = 0 ; i<x ; i++){
          k += "#"
      }
      return k
  }
  
  if(inp1.value.length === 0){
      numbertext1.innerText="####"
      numbertext2.innerText="####"
      numbertext3.innerText="####"
      numbertext4.innerText="####"
      }
    if(isNaN(inp1.value)){
      alert("Error not a Number")
      inp1.value = ""
      numbertext1.innerText="####"
      numbertext2.innerText="####"
      numbertext3.innerText="####"
      numbertext4.innerText="####"
    }
  
  
  if(inp1.value.length <= 4){
    
      let num = 4 - inp1.value.length
      let k  = inp1.value.slice (0,4)
      numbertext1.innerHTML = `<o class="ff">${k}</o>` + duble(num)


      numbertext2.innerText="####"
      numbertext3.innerText="####"
      numbertext4.innerText="####"
  
  }else if(Eve.code === 'Backspace' && inp1.value.length <= 4){
      numbertext1.innerText=numbertext1.innerText + duble(num)

  }
      
  
  if(inp1.value.length >=4  && inp1.value.length <= 8){
  
      let num = 8 - inp1.value.length
      let k  = inp1.value.slice (4,8)
      numbertext2.innerHTML = `<o class="ff">${k}</o>` + duble(num)

      numbertext3.innerText="####"
      numbertext4.innerText="####"

  
  }else if(Eve.code === 'Backspace' && inp1.value.length >=4  && inp1.value.length <= 8){
      numbertext2.innerText=numbertext2.innerText + duble(num)
      
  }
  
  
  if(inp1.value.length >=8  && inp1.value.length <= 12){
  
      let num = 12 - inp1.value.length
      let k  = inp1.value.slice (8,12)
      numbertext3.innerHTML = `<o class="ff">${k}</o>` + duble(num)

      numbertext4.innerText="####"
  
  }else if(Eve.code === 'Backspace' && inp1.value.length >=8  && inp1.value.length <= 12){
      numbertext3.innerText=numbertext3.innerText + duble(num)
  }
  
  
  if(inp1.value.length >=12  && inp1.value.length <= 16){
  
      let num = 16 - inp1.value.length
      let k  = inp1.value.slice (12,16)
      numbertext4.innerHTML = `<o class="ff">${k}</o>` + duble(num)
  
  }else if(Eve.code === 'Backspace' && inp1.value.length >=12 && inp1.value.length <= 16){
      numbertext4.innerText=numbertext4.innerText + duble(num)
  }
          
  
})


const sele1 = document.querySelector('.sel1')
const sele2 = document.querySelector('.sel2')

sele2.addEventListener('focus',function(){
    const data = document.querySelector('.data')
    data.classList.replace("notborder",'border')
})
sele1.addEventListener('focus',function(){
    const data = document.querySelector('.data')
    data.classList.replace("notborder",'border')
})
sele2.addEventListener('blur',function(){
    const data = document.querySelector('.data')
    data.classList.replace("border",'notborder')
})
sele1.addEventListener('blur',function(){
    const data = document.querySelector('.data')
    data.classList.replace("border",'notborder')
})

sele1.addEventListener('mouseenter',function(){
    const Month = document.querySelector('.Month')
    Month.classList.remove('animation')
})
sele2.addEventListener('mouseenter',function(){
    const Year = document.querySelector('.Year')
    Year.classList.remove('animation')
})
sele1.addEventListener('change',function(){
    const Month = document.querySelector('.Month')
    Month.classList.add('animation')
    Month.innerText=sele1.value
    Month.style.fontSize="18px"
    if(sele1.value == "MM"){ Month.style.fontSize="16px"}
})
sele2.addEventListener('change',function(){
    const Year = document.querySelector('.Year')
    Year.innerText=sele2.value.slice(2)
    Year.classList.add('animation')
    Year.style.fontSize="18px"
    if(sele2.value == "YY"){ 
        Year.style.fontSize="16px"
        Year.innerText=sele2.value
    }
})