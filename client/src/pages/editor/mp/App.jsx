import React from 'react'
import EditorWrapper from './EditorWrapper.jsx'
class App extends React.Component {
    render() {
            return (
            <div  Class="mp-workspace">
                <div Class="mp-workspace--toolbox">
                </div>
                <div Class="mp-workspace--editor-wrapper">
                    <EditorWrapper />
                </div>
            </div>)
    }
}
export default App;