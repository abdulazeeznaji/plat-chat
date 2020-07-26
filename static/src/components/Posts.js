import React  from 'react';
import SinglePost from './SinglePost';
import Card from '@material-ui/core/Card';

const Posts = ({ post, deletePost }) => (
	<Card style={{ margin: '25px 0'}} square>
		<SinglePost post={post} deletePost={deletePost} />
	</Card>
);

export default Posts;