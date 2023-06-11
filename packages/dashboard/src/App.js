import React from 'react'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import DashBoard from './components/DashBoard'


const generateClassName = createGenerateClassName({
    productionPrefix: 'db'
})

export default () => {
  return <div>
        <StylesProvider generateClassName={generateClassName}>
            <DashBoard />
        </StylesProvider>
    </div>
}
