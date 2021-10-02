import React from 'react'
import { Link } from 'react-router-dom'

function Item({customStyles, item, listId, customClickHandler}) {
    return (
        <div className={customStyles.item} >
            <Link to={`/todo/${listId}/item/${item.id}`}>
                {item.name}
            </Link>
            <button onClick={() => customClickHandler(listId, item.id) } className={customStyles.button}>X</button>
        </div>
    )
}

export default Item