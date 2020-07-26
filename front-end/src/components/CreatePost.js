import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles/';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const style = {
	form: {
		width: '100%',
		margin: '0 auto',
		display: 'flex',
		paddingTop: 20,
	},
	formControl : {
		margin: '0 auto',
		width: 500,
	},
	button: {
		width: 200,
		margin: '10px 0',
	}
};

class CreatePost extends Component {

	constructor(props) {
		super(props);
		this.state = {post: ''};
	}

	handleChange = event => {
		this.setState({post: event.target.value})
	};

	handleSubmit = event => {
		event.preventDefault();
		let obj = {
			body: this.state.post,
			user:1
		};
		fetch('http://localhost:8000/posts/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(obj)
		})
			.then(res => res.json())
			.then(json => {
				localStorage.setItem('token', json.token);
				this.setState({
					logged_in: true,
					displayed_form: '',
					username: json.username
				});
			});
	};

	render() {
		const { classes } = this.props;
		return (
			<form onSubmit={this.handleSubmit} className={classes.form} encType="multipart/form-data">
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="new_post">What's on your mind?</InputLabel>
					<Input type="text" autoComplete="off" id="text" name="text" value={this.state.post} onChange={this.handleChange}/>
					<Button type="submit" disabled={!this.state.post} variant="outlined" className={classes.button}>Create Post</Button>
				</FormControl>
			</form>
		);
	}

}

export default withStyles(style)(CreatePost);