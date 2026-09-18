const person =  {
    name: "Paul",
    age: 23,
    job: "Developer"
}

delete person.age
console.log(person.hasOwnProperty('relationship'))
console.log(person)
console.log(person.age)


const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);