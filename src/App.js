import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'
import Form from './components/Form'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        items: [
          {name: "Acheter le pain"},
          {name: "Appeler Gilles"}
        ]
    }
  }
  
  addItem = (todo) => {
    this.setState(prevState => ({
      items :  [...prevState.items, todo]
    }))
  } 

  renderItems = () => {
    return (
      <ul style={{textAlign:'center', listStyle: 'none'}}>
        {this.state.items.map(item => 
          <li key={item.name}>{item.name}</li>
        )}
      </ul>
    )
  }

  render() {
    return (
      <div>
          <Title />
          <Form addItem={this.addItem}/>
          {this.renderItems()}
      </div>
    )
  }
}

export default App