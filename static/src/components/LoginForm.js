import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
            <MuiThemeProvider>
                <Paper zDepth={2} style={{alignText: 'center', padding:'2em'}}>
                    <TextField
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handle_change}
                        floatingLabelText="username" fullWidth={true}/>
                    <br/>
                    <TextField
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handle_change}
                        floatingLabelText="Password" fullWidth={true} />
                    <br/>
                    <div>
                        <RaisedButton primary={true} style={{marginLeft: 'auto',marginRight: 'auto', display: 'block'}} label="Login" onClick={e => this.props.handle_login(e, this.state)}/>
                    </div>
                </Paper>
            </MuiThemeProvider>

        );
    }
}

export default LoginForm;