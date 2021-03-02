import React from 'react';

const userInput = (props) =>{
    
    const Input = {
         border: '3px solid black'
    };

    return (
        <input type="text" 
        style={Input}
        onChange={props.change}
        value={props.currentName}/>
    )
};

export default userInput;