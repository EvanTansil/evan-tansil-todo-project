import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props){
const {data, changeStatus} = props;
const handleChange= (checked) => changeStatus(data.id, checked);
const newItem = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
return (
<li className = {newItem}>
<div className="checkbox">
    <label>
    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}
    </label>
</div>
</li>
);
}  