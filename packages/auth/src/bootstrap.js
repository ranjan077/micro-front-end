import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'

const mount = (el, { onNavigate = {}, defaultHistory }) => {
    const history = defaultHistory  || createMemoryHistory()
    history.listen(onNavigate)
    ReactDom.render(<App history={history} />, el)
    return {
        onParentNavigation: ({pathname: nextPathName}) => {
            const { pathname } = history.location
            if(pathname !== nextPathName) {
                history.push(nextPathName)
            }
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const browserHistory = createBrowserHistory()
    const el = document.querySelector('#_auth-dev-root')
    if(el) {
       const {} =  mount(el, {
        defaultHistory: browserHistory
       })
    }
}

export {
    mount
}