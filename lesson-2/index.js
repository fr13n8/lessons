// console.log("Hello world")


// let string = "Hello world";
// let number = null

// console.log(true + true * 3) // true = 1 || false = 0 || undefined = 0 || null = 0

// function fib(n) {
//     if(n <= 1) {
//         return n
//     } else {
//        return fib(n - 1) + fib(n - 2) 
//     }
// }

// let result = fib(4)
// console.log(result)

// let array = new Array(1, 2, 3, "string") // первый вариант
// let array2 = [1, 5, 6, "string"] // второй вариант


// let array = ["elem1", "elem2", "elem3"]
// console.log(array)
// console.log("добвавить элемент в массив")
// array.push("elem4") // добвавить элемент в массив
// console.log(array)
// console.log("добавить элемент в начало масива")
// array.unshift("elem0") // добавить элемент в начало масива
// console.log(array)
// console.log("удаляет последный элемент и возвращает его")
// let lastElem = array.pop() // удаляет последный элемент и возвращает его
// console.log(lastElem, array)
// console.log("удаялет первый элемент массива и возвращает его ")
// let firstElem = array.shift() // удаялет первый элемент массива и возвращает его 
// console.log(firstElem, array)
// let slicedArray = array.slice(0, array.length - 1)  // создает копию отрезка массива
// console.log(slicedArray, array)

// let string = "my string"
// console.log(`Длина строки: ${string.length}`)

// let array2 = ["elem1", "elem2", "elem3", "elem2"]

// array2.forEach(function(el) {    // первый вариант итерации элементов массива
//     el += "9999"
// })
// console.log(array2)
// // второй способ итерации элементов массива
// let transformedArray = array2.map(el => `${el} 999`)
// console.log(transformedArray)

// let array3 = array2.filter(el => {  //для фильтрации массива
//     return el === "elem2"
// })
// console.log(array3)

// let numArray = [8, 9, 1, 2, 6, 85, 12]
// sortedArray = numArray.sort((a, b) =>  a - b) // сортировка массива получает коллбек который должен возвращать булевое значение
// console.log(sortedArray)

// let num = 999
// console.log(numArray.indexOf(num))

// let human = {
//     age: 45,
//     name: "Ivan",
//     profession: "ML engineer",
//     getInfo: function() {
//         console.log(this)
//         return `Age of ${this.name} is ${this.age} and his profesion was ${this.profession}`
//     },
//     getAge: function () {
//         return () => {
//             console.log(this.age) // 45
//         }
//     }
// }

// console.log(human.getInfo())
// console.log(human.getAge()())


let inputs = document.getElementsByTagName("input")
let button = document.getElementById("click_me")
let inputsByClass = document.getElementsByClassName("inputs")
console.log(inputs)
console.log(button)
console.log(inputsByClass)


function buttonHandlerClick() {
    let nameInput = document.getElementById("name")
    let lastNameInput = document.getElementById("lastname")
    let ageInput = document.getElementById("age")

    let nameInputValue = nameInput.value
    let lastNameInputValue = lastNameInput.value
    let ageInputValue = +ageInput.value

    // let span = document.getElementsByTagName("span")[0]
    // innerHTML => контент тега
    // console.log(span.innerHTML)

    let span = document.createElement("span")
    // console.log(span)
    span.innerHTML = `Hello ${nameInputValue} ${lastNameInputValue} and your age is ${ageInputValue}`

    // document.body.appendChild(span);
    document.body.insertBefore(span, nameInput.nextSibling) // Добавить новый элемент после какого-то элемента

}

// fetch("https://jsonplaceholder.typicode.com/todos/5").then((response) => {
//     return response.json()
// }).then((data) => console.log(data))
// axios, ajax

button.addEventListener("", buttonHandlerClick)

// DOM DOCUMENT OBJECT MODEL