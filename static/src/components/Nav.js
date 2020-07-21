import React from 'react';



function Nav(props) {
  const logged_out_nav = (
    <ul>
      <li>login</li>
      <li>signup</li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li>logout</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;