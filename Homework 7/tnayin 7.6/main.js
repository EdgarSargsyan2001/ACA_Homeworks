
const buttonStart = document.querySelector(".start")
const buttonStop = document.querySelector(".stop")
const template = document.querySelector(".template")
const time = document.querySelector(".time")
const ol = document.querySelector(".ol")





// Homework 7.6 Convert it to Class

class Clock {

 constructor(template){
   this._template = template
   this._output 
   this._timer 
 }


// method render
  render() {

    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;


    this._output = this._template
                                .replace('h', hours)
                                .replace('m', mins)
                                .replace('s', secs);

    console.log(this._output);

//Time color change
    time.style.color =`rgb(
      ${Math.random()*255+150},
      ${Math.random()*255+150},
      ${Math.random()*255+150}
       )`
    return time.innerHTML = this._output

  }


// method stop
  stop() { clearInterval(this._timer) };
   

// method start
  start() {
    let hereThis = this
    function RETrender(){   return hereThis.render()   }

    this._timer = setInterval(RETrender, 1000);
    return this.render();
 };
}








let clock
let flag = true

buttonStart.addEventListener('click',function(){
  
  if(flag){
    clock = new Clock(template.value);
    time.innerHTML = clock.start();
    flag = false
  }else{
    let li = document.createElement("li")
    li.innerHTML = time.innerText 
    li.style.color =`rgb(
                     ${Math.random()*255+150},
                     ${Math.random()*255+150},
                     ${Math.random()*255+150}
                 )`
    ol.appendChild(li)
  }
    
})
buttonStop.addEventListener('click',function(){

  if(!flag){
    clock.stop();
    let li = document.createElement("li")
      li.innerHTML = time.innerText 
      li.style.color = " red"
      ol.appendChild(li)
    time.innerHTML="00:00:00"
    flag = true
    
  }
  
})




