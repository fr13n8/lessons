import React, {useState} from 'react'
import Styles from "./Todo.module.css"
import ListComponent from "../List/ListComponent"
import NewItemForm from '../Form/NewItemForm';

export default function ToDo() {
    let articlesArray = [
        {
            id: 1,
            name: "Language",
            items: [
                {
                    id: 1,
                    name: "Javascript",
                    description: "Javascript top language"
                },
                {
                    id: 2,
                    name: "PHP",
                    description: "PHP top language"
                },
                {
                    id: 3,
                    name: "Go",
                    description: "Go top language"
                }
            ]
        },
        {
            id: 2,
            name: "Databases",
            items: [
                {
                    id: 1,
                    name: "Mysql",
                    description: "Mysql top database"
                },
                {
                    id: 2,
                    name: "MongoDB",
                    description: "MongoDB top database"
                },
                {
                    id: 3,
                    name: "Postgres",
                    description: "Postgres top database"
                }
            ]
        },
    ]
    let [articles, setArticles] = useState(articlesArray)
    let [newItem, setNewItem] = useState({
        id: null,
        name: '',
        description: ''
    })
    let [newListId, setNewListId] = useState('')

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

    return (
        <div className={Styles.header__text}>
            <h1>Articles</h1>
            <NewItemForm setNewListId={setNewListId} newItem={newItem} addItem={addItem} articles={articles} setNewItem={setNewItem}/>
            <ListComponent articles={articles} customClickHandler={removeItemFromList} customStyles={Styles}/>
        </div>
    )
}
