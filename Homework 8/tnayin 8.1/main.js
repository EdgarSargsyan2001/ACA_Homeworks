const itemDiv = document.querySelector('.itemDiv');



fetch('https://ghibliapi.herokuapp.com/films').then(val =>{
  return val.json()
}).then(response => {
  const item = document.createElement('ol')
  const div = document.createElement('div')
  item.classList.add('item')
  div.classList.add('info')


  response.forEach(el => {
    const list = document.createElement('li')
    
    list.textContent = el.title
    
    list.addEventListener("click",() => {
      
      div.innerHTML =`
      <h2 class="h">Title</h2> 
        <p class="par">${el.title} </p>

      <h2 class="h">Release Date </h2> 
        <p class="par">${el.release_date} </p>

      <h2 class="h">Director </h2> 
        <p class="par">${el.director} </p>

      <h2 class="h">Description </h2> 
        <p class="par">${el.description} </p>
      
      ` 

      itemDiv.appendChild(div)

    })

    item.appendChild(list)
    
    
  })
  

  itemDiv.appendChild(item)
  
  console.log(response)
})




