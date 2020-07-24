import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import Posts from './components/Posts'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed_form: '',
            posts:[{
                id:1,
                image_url:'https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                body:"Hi this is my first post yaaay! "
            }]

        };
    }

    componentDidMount(){
        this.fetchPosts()
    }

// Fetch post function
    fetchPosts(){
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    posts:json.posts
                });
            });
    }

    // Display the required form
    display_form = form => {
        this.setState({
            displayed_form: form
        });
    };

    handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: json.token
                });
            });
    };

    // Render method
    render() {
        let form;
        switch (this.state.displayed_form) {
            case 'login':
                form = <LoginForm handle_login={this.handle_login} />;
        }
        return (
            <div className="App">
                <Nav
                    display_form={this.display_form}
                />
                {form}
                <div style={{ padding: 10 }}>
                    <div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '20px'}}>
                        {this.state.posts.map(post => <Posts key={post.id} post={post} />)}
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
