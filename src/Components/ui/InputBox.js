import React from 'react';
import enhance from '../hoc/wrapInputBox';

export default function InputBox(props){
const {value, handleChange, handleKeyUp} = props;

return(
    <input autoFocus
type="text"
    className="form-control add-todo "
    value={value}
    onKeyUp={handleKeyUp}
    onChange={handleChange}
    placeholder="add new"
    />
);
}
