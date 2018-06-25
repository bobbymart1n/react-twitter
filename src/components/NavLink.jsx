import React from 'react';
import PropTypes from 'prop-types';

function NavLink(props){
  return(
    <div>
      <ul>
        <li>
          <a href="#">{props.home}</a>
        </li>
        <li>
          <a href="#">{props.notifactions}</a>
        </li>
        <li>
          <a href="#">{props.messages}</a>
        </li>
      </ul>
    </div>
  );
}

NavLink.propTypes = {
  home: PropTypes.string,
  notifactions: PropTypes.string,
  messages: PropTypes.string
}

export default NavLink;
