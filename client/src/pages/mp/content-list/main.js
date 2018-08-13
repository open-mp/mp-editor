import "regenerator-runtime/runtime"
import React from 'react'
import ReactDOM from 'react-dom'
import BasicLayout from '../../../common/layouts/BasicLayout.jsx'
import App from './App.jsx'
import './main.pcss'

ReactDOM.render((<BasicLayout><App/></BasicLayout>),
    document.getElementById('app'),
    () => {
    }
)
;
