import React from 'react';
import Post from './Post';

function Feed(){

  var container = {
    border: "2px solid black",
    display: "grid",
    margin: "1em",
  }
  const posts = [
    {
      pic: 'https://thumbs.gfycat.com/BigheartedBrightGoral-max-1mb.gif',
      name: 'Lorem Face',
      text: 'This is some edgy post that makes you mad'
    },
    {
      pic: 'https://thumbs.gfycat.com/BigheartedBrightGoral-max-1mb.gif',
      name: 'Burt Macklin',
      text: 'This is some edgy post that makes you mad'
    },
    {
      pic: 'https://thumbs.gfycat.com/BigheartedBrightGoral-max-1mb.gif',
      name: 'Snorkjuice',
      text: 'This is some edgy post that makes you md'
    }
  ];
  return(
    <div style={container}>
      <h3> Feed </h3>
      {
        posts.map((post, index) =>
        <Post pic={post.pic}
              name={post.name}
              text={post.text}
              key={index}/>
      )
      }
    </div>
  );
}

export default Feed;
