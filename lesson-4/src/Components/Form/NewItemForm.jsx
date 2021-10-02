import React from 'react'
import Styles from './NewItemForm.module.css'

function NewItemForm({setNewItem, newItem, articles, addItem, setNewListId}) {
    return (
        <div className={Styles.form__block}>
            <div className={Styles.dropdown}>
                <select defaultValue={'DEFAULT'} onChange={(e) => setNewListId(e.target.value)}>
                    <option value="DEFAULT" disabled={true}>Select category</option>
                    {articles.map(el => <option value={el.id} key={el.id}>{el.name}</option>)}
                </select>
            </div>
            <div className={Styles.inputBlock}>
                <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                <button onClick={addItem}>
                    Add item
                </button>
            </div>
        </div>
    )
}

export default NewItemForm