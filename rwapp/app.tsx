
// template reference:
// https://reactjsexample.com/hello-react-create-a-minimalist-react-app/

import * as React from 'react'
import ReactDom from 'react-dom'

// TODO research how to or replace template to a working css through webpack
// import './app.css'

function App() {
    return <p>hello world ! :|</p>
}

ReactDom.render(<App />, document.querySelector('#root'))
