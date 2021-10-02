import React from 'react'
import Styles from './NewItemForm.module.css'

function NewItemForm({
    setNewItem, 
    newItem, 
    articles, 
    addItem, 
    setNewListId}) {
    return (
        <div className={Styles.form__block}>
            <div className={Styles.form__inner}>
                <div className={Styles.dropdown}>
                    <select defaultValue={'DEFAULT'} onChange={(e) => setNewListId(e.target.value)}>
                        <option value="DEFAULT" disabled={true}>Select category</option>
                        {articles.map(el => <option value={el.id} key={el.id}>{el.name}</option>)}
                    </select>
                </div>
                <div className={Styles.inputBlock}>
                    <div className={Styles.inputs}>
                        <input type="text" placeholder="Item name" value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} />
                        <textarea value={newItem.description} placeholder="Item description" onChange={(e) => setNewItem({...newItem, description: e.target.value})} cols="15" rows="5"></textarea>
                    </div>
                    <button onClick={addItem}>
                        Add item
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewItemForm