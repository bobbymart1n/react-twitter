import React from 'react';
import Feed from './Feed';
import Profile from './Profile';

function Body(){
  var mainGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))"
  }
  return(
    <div style={mainGrid}>
      <Profile />
      <Feed />
    </div>
  )
}

export default Body;
