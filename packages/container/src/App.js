import React, {Suspense, lazy, useState, useEffect} from 'react'
import { Router, Route, Switch, Redirect} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from './components/Header'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./components/AuthApp'))
const DashBoardAppLazy = lazy(() => import('./components/DashBoardApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const Loading = () => {
    return <div>Loading...</div>
}

const history = createBrowserHistory()

export default () => {
    const [isSignedIn, setIsSingedIn] = useState(false)
    useEffect(() => {
        if(isSignedIn) {
            history.push('/dashboard')
        }
    }, [isSignedIn])
    return <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSingedIn(false)}/>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthAppLazy onSignIn={() => setIsSingedIn(true)} />
                        </Route>
                        <Route path="/dashboard" >
                            {
                                !isSignedIn && <Redirect to="/" />
                            }
                            <DashBoardAppLazy />
                        </Route>
                        <Route path="/" component={MarketingAppLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </Router>
}