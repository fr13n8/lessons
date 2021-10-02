import React from 'react'
import Styles from "../MyComponent/MyComponent.module.css"
import ListComponent from "../List/ListComponent"
import NewItemForm from '../Form/NewItemForm';

export default function ToDo({setNewListId, newItem, addItem, articles, setNewItem, removeItemFromList}) {
    return (
        <div className={Styles.header__text}>
            <h1>Articles</h1>
            <NewItemForm setNewListId={setNewListId} newItem={newItem} addItem={addItem} articles={articles} setNewItem={setNewItem}/>
            <ListComponent articles={articles} customClickHandler={removeItemFromList} customStyles={Styles}/>
        </div>
    )
}
