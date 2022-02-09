
function recurring(arr){
    let chkrknvum = true
    arajin:
    for(let index = 0;index<arr.length;index++){
        if(arr[index] == " "){break}
        for(let i = index+1;i < arr.length;i++){

            if(arr[index] == arr[i]){
                console.log('krknvum en')
                chkrknvum = false
                break arajin
            }
        }
        
    }
    if(chkrknvum){
        console.log('chen krknvum')
    }
}

//2. Given an array. Determine whether it consists only of unique items or not.

let arr = ["Erevan",1,2,8,"Erevan",]
recurring(arr)


//3. Determine if a word or phrase is an isogram. An isogram (also known // as a "non pattern word") is a word or phrase without a repeating letter.

let string = "Hello World"
let stringArr = string.toLocaleLowerCase().split('')

recurring(stringArr)