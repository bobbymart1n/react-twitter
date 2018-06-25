import React from 'react';
import NavLink from './NavLink';
import Search from './Search';
import Tweet from './Tweet';

function Nav() {
  return(
    <div>
      <NavLink
        home="Home"
        notifactions="Notifactions"
        messages="Messages"
      />
      <Search />
      <Tweet />
      <hr/>
    </div>
  );
}

export default Nav;
