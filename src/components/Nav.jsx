import React from 'react';
import NavLink from './NavLink';
import Search from './Search';
import Tweet from './Tweet';

function Nav() {
  return(
    <div className="navbar">
      <NavLink
        home="Home"
        notifactions="Notifactions"
        messages="Messages"
      />
      <div className="search-tweet">
        <Search />
        <Tweet />
      </div>
    </div>
  );
}

export default Nav;
