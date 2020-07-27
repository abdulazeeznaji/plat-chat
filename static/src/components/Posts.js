import React  from 'react';
import SinglePost from './SinglePost';
import Card from '@material-ui/core/Card';
import Comments from './Comments';

const Posts = ({ post, deletePost }) => {
    console.log(post)
    return (
        <Card style={{ margin: '25px 0'}} square>
            <SinglePost post={post} deletePost={deletePost} />
            <Comments post_id={post.id} comments={post.comments} />
        </Card>
    );
}

export default Posts;