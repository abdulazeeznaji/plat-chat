import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Panel = styled.div`
	margin: 5px;
`;

class SinglePost extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false}
	}
	render() {
		const { post } = this.props;
		return(
			<Panel>
				<Grid container style={{margin: 10}}>
					<Grid item xs={10} sm={10} md={10}>
						<Typography style={{fontSize: 18}}>{post.body}</Typography>
					</Grid>
				</Grid>
				<Fragment>
					<CardMedia style={{cursor: 'pointer', margin: '-5px', height: 0, paddingTop: '56.25%'}}
							   title="Media"/>
				</Fragment>
			</Panel>
		);
	}
}

export default SinglePost;