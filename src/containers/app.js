import React, { Component } from 'react'
import CardList from '../components/cardList'
import Search from '../components/search'
import 'tachyons'
import './app.css'
import Scroll from '../components/Scroll'

class App extends Component {
    constructor(){
        super()
        this.state ={
            robots : [],
            SearchField : ''
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(user=>this.setState({robots : user}))
}

    onSearchChange = (event) => {
        this.setState({SearchField : event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase())})
        return(
            <div className='tc'>
               <h1 className='f1'>Robot Friends</h1>
               <Search SearchChange = {this.onSearchChange}/>
               <Scroll>
                    <CardList robots={filteredRobots}/>
               </Scroll>
           </div>
           )
    }
    
}

export default App;