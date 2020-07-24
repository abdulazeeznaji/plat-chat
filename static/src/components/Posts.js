import React  from 'react';
import SinglePost from './SinglePost';
import Card from '@material-ui/core/Card';

const Posts = ({ post }) => (
	<Card style={{ margin: '25px 0'}} square>
		<SinglePost post={post} />
	</Card>
);

export default Posts;