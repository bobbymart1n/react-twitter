import React from 'react';

function Tweet(){
  const buttonStyles = {
    border: "none",
    fontSize: "16px",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "papayawhip"
  }
  return(
    <div>
      <button style={buttonStyles}> TWEET </button>
    </div>
  )
}

export default Tweet;
