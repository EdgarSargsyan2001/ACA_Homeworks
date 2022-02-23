const input = document.querySelector('.input')
const searchBtn = document.querySelector('.searchBtn')
const tiemDiv = document.querySelector('.tiemDiv')
const info = document.querySelector('.info')
const item = document.querySelector('.item')


searchBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  if(input.value == undefined) {
    alert('input "the name of the book"')
    throw new Error('Error')
  }

  const bookName = input.value.replaceAll(' ','+')


  fetch(`http://openlibrary.org/search.json?q=${bookName}`).then((val)=>{
    return val.json()
  }).then((response)=>{
  
    
    for(let i = 0;i < 10;i++){
      const list = document.createElement('li')
      list.textContent = response.docs[i].title

      list.addEventListener('click',()=>{
        info.style.display="block"
        info.innerHTML = `
        
        <h3 class="h3">author name </h3>
        <p class="p">${response.docs[i].author_name}</p> <br>

        <h3 class="h3">First publish year </h3>
        <p class="p">${response.docs[i].first_publish_year}</p> <br>

        <h3 class="h3">numFound</h3>
        <p class="p">${response.docs.length}</p> <br>
        
        `

      })

      item.appendChild(list)
    }
  
  
  
  
  
    console.log(response)
  })











})




