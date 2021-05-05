import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")

    }
    render() {
        return (
            <div>
                <h2>You have bee logged out</h2>
                <Link to ="/">Login Again</Link>
            </div>
        )
    }
}
