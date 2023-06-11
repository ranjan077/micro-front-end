import React from 'react'

import {Switch, Route, Router} from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import SignUp from './components/Signup'
import Signin from './components/Signin'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({history, onSignIn}) => {
  return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                   <Route  path="/auth/signin">
                        <Signin onSignIn={onSignIn}/>
                   </Route>
                   <Route exact path="/auth/signup">
                        <SignUp onSignIn={onSignIn}/>
                   </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}
