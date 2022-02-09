
// implement debounce

function debounce(fn,ms){

  let timeout

  return function(){
    
    const fnCall = () => {fn.apply(this,arguments)}

    clearTimeout(timeout)

    timeout = setTimeout(fnCall,ms)
  }

}


function onChange(evt){
  console.log(evt.target.value)
}

onChangeDebounce = debounce(onChange,350)




document.querySelector("input").addEventListener("keyup",onChangeDebounce)



// implement throttle

function throttle(func,ms){
  let isThrottled = false
  let savedArgs
  let savedThis

  function wrapper(){
      if(isThrottled){
        savedArgs = arguments
        savedThis = this
        return;
      }
    

    func.apply(this,arguments)

    isThrottled = true

    setTimeout(function(){

      isThrottled = false
      if(savedArgs){
        wrapper.apply(savedThis,savedArgs)
        savedThis = savedArgs = null

      }

    },ms)

  }

  return wrapper

}




function MouseMove(evt){
  console.log("layerX = " + evt.layerX,"layerY = " + evt.layerY)
}


MouseMoveThrottel = throttle(MouseMove,2000)


document.querySelector("div").addEventListener("mousemove",MouseMoveThrottel)