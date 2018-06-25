import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  const profileImage = {
    borderRadius: '50%',
    maxHeight: '100px',
    maxWidth: '80px',
    overflow: 'hidden'
  }
  const image = {
    width: '130%'
  }
  return(
    <div>
      <div style={profileImage}><img style={image} src={props.pic}/></div>
      <div>{props.name}</div>
      <div>{props.text}</div>
    </div>
  );
}



export default Post;
