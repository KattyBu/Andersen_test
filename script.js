const taskOne = document.getElementById('taskOne')
const taskTwo = document.getElementById('taskTwo')
const taskThree = document.getElementById('taskThree')

const taskOneResult = document.getElementById('taskOneResult')
const taskTwoResult = document.getElementById('taskTwoResult')
const taskThreeResult = document.getElementById('taskThreeResult')

// task one
function getNumber(num) {
  taskOne.setAttribute("value", "defaultValue");
  const nunberTest = taskOne.value || num;
  if (nunberTest > 7) {
    console.log("Привет");
    taskOneResult.innerHTML = "Привет";
  } else {
    console.log("Number < 7");
    taskOneResult.innerHTML = "Number < 7";
  }
}

// task two
function getName(name) {
  taskTwo.setAttribute('value', '')
  const nameTest = taskTwo.value || name;
  if (nameTest == "Вячеслав") {
    console.log("Привет Вячеслав");
    taskTwoResult.innerHTML = "Привет Вячеслав";
  } else {
    console.log("Нет такого имени");
    taskTwoResult.innerHTML = "Нет такого имени";
  }
}

// task three
function getArray() {
  taskThree.setAttribute("value", "defaultValue");
  let arr = [...arguments];
  let ar = taskThree.value.split(",");
  // let b = ar
  let arrForResult = arr.length !== 0 ? arr : ar;

  // let arrForResult = arr || ar
  let arrayNumb = arrForResult.filter((num) => num % 3 == 0);
  console.log(arrayNumb);
  taskThreeResult.innerHTML = `${arrayNumb}`;
}