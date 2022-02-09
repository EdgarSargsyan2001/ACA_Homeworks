
// 1. Create a Rectangle class.
class Rectangle{

  constructor(length,width){
    this._length = length
    this._width = width

  }

// getter and setter  _length
  get length(){
    return this._length

  }
  set length(value){
    {
      if(value < this._width){
        alert("length should be greater than width") 

      }else{
        this._length = value
      }
      
    }

  }

// getter and setter  _width
  get width(){
    return this._width

  }
  set width(value){
    {
      if(value > this._length){
        alert("length should be greater than width") 

      }else{
        this._width = value
      }
      
    }

  }
//methods
  getPerimeter(){
    return ( this._length + this._width ) * 2
  }
  toString(){
    return `parameters :length =  ${this._length}, width = ${this._width} `
  }

}


const rec = new Rectangle(150,200)

// console.log(rec.length = 50)
// console.log(rec.width = 500)
// console.log(rec.toString())
// console.log(rec.getPerimeter())

// console.log(rec)




//2.create an Employee class.

class Emplooyee{
  constructor(id,firstName,lastName,position,salary,workingHours){
    this._id = id
    this._firstName = firstName
    this._lastName = lastName
    this._position = position
    this._salary = salary
    this._workingHours = workingHours

  }
//getter 
  get firstName (){
    return this._firstName
  } 
//getter 
  get lastName (){
    return this._lastName
  }
//getter 
  get position (){
    return this._position
  }

// getter and setter  _id
  get id (){
    return this._id
  }
  set id (value){
    value = "" + value
    if(value.length == 6) {
      return this._id = +value
    }else{
      alert("id must have 6 numbers")
    }
    
  }
  
// getter and setter  _salary
  get salary (){
    return this._salary

  }
  set salary (value){
    if(value > 100000){
      alert("The salary is very high")
    }else{  
      return this._salary = value
    }

  }
  
// getter and setter  _workingHours
  get workingHours (){
    return this._workingHours
  }
  set workingHours (value){
    if(value > 12) {
      alert("working hours are more than 12 hours")
    }else{
      return this._workingHours = value
    }
    
  }

// methods
  getFullName(){
    return `FullName: ${this._firstName} ${this._lastName}`
  }
  getAnnualarSalary(){
    return "sakary of the year " + this._salary * 12 + "$"
  }
  raiseSalary(percent){
    if(percent == undefined) return this._salary

    return this._salary = (this._salary * ( percent + 100 )) / 100
  }

}


const person = new Emplooyee(112233,"joe","Cocker","Admin",2000,8)


// console.log(person.getFullName())
// console.log(person.getAnnualarSalary())
// console.log(person.raiseSalary(15))


// person.id = 444555
// person.salary = 15000
// person.workingHours = 15


// console.log(person)








//3 creat an Author and Book

class Author {
  constructor(name,gender,email){
    this._name = name
    this._email = email
    this._gender = gender

  }
// getter
  get gender(){
    return this._gender
  }

// getter and setter  _name
  get author(){
    return this._name
  }
  set author(value){
    return alert("You can not change the author")
  }

// getter and setter  _email
  get email(){
    return this._email
  }
  set email(value){
    if(/[@]/.test(value) && /[.]/.test(value)){
      return this._email = value
    }
    else{
      alert("this is not email")
    }

  }


// methods
  toString(){
    return `
    authorName:${this._name}
    email:${this._email}
    gender:${this._gender}
    
    `
  }

}


class Book extends Author{
  constructor(name,gender,email,title,price,quantity){
    super(name,gender,email)
    this._title = title
    this._price = price
    this._quantity = quantity

  }

// getter
  get title(){
    return this._title
  }

// getter
  get price(){
    return this._price
  }

// getter and setter  _quantity
  get quantity(){
    return this._quantity
  }
  set quantity(value){
    if(value<250){
      alert("quantity is very small")
    }else{
      return this._quantity = value
    }

  }

// methods
  getProfit(){
    return this._price * this._quantity + "$"
  }
  toString(){
    return `
    ${super.toString()}
    title:${this._title}
    price:${this._price}
    quantity:${this._quantity}
    
    `
  }
}


const bookAuthor = new Book ("Робин","male","Робин@gmail.com",
                        "Монах, который продал свой «феррари»",15,5000 )

                        
// console.log(bookAuthor.author)
// bookAuthor.email = "Робин@mailru"      // getter and setter  _email

// bookAuthor.quantity = 150              // getter and setter  _quantity
// console.log(bookAuthor.getProfit())

// console.log(bookAuthor.toString())
// console.log(bookAuthor)


