import React, {useState, useEffect, useRef, useMemo} from 'react'
import Styles from "./Todo.module.css"
import ListComponent from "../List/ListComponent"
import NewItemForm from '../Form/Item/NewItemForm';
import articlesArray from './todos'
// import NewListForm from '../Form/List/NewListForm';

export default function ToDo() {
    let [articles, setArticles] = useState(articlesArray)
    let [newItem, setNewItem] = useState({
        id: null,
        name: '',
        description: ''
    })
    let [newListId, setNewListId] = useState('')

    // let [newList, setNewList] = useState({
    //     id: articles.length + 1,
    //     name: '',
    //     items: []
    // })

    function removeItemFromList(listId, itemId) {
        let clonedArticles = [...articles]
        let getObj = clonedArticles.filter(el => el.id === listId)[0]
        getObj.items = getObj.items.filter(el => el.id !== itemId)
        setArticles(clonedArticles)
    }
    
    function addItem() {
        let clonedArticles = [...articles]
        let getObj = clonedArticles.filter(el => el.id === +newListId)[0]
        getObj.items.push({...newItem, id: getObj.items.length+1})
        setArticles(clonedArticles)
        setNewItem({
            id: null,
            name: '',
            description: ''
        })
    }

    // function addList() {
    //     let clonedArticles = [...articles]
    //     let clonedList = {...newList}
    //     console.log(clonedArticles, clonedList)
    //     // let newArticles = [...articles].push(newList)
    //     // setArticles([...articles].push(newList))
    // }

    const [name, setName] = useState("start")
    const inputRef = useRef(null);
    const prevValue = useRef()

    function onButtonClick () {
        setName(inputRef.current.value)
    }

    // function test() {
    //     let n = 1
    //     while(n < 100000) n++ 
    //     return "ended"
    // }

    // const test = useMemo(() => {

    // })

    useEffect(() => {
        console.log("rendered")
    })

    useEffect(() => {
        prevValue.current = name
    }, [name])


    return (
        <div className={Styles.header__text}>
            <h1>Articles</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={onButtonClick}>Change name</button>
            <span>{name}</span>
            <br />
            <span>Prev: {prevValue.current}</span>
            <br />
            <br />
            <span>test : </span>
            <p>component is rendered</p>
            <div className="forms">
                {/* <NewListForm newList={newList} setNewList={setNewList} addList={addList} /> */}
                <NewItemForm setNewListId={setNewListId} newItem={newItem} addItem={addItem} articles={articles} setNewItem={setNewItem}/>
            </div>
            <ListComponent articles={articles} customClickHandler={removeItemFromList} customStyles={Styles}/>
        </div>
    )
}


// useState
// useParams
// useRef
// useEffect
// useMemo
// 