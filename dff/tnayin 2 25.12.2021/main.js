

function patahakan(min,max){
    const DEFF = max - min + 1;
    return Math.floor(Math.random() * DEFF) + min;
}

const button = document.querySelector(".ClickMe")
const Arrcolor=["red","green","lawngreen","yellow","blue","fuchsia","seagreen","teal","darkgoldenrod","tomato"]

button.addEventListener('click',function(){

    const index =  patahakan(0,Arrcolor.length-1)
    elem = Arrcolor.slice(index,index + 1)
    document.body.style.backgroundColor = elem
})




