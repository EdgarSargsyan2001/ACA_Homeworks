
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")



button1.addEventListener('click',function(){   
    const input1 = document.querySelector(".input1")
    const input2 = document.querySelector(".input2")
    const span1 = document.querySelector(".span1")
    span1.innerText = ""
    const word = input1.value.split("")
    const words = input2.value.split(' ')

        
    words.forEach(function(elem2){
        let count = 0
        word.forEach(function(elem1){
           
           if(elem2.indexOf(elem1) !== -1){count++}
           if (count == word.length && elem2.length == word.length ){span1.innerText +=  ` ${elem2}`}
        })
    })

})

button2.addEventListener('click',function(){   
    const input3 = document.querySelector(".input3")
    const input4 = document.querySelector(".input4")
    const span2 = document.querySelector(".span2")
    span2.innerText = ""

    span2.innerText = input4.value.replaceAll(input3.value,"")
    
    

})
button3.addEventListener('click',function(){   
    const input5 = document.querySelector(".input5")
    const input6 = document.querySelector(".input6")
    const span3 = document.querySelector(".span3")
    span3.innerText = ""
    let value = input5.value
    const words = input6.value.split(" ")

    words.forEach(function(word){
        value=value.replace("_",word)
        

    })
    span3.innerText = value
    

})
button4.addEventListener('click',function(){   
    const input7 = document.querySelector(".input7")
    const span4 = document.querySelector(".span4")
    span4.innerText = ""

    const words = input7.value.split(" ")
    let plongestword = ""

    words.forEach(function(word){
        
        if(word.length >= plongestword.length){
            plongestword = word
        }

    })
    span4.innerText = plongestword

})
