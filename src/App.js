import React, { Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

onSearchChange = (event) => {
   this.setState({ searchfield: event.target.value})   
}

    render() {
        const { robots, searchfield} =this.state;
    const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
            <h1 className='f2'>SGA SWE .7</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        );
    }
     
}

export default App;