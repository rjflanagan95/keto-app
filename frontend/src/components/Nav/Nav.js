import React from 'react';
import PropTypes from 'prop-types';

import "./Nav.css";

function Nav(props) {
  const logged_out_nav = (
    <div>
      <div className="nav-item" onClick={() => props.display_form('login')}>login</div>
      <div className="nav-item" onClick={() => props.display_form('signup')}>signup</div>
    </div>
  );

  const logged_in_nav = (
    <div>
      <div className="nav-item" onClick={props.handle_logout}>logout</div>
    </div>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};