import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    // Fetch gets us the users and then .json is used to convert the response into something more readable
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users =>
      // Lets now update the states monsters property using the inbuilt setState function
      this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
      />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
