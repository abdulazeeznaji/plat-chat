import React, { Component } from 'react';
import SinglePost from './SinglePost';
import CreatePost from './CreatePost';
import Typography from '@material-ui/core/Typography';
import Error from '@material-ui/icons/Error';
import indigo from '@material-ui/core/colors/indigo';

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: [], loadingFeed: true };
    }

    componentDidMount() {
        fetch('http://localhost:8000/posts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('token')}`

            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    posts:json
                });
            })			.finally(() => this.setState({ loadingFeed: false }));

    }

    updatePosts = (feed) => {
        this.setState({ feed });
    };

    renderPosts = (posts) => posts.map(post => <SinglePost post={post} />);


    render() {
        return (
            <div style={{ padding: 10 }}>
                <CreatePost updatePosts={this.updatePosts}/>
                <div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '20px'}}>
                    {this.state.loadingFeed
                        ? <Typography variant="headline">Loading posts...</Typography>
                        : this.state.posts.length
                            ? this.renderPosts(this.state.posts)
                            : <Typography variant="headline">
                                <Error style={{ position: 'relative', top: '3px' }} nativeColor={indigo[500]}/>
                                &nbsp;&nbsp;No Posts Yet.
                            </Typography>}
                </div>
            </div>
        );
    }
}

export default Feed;