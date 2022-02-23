const some = document.querySelector('.some')
const imgconteiner = document.querySelector(".imgconteiner")
const img = document.querySelector('.img')


fetch('https://dog.ceo/api/breeds/list').then(val =>{
  return val.json()
}).then(response => {
  
  const select = document.createElement('select')
  select.classList.add('sel')


  response.message.forEach( (el)  => {

    const option = document.createElement('option')
    option.value = el
    option.textContent = el

    select.appendChild(option)

  })


  select.addEventListener('change',async () => {
    const resp = await fetch(
      `https://dog.ceo/api/breed/${select.value}/images/random`
    );

    const json = await resp.json();
  
    img.src = ""
    img.src = json.message;


    imgconteiner.appendChild(img)

  })
  

  some.appendChild(select)
  
})



