import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { browserHistory as history } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Plat-Chat
                    </Typography>
                    {props.logged_in ?
                        <Button onClick={props.handle_logout} color="inherit">Logout</Button>
                        :  <div>
                            <Button onClick={()=>{history.push('/login')}} color="inherit">Login</Button>
                            <Button onClick={()=>{history.push('/signup')}} color="inherit">Signup</Button>
                        </div>

                    }
                </Toolbar>
            </AppBar>

        </div>
    );
}
