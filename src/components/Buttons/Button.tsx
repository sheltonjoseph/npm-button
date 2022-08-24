import React from 'react';
import './Button.css'

interface ButtonProps {
    label : string;
   handleClick : ()=> void;
   kind :string;
}


// const handleClick = () =>{
// console.log("button is click")
// }
const Button = (props:ButtonProps) =>{
    return<button  className={props.kind} onClick={props.handleClick}>{props.label}</button>
};

export default Button;