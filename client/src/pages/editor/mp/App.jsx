import React from 'react'
import EditorWrapper from './EditorWrapper.jsx'
class App extends React.Component {
    render() {
            return (
            <div  className="mp-workspace">
                <div className="mp-workspace--toolbox">
                </div>
                <div className="mp-workspace--editor-wrapper">
                    <EditorWrapper />
                </div>
            </div>)
    }
}
export default App;