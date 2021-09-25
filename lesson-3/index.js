// const body = document.body
// const documentElement = document.documentElement

// // console.log(documentElement)

// const childNodes = body.childNodes // возвращает все узлы dom документа
// // console.log(childNodes)

// const childrenElems = body.children // возвращает все элементы dom документа
// // console.log(childrenElems) // проказывает текущее состояние элементов

// // HTMLcollection и NODElist являются псевдомассивами и на них не можно использовать станлартные методы массивов которые предоставляет javascript

// // for (const el of childrenElems) {
// //     console.log(el);
// // }

// let firstChild = body.firstChild
// let lastChild = body.lastChild

// let firstChildElement = body.firstElementChild
// let lastChildElement = body.lastElementChild

// // console.log(firstChild, lastChild)
// // console.log(firstChildElement, lastChildElement)

// let parentElement = body.parentElement
// // let parentNode = body.parentNode

// // console.log(parentElement)

// let p = document.querySelector("p")
// // console.log(p)

// let pList = document.querySelectorAll("p")
// // console.log(pList)

// let pByClassName = document.getElementsByClassName("p_2")
// // console.log(pByClassName)

// let pById = document.getElementById("p_1")
// // console.log(pById)

// let pPreviousSibling = pById.previousSibling
// let pNextSibling = pById.nextSibling
// // console.log(pPreviousSiblings, pNextSibling)

// let pPreviousElementSibling = pById.previousElementSibling
// let pNextElementSibling = pById.nextElementSibling
// // console.log(pPreviousElementSibling, pNextElementSibling)

// // console.log(pById.children)


// // NODElist является псевдомассивом узлов DOM дерева
// // HTMLcollection является псевдомассивом элементов DOM дерева




// let testBox = document.getElementById("test_box")
// let testBoxTagName = testBox.tagName
// // console.log(testBoxTagName)
// // console.log(testBox.attributes)

// testBox.style.backgroundColor = "blue";
// testBox.style.padding = "20px"; // с помощью свойства style взаимодействуем со стилями элемента

// // console.log(testBox.classList)
// testBox.classList.add("myDiv")

// let newPappend = document.createElement("p")
// newPappend.classList.add("red")
// newPappend.innerHTML = "append"

// let newPprepend = document.createElement("p")
// newPprepend.classList.add("red")
// newPprepend.innerHTML = "prepend"

// let newPbefore = document.createElement("p")
// newPbefore.classList.add("red")
// newPbefore.innerHTML = "before"

// let newPafter = document.createElement("p")
// newPafter.classList.add("red")
// newPafter.innerHTML = "after"

// let newPforReplace = document.createElement("p")
// newPforReplace.classList.add("red")
// newPforReplace.innerHTML = "replaced p element"

// testBox.prepend(newPprepend) // вставляет узлы в начало элемента
// testBox.append(newPappend) // вставляет узлы в конец элемента
// testBox.before(newPbefore) // вставляет узлы до элемента
// testBox.after(newPafter) // вставляет узлы после элемента
// testBox.replaceWith(newPforReplace) // заменяет элемент заданным узлом
// before
//     1.prepend
//     2.0
//     3.1
//     4.2
//     5.append
// after

// let tasks = [
//     {
//         id: 1,
//         description: "Купить хлеб",
//         done: false
//     },
//     {
//         id: 2,
//         description: "Выучить js",
//         done: false
//     },
//     {
//         id: 3,
//         description: "Побегать утром",
//         done: false
//     },
//     {
//         id: 4,
//         description: "Почитать книгу",
//         done: false
//     },
// ]

async function getTodos() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    let data = await response.json()
    return data
}


let setDone = element => {
    let target = element.target
    let id = target.getAttribute("data-id")
    let checkedTask = tasks.filter(el => el.id == id)[0]
    checkedTask.completed = true;
    let taskItem = document.getElementsByClassName(`taskItem-${id}`)[0]
    taskItem.classList.add("done")
    console.log(taskItem)
}

let getDelete = element => {
    let target = element.target
    let id = target.getAttribute("data-id")
    let taskItem = document.getElementsByClassName(`taskItem-${id}`)[0]
    taskItem.remove()
}

function fillTodos(tasks) {
    console.log(tasks)
    const taskListBlock = document.getElementsByClassName("task_list")[0]
    for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i];
        let newTaskDiv = document.createElement("div")
        newTaskDiv.classList.add("taskItem")
        newTaskDiv.classList.add(`taskItem-${element.id}`)
        newTaskDiv.setAttribute("data-id", element.id)

        let newPdescription = document.createElement("p")
        newPdescription.innerHTML = `${element.id}: ${element.title}`

        let spanDelete = document.createElement("span")
        spanDelete.innerHTML = "&#10005;"
        spanDelete.classList.add("delete")
        spanDelete.setAttribute("data-id", element.id)
        spanDelete.addEventListener("click", getDelete)

        let spanDone = document.createElement("span")
        spanDone.innerHTML = "&#10004;"
        spanDone.classList.add("setDone")
        spanDone.setAttribute("data-id", element.id)
        spanDone.addEventListener("click", setDone)

        let divActions = document.createElement("div")
        divActions.classList.add("actions")
        divActions.prepend(spanDone)
        divActions.append(spanDelete)

        newTaskDiv.prepend(newPdescription)
        newTaskDiv.append(divActions)
        taskListBlock.append(newTaskDiv)
    }
}

console.log("hello")
getTodos().then(fillTodos)
console.log("world")

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));