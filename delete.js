class user {
  constructor (email, firstName) {
    this.email = email
    this.fristName = firstName
    this.lastName = ''
  }
}

let userOne = new user('raymond_09@ymail.com', 'Raymond') //create new empty obj
//value of 'this' is the new empty obj

console.log(userOne)
