import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(props){
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null){

            loggedIn = false
        }
        super(props)
        this.state = {
            username:'',
            password:'',
            loggedIn
        }
        this.changeHandle= this.changeHandle.bind(this)
        this.submitHandle= this.submitHandle.bind(this)
    }
    changeHandle(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandle(e){
        e.preventDefault()
        const { username, password } = this.state
        if (username === "pank" && password === "12345") {
            localStorage.setItem ("token", "sfsdfsdfsdfdsffdgh")
            this.setState({
                loggedIn: true
            })
        }
    }
    render() {
        if (this.state.loggedIn){
            return <Redirect to = "/admin" />
        }
        return (
            <div>
                <h3>Welcom to Login</h3>
                <form onSubmit={this.submitHandle}>
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandle}/><br/>
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandle}/><br/>
                <input type="submit"/>

                </form>
            </div>
        )
    }
}
