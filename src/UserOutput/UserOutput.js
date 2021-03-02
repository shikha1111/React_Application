import React from 'react';

import "./UserOutput.css";

const userOutput = (props) =>{
  return(
    <div className='UserOutput'>
        <p>Hye People!!</p>
        <p>{props.username}</p>
    </div>
  )
};

export default userOutput;