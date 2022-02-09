
let submit = document.querySelector('#submit')

submit.addEventListener("click",function(e){

    e.preventDefault(); 

    const Myform = new FormData(document.getElementById("Myform"))

    const div = document.querySelector("div");
    div.classList.add("ff")
    
    div.innerText=`
        Name = ${Myform.get("Name")}
        Email = ${Myform.get("Email")}
        Phone = ${Myform.get("Phone")}
        Address = ${Myform.get("Address")}
        City = ${Myform.get("City")}
        Country = ${Myform.get("Country")}
        Province = ${Myform.get("Province")}
        Birthday = ${Myform.get("Birthday")}

        `

    document.body.appendChild(div)
    

    const input=document.querySelectorAll("input")
    for(let i = 0;i<input.length;i++){
        input[i].value=""
    }
})



