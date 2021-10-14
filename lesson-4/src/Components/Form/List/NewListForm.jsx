import React from 'react'
import Styles from '../NewItemForm.module.css'

function NewListForm({
    setNewList, 
    newList,
    articles,
    addList}) {
    return (
        <div className={Styles.form__block}>
            <div className={Styles.form__inner}>
                <div className={Styles.inputBlock}>
                    <div className={Styles.inputs}>
                        <input type="text" placeholder="Item name" value={newList.name} onChange={(e) => setNewList({...newList, name: e.target.value})} />
                    </div>
                    <button onClick={addList}>
                        Add list
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewListForm