import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed_form: ''
        };
    }

    // Display the required form
    display_form = form => {
        this.setState({
            displayed_form: form
        });
    };

    // Render method
    render() {
        let form;
        switch (this.state.displayed_form) {
            case 'login':
                form = <LoginForm/>;
        }
        return (
            <div className="App">
                <Nav
                    display_form={this.display_form}
                />
                {form}
                <header className="App-header">
                </header>
            </div>
        );
    }
}

export default App;
