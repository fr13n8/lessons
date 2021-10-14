import React from 'react'
import { useParams } from 'react-router-dom'
import articlesArray from '../../../Todo/todos';

export default function View() {
    const {listId, itemId} = useParams();
    let clonedArticles = [...articlesArray]
    let getObj = clonedArticles.filter(el => el.id === +listId)[0]
    let item = getObj.items.filter(el => el.id === +itemId)[0]

    console.log(item)

    return (
        <div>
            <h1>List id: {listId}</h1>
            <h3>Item id: {itemId}</h3>
            <p><b>Name</b>: {item.name}</p>
            <p><b>Description</b>: {item.description}</p>
        </div>
    )
}
