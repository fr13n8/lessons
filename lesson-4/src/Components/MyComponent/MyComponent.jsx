import React, {useState} from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import About from '../About'
import Info from '../Info';
import ToDo from "../Todo/ToDo"
const MyComponent = function () {
    let articlesArray = [
        {
            id: 1,
            name: "Покупки",
            items: [
                "Купить хлеб",
                "Купить квас",
                "Купить пиво",
                "Купить Доширак"
            ]
        },
        {
            id: 2,
            name: "Учить",
            items: [
                "Математику",
                "Физику",
                "Программирование",
                "Javascript"
            ]
        },
    ]
    let [articles, setArticles] = useState(articlesArray)
    let [newItem, setNewItem] = useState('')
    let [newListId, setNewListId] = useState('')

    function removeItemFromList(listId, item) {
        let clonedArticles = [...articles]
        let getObj = clonedArticles.filter(el => el.id === listId)[0]
        getObj.items = getObj.items.filter(el => el !== item)
        setArticles(clonedArticles)
    }
    
    function addItem() {
        let clonedArticles = [...articles]
        let getObj = clonedArticles.filter(el => el.id === +newListId)[0]
        getObj.items.push(newItem)
        setArticles(clonedArticles)
        setNewItem('')
    }

    return(
            <>
                <Link to='/'>
                    To about
                </Link>
                <Link to='/info'>
                    To info
                </Link>
                <Link to='/todo'>
                    To todo
                </Link>
                
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route exact path="/info"  component={Info}/>
                    <Route exact path="/todo">
                        <ToDo 
                            setNewListId={setNewListId}
                            newItem={newItem}
                            addItem={addItem}
                            articles={articles}
                            setNewItem={setNewItem}
                            removeItemFromList={removeItemFromList}
                        />
                    </Route>
                </Switch>
            </>
    )
}

export default MyComponent