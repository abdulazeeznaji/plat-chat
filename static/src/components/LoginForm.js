import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
                <Paper style={{alignText: 'center', padding:'2em'}}>
                    <TextField
                        type="text"
                        label="email"
                        value={this.state.email}
                        onChange={this.handle_change}
                        fullWidth={true}/>
                    <br/>
                    <TextField
                        type="password"
                        label="password"
                        value={this.state.password}
                        onChange={this.handle_change}
                        fullWidth={true} />
                    <br/>
                    <div>
                        <Button color="primary" style={{marginLeft: 'auto',marginRight: 'auto', display: 'block'}} onClick={e => this.props.handle_login(e, this.state)}>
                            Login
                        </Button>
                    </div>
                </Paper>

        );
    }
}

export default LoginForm;