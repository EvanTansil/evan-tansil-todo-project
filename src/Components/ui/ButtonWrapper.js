import React from 'react';
import {MODE_NONE, MODE_CREATE, MODE_SEARCH} from '../../services/mode';

export default function ButtonWrapper(props){
const{mode,changeMode} = props;
const isCreateMode = () => mode === MODE_CREATE;
const isSearchMode = () => mode === MODE_SEARCH;

return(
<div>
    <form>
    <button type="submit"
     title = "Add New"
    className ={'button add ' + (isCreateMode() ? 'selected': '' ) }  
onClick = {() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}>
    </button>
<button type="submit" 
 title= "Search"
className ={'button search ' + (isSearchMode() ? 'selected' : '')}  
onClick ={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}>
    </button>
</form>
</div>
);
}
