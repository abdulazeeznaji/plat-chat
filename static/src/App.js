import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="App">
          <Nav
          />
          <header className="App-header">
          </header>
        </div>
    );
  }
}

export default App;
