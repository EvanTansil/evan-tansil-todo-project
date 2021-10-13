import React from 'react';
import TodoItem from './TodoItem';
import { MSG_NO_ITEMS } from '../../src/assets/text/en_US';

export default function filteredList(props){
const {items, changeStatus}= props;
}
if(items.length === 0){
return(
 <p className="alert alert-info">{MSG_NO_ITEMS}</p> 

 );
return(
<ul className="list-unstyled">
    {items.map(item =>(
        <TodoItem key={item.id  } data={item} changeStatus={changeStatus}/>
    ))}
    </ul>
);
}