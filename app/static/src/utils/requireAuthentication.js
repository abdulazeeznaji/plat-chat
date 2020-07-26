import React from 'react';
import { browserHistory as history } from 'react-router';

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
            logged_in: localStorage.getItem('token') ? true : false,

      }
    }

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.state.logged_in) {
        const redirectAfterLogin = this.props.location.pathname;
        history.push(`/login?next=${redirectAfterLogin}`);
      }
    }

    render() {
      return (
        <div>
          {true === true
            ? <Component {...this.props}/>
            : null
          }
        </div>
      );
    }
  }
    return (AuthenticatedComponent);
}