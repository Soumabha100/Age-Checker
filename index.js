const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const myResult = document.getElementById("myResult");
let age;

myButton.onclick = function(){
  age = myInput.value
  age = Number(age);

  if(age >= 100){
    myResult.textContent = `You are too old to enter this site`
  }
  else if(age < 0){
    myResult.textContent = `Your age cannot be below Zero!`
  }
  else if(age == 0){
    myResult.textContent = `You are too young to enter this site`
  }
  else if(age >= 18){
    myResult.textContent = `You are old enough to enter this site`
  }
  else if(age < 18){
    myResult.textContent = `You must be 18+ to enter this site`
  }
  else {
    myResult.textContent = `Your age is invalid!`
  }
}