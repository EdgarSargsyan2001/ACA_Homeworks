
const button = document.querySelector("button")
let countries = ["Armenia","Usa","Russia"]


function random(min,max){
    const DEFF = max -min +1
    return Math.floor(Math.random()*DEFF) + min

}



button.addEventListener("click",function(){
    const input = document.querySelector("input")
    const tbody = document.querySelector("tbody")
    const condidates = document.querySelectorAll(".condidate")
    
    
    let flag = true
    let num = random(0,countries.length-1)
    

 for(let i = 0;i<condidates.length;i++){
    
    if(input.value.toLocaleLowerCase() == condidates[i].children[0].innerText.toLocaleLowerCase()){
        let k = condidates[i].children[3].innerText
        k = +k + 1
        condidates[i].children[3].innerText = k
        flag = false

    }
  }
    if (flag){
        let condidateinfo = document.createElement('tr')
        condidateinfo.classList.add('condidate')
        condidateinfo.innerHTML=`
            <td>${input.value}</td>
            <td>${random(27,45)}</td>
            <td>${countries.slice(num,num+1).join('')}</td>
            <td>1</td>
            `
        tbody.appendChild(condidateinfo)
        flag = false
    }



 let rows, i ,switching, x, y, shouldSwitch;
const table = document.getElementById("myTable");
switching = true;

while (switching) {

  switching = false;
  rows = table.rows;


  for (i = 1; i < (rows.length - 1); i++) {

    shouldSwitch = false;

    x = rows[i].getElementsByTagName("TD")[3];
    y = rows[i + 1].getElementsByTagName("TD")[3];

    if (Number(x.innerHTML) < Number(y.innerHTML)) {
        
      shouldSwitch = true;
      break;

    }

  }
  if (shouldSwitch) {

    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
  }
}
    


})



