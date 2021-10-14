import View from "../List/Item/View/View"
import ToDo from "../Todo/Todo"
import UseMemo from "../UseMemo"

const routes = [
    {
        path: "/todo",
        component: ToDo
    },
    {
        path: "/todo/:listId/item/:itemId",
        component: View
    },
    {
        path: "/usememo",
        component: UseMemo
    },
]

export default routes