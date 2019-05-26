import React from 'react'
import {Button,Layout} from 'element-react'
import 'element-theme-default'
import './User.css'
class User extends React.Component{
    constructor(pros){
        super([pros])
        this.state={
            time:new Date().toDateString()
        }
        this.clickMe=this.clickMe.bind(this)
    }
    componentDidMount() {

    }
    clickMe(){
      setInterval(()=>this.start(),1000)
    }
    start(){
      this.setState({
          time:1
      })
    }
    
    render() {
        return(


        <Layout.Row gutter="20">
            <Layout.Col span="6"><div className="grid-content bg-purple">
                <Button>{this.props.name}</Button>
            </div></Layout.Col>
            <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
            <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
            <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
        </Layout.Row>
        )
    }
}
export default User
