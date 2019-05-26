import React from 'react'
import './User.css'
class User extends React.Component{
    render() {
        return(
            <h1>{this.props.name}</h1>
        )
    }
}
export default User