import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search.box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json() )
    .then( users => this.setState( { monsters: users } ) )
  }

  handleChange = (e) => {
    this.setState( { search: e.target.value } ) 
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(search.toLocaleLowerCase()) ); 
    return(
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        handleChange={this.handleChange} 
        placeholder='search for monsters' 
      />
      <CardList monsters={ filteredMonsters } />
      </div>
    )
  }
}
export default App;
