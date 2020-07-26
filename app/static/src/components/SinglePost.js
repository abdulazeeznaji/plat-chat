import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'
import red from '@material-ui/core/colors/red';




const Panel = styled.div`
	margin: 5px;
`;


const Delete = styled(DeleteIcon)`
	position: relative;
	cursor: pointer;
	right: 15px;
	top: 9px;
	float:right;
`;

class SinglePost extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false}
	}
	render() {
		const { post, deletePost } = this.props;
		return(
			<Panel>
				<Grid container style={{margin: 10}}>
					<Grid item xs={10} sm={10} md={10}>
						<Typography style={{fontSize: 18}}>{post.body}</Typography>
					</Grid>
					<Grid item xs={2} sm={2} md={2}>
						<Delete nativeColor={red[600]} onClick={() => deletePost(post.id)}/>
					</Grid>
				</Grid>
			</Panel>
		);
	}
}

export default SinglePost;