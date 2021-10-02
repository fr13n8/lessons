import React from 'react'
import ListItem from './ListItem/ListItem'

function ListComponent({articles, customStyles, customClickHandler}) {
    return (
        <>
            {articles.map((list) => <div className={customStyles.items__block} key={list.id}>
                {
                    list.items.length 
                    ? <>
                        <h4>{list.name}</h4>
                            <ul>
                                {list.items.map((item, id) => 
                            <li key={id}>
                                <ListItem item={item} customClickHandler={customClickHandler} listId={list.id} customStyles={customStyles} />
                            </li>)}
                        </ul>
                      </>
                    : <></>
                }
            </div>)}
        </>
    )
}

export default ListComponent