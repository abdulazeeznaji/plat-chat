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

    componentDidMount() {
        // if (this.state.logged_in) {
        //     fetch(' http://127.0.0.1:8000/users/current_user/', {
        //         headers: {
        //             Authorization: `JWT ${localStorage.getItem('token')}`
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(json => {
        //             this.setState({ username: json.username });
        //         });
        // }
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
