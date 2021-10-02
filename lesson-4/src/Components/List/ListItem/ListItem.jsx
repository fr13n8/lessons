import React from 'react'

function ListItem({customStyles, item, listId, customClickHandler}) {
    return (
        <div className={customStyles.item} >
            {item}
            <button onClick={() => customClickHandler(listId, item) } className={customStyles.button}>X</button>
        </div>
    )
}


export default ListItem