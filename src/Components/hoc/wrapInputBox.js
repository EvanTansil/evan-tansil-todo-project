import KeyCode from 'keycode-js';
import { compose, withState, withHandlers } from 'recompose';

export default compose(
    withState('value', 'setValue', props =>{
        console.log('got props', props);
    return props.value||
    } )
withHandllers({
    handleKeyUp:( {addNew, setValue }) => e =>{
     const text = e.target.value.trim();   

     if( e.KeyCode === KeyCode.KEY_RETURN && text){
     addNew(text);    
    setValue('');
    }
    }
handleChange :({setValue}) => e =>{
    setValue(e.target.value);
} 
})
    );