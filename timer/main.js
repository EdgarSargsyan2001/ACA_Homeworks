
const butStart = document.querySelector(".start")
const butStop = document.querySelector(".stop")
const inp = document.querySelector("input")
const h1 = document.querySelector("h1")


let time =  new Timer(+inp.value)


function Timer(val){

    let timer

    function render() {

        console.log(val)

        h1.innerText = val
        val -=1

        if(val == -1){

            clearInterval(timer)
            alert("time is finished ")
            time =  new Timer(+inp.value)
            h1.innerText = "00"
            butStart.disabled = false
            inp.disabled = false
        } 
    }

    this.start = function(){

        render()
        timer = setInterval(render,1000)
    }

    this.stop = function()  { clearInterval(timer) }

}



butStart.addEventListener("click",function(){
    butStart.disabled = true
    inp.disabled = true
    time.start()
    h1.style.color = "black"
})

butStop.addEventListener('click',function(e){
    e.preventDefault()
    h1.style.color = "red"
    butStart.disabled = false
    inp.disabled = false
    time.stop()
   
})
butStop.addEventListener('dlclick',function(e){
    e.preventDefault()
    h1.style.color = "red"
})

inp.addEventListener("change",function() { time = new Timer(+inp.value) })

    


