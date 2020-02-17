import React, { Component } from 'react'
import "./Form.css"

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                name: ''
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        }
        )
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addItem(this.state)
        this.setState({ name: ''})  
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Todo : </label>
                    <input name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                    <button>Ajouter</button>
                </form>
            </div>
        )
    }
}

export default Form
