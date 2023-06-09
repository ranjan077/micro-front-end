import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const Loading = () => {
    return <div>Loading...</div>
}

export default () => {
    return <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header />
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/auth" component={AuthAppLazy} />
                        <Route path="/" component={MarketingAppLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
        
    </BrowserRouter>
}