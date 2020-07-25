import React, {Component} from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Feed from './components/Feed';
import Header from './components/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed_form: '',
            posts:[],
            logged_in: localStorage.getItem('token') ? true : false,

        };
    }

    // Display the required form
    display_form = form => {
        this.setState({
            displayed_form: form
        });
    };
    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
    };
    handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: json.token
                });
            });
    };

    // Render method
    render() {
        let form;
        switch (this.state.displayed_form) {
            case 'login':
                form = <LoginForm handle_login={this.handle_login} />;
        }
        return (
            <div className="App">
                <Header           logged_in={this.state.logged_in}
                                  display_form={this.display_form}
                                  handle_logout={this.handle_logout}

                />
                {form}
                {this.state.logged_in ? <Feed/> :  <LoginForm handle_login={this.handle_login} /> }
            </div>
        );
    }
}

export default App;
