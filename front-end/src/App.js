import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './components/Header';
import { browserHistory as history } from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            logged_in: localStorage.getItem('token') ? true : false,

        };
    }

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
        history.push('/login');
    };


    // Render method
    render() {
        return (
            <div className="App">
                <Header           logged_in={this.state.logged_in}
                                  handle_logout={this.handle_logout}
                />
                {this.props.children}
            </div>
        );
    }
}

export default App;
