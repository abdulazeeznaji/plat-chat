import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { browserHistory as history } from 'react-router';


class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handle_change = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handle_login = (e, data) => {
        e.preventDefault();
        fetch(' http://127.0.0.1:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);

                this.setState({
                    logged_in: true,
                    username: json.token
                });
                history.push(`/`);
            });
    };

    render() {
        return (
            <Paper style={{alignText: 'center', padding:'2em'}}>
                <TextField
                    type="text"
                    label="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handle_change}
                    fullWidth={true}/>
                <br/>
                <TextField
                    type="password"
                    label="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                    fullWidth={true} />
                <br/>
                <div>
                    <Button color="primary" style={{marginLeft: 'auto',marginRight: 'auto', display: 'block'}} onClick={e => this.handle_login(e, this.state)}>
                        Login
                    </Button>
                </div>
            </Paper>

        );
    }
}

export default LoginForm;