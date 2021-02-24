mport React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Header from './Header/Header';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        image: "",
        name: "Emma Huski",
        phone: "(510) 123-4567",
        email: "ehuski@gmail.com.com",
        dob: "09-13-2014"
      },
      {
        id: 2,
        image: "",
        name: "Yasamin Nawabi",
        phone: "(415) 123-1212",
        email: "ynawabi@gmail.com",
        dob: "02-05-1981"
      },
      {
        id: 3,
        image: "",
        name: "Dirk Diggler",
        phone: "(619) 123-6869",
        email: "bdirk@gmail.com",
        dob: "12-12-1975"
      }
    ]
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    let filteredUsers = this.state.users.filter(
      (users) => {
        return users.name.indexOf(this.state.search) !== -1;
      }
    );

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
          <p className="NavInstructions">Use search bar to locate employee.</p>
        </nav>

        <input
          type='text'
          placeholder='Search name'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

        <Header />
        {filteredUsers.map(user => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id} />
          );
        })}
      </div>
    );
  }
}

export default App;
