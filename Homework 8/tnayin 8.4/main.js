const itemDiv = document.querySelector('.itemDiv');
const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click',() =>{

  
  fetch(`https://ghibliapi.herokuapp.com/films/${input.value}`)
                                                            .then(val =>{
    return val.json()
  }).then(response => {
  
    const div = document.createElement('div')
  
    div.classList.add('info')
  
      div.innerHTML =`
      <h2 class="h">Title</h2> 
        <p class="par">${response.title} </p>
      <h2 class="h">Release Date </h2> 
        <p class="par">${response.release_date} </p>
      <h2 class="h">Director </h2> 
        <p class="par">${response.director} </p>
      <h2 class="h">Description </h2> 
        <p class="par">${response.description} </p>
      
      ` 
  
    itemDiv.appendChild(div)
    
    console.log(response)
  })



})





