
const list = document.querySelectorAll('li')



for(let i = 0;i < list.length;i++){
    
 list[i].addEventListener('click',function(){

  if(list[i] === list[0]){

    list[i].innerHTML =  `<del> ${list[i].innerText} </del> `
    list[i].style.backgroundColor = "green"

  }else if(list[i-1].innerHTML === `<del> ${list[i-1].innerText} </del> `){

    list[i].innerHTML =  `<del> ${list[i].innerText} </del> `
    list[i].style.backgroundColor = "green"
  }

})
        
}
