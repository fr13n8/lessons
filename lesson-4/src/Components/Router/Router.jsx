import React from 'react'
import { Switch, Route } from 'react-router'
import routes from './Routes'

export default function Router() {
    return (
        <div>
            <Switch>
                {routes.map(route => <Route key={new Date()} exact path={route.path} component={route.component} />)}
            </Switch>
        </div>
    )
}
