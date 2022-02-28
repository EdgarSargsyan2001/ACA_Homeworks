const inp = document.querySelector('.inp')
const makeRed = document.querySelector('.makeRed')
const makeGreen = document.querySelector('.makeGreen')
const paragraf = document.querySelector('.paragraf')
const bold = document.querySelector('.bold')
const italic = document.querySelector('.italic')
const del = document.querySelector('.del')
const underline = document.querySelector('.underline')
const upperCase = document.querySelector('.upperCase')



function add(k,l){
    
    let innerHTMLArr = paragraf.innerHTML.split('')

    if(innerHTMLArr.indexOf("<") === -1 ){

        let x = window.getSelection().getRangeAt(0).startOffset
        let y = window.getSelection().getRangeAt(0).endOffset
        
        if(x === y ){
            paragraf.innerHTML = ` ${k} ${paragraf.innerText} ${l}`
        }else{
            
            innerHTMLArr.splice(x,0,k)
            innerHTMLArr.splice(y+1,0,l)
            
            paragraf.innerHTML = innerHTMLArr.join('')
        }
            
    }else{
        paragraf.innerHTML = inp.value
    }

}

inp.addEventListener('keyup',function(){ paragraf.innerText = inp.value })


makeRed.addEventListener('click',function(){

    add("<span>","</span>")

    let span = document.querySelector('span')

    if(span !== null) span.style.color="red"
})

makeGreen.addEventListener('click',function(){

    add("<span>","</span>")

    let span = document.querySelector('span')

    if(span !== null) span.style.color="green"

})


bold.addEventListener('click',function(){ add("<b>","</b>") })

italic.addEventListener('click',function(){ add("<i>","</i>") })
    
del.addEventListener('click',function(){ add("<del>","</del>") })

underline.addEventListener('click',function(){ add("<u>","</u>") })

upperCase.addEventListener('click',function(){

    add("<span>","</span>")
    let span = document.querySelector('span')
    span.style.textTransform="uppercase"

})


