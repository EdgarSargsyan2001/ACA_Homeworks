//4. create an Account class

class Account {
  constructor(id,name,balance){
    this._id = id
    this._name = name
    this._blaance = balance
  }

//getter
  get name(){return this._name}

//getter
  get balance(){return this._balance}

//getter and setter

  get id(){
    return this._id
    
  }set id(value){
    if(value.length == 6){
      return this._id = "id"+value
    }else{
      alert("must have the number 6")
    }
  }




// methods
  credit(amount){ return this._blaance += amount }

//method 1
  debit(amount){
    if(amount < this._blaance){
      return this._blaance -= amount
    }else{
      alert("Amount exceeds balance")
    }
  }

//method 2
  transferTo(anotherAccount, amount){
    if(amount < this._blaance){

      anotherAccount._blaance += amount
      this._blaance -= amount
        
    }else{
      alert('Amount exceeded balance.')
    }
    

  }

//method 3
  toString(){
    return `
    name :${this._name}
    id: ${this._id}
    balance: ${this._blaance}$
    
    `
  }


//method 4
  static identifyAccounts(accountFirst, accountSecond){
    let flag = true
    for(let key in accountFirst){
      if(accountFirst[key] == accountSecond[key]){
        alert(` they are the same '${key}' : ${accountFirst[key]}`) 
        flag = false
      }
      
    }
    if(flag) {alert("they are not the same")}
  }


}


acc1 = new Account("id445588","Joe",2000)
acc2 = new Account("id112211","Jak",5000)




// acc1.credit(2000)
// acc1.debit(5000)
// console.log(acc1.toString()) 

// console.log(acc1.id = "45555") 

// acc2.transferTo(acc1,1000)
// Account.identifyAccounts(acc1,acc1)

console.log(acc1,acc2)







//5 Write classes: Person,Student, Staff.


class Person{
  constructor(name,lastName,gender,age){
    this._name = name
    this._lastName = lastName
    this._gender = gender
    this._age = age

  }
//getter
  get name(){ return this._name}

//getter
  get lastName(){ return this._lastName}

//getter
  get gender(){ return this._gender}

//getter
  get age(){ return this._age}


//method
  toString(){
    return `
    name: ${this._name}
    lastName: ${this._lastName}
    age: ${this._age}
    gender: ${this._gender}
    `
  }
}


class Student extends Person{
  constructor(name,lastName,gender,age,year,fee,programArr){
    super(name,lastName,gender,age)
    this._programArr = programArr
    this._year = year
    this._fee = fee

  }
//getter
  get programArr(){ return this._programArr}

//getter
  get year(){ return this._year}

//getter
  get fee(){ return this._fee}



//methods
  passExam(program, grade){

    this._programArr.forEach((prog)=>{
      if(prog.name == program) prog.grade += grade
        
      if(prog.grade > 50 )return this._year += 1
    
    })
  }

  toString(){
    return`
    ${super.toString()}
    fee: ${this._fee}
    year: ${this._year}

    `
  }


}


const student = new Student("Chris","Evans","male","21",2,540000,
                              [
                                {name:"Course1",grade:15},
                                {name:"Course2",grade:45},
                                {name:"Course3",grade:25}
                              ]
                           )


// console.log(student.name)
// console.log(student.age)
// console.log(student.fee)


// student.passExam("Course2",14)
// student.programArr.forEach( (el) => console.log(el) )


// console.log(student.toString())
// console.log(student)





//create Teacher class

class Teacher extends Person{
  constructor(name,lastName,gender,age,pay,programArr){
    super(name,lastName,gender,age)
    this._programArr = programArr
    this._pay = pay

  }

//getter
  get programArr(){ return this._programArr}

//getter
  get pay(){ return this._pay}


//method
  toString(){
    return`
    ${super.toString()}
    pay: ${this._pay}
    Courses: ${this._programArr}
    `
  }

}

const teacher = new Teacher("Joe","Jackson","male",40,400000,["Course1"])



// console.log(teacher.toString())
// console.log(teacher.pay)
// console.log(teacher)