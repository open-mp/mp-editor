import React from 'react'
import { Layout } from 'antd';
import EditorWrapper from './EditorWrapper.jsx'
const { Header, Footer, Sider, Content } = Layout;
class App extends React.Component {
    render() {
            return (
            <Layout style={{height: "100vh"}}>
                <Sider width="300">
                </Sider>
                <Content Class="editor-content">
                    <EditorWrapper />
                </Content>
            </Layout>)
    }
}
export default App;