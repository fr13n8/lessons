import View from "../List/Item/View/View"
import ToDo from "../Todo/Todo"

const routes = [
    {
        path: "/todo",
        component: ToDo
    },
    {
        path: "/todo/:list/item/:item",
        component: View
    },
]

export default routes