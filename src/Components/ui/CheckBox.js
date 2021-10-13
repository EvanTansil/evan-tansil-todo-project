import { render } from '@testing-library/react';
import react from 'react';
import React, {Component} from 'react';

class CheckBox extendsComponent{
    constructor(props){
        super(props);
    this.state={
        checked: this.props.checked
    };
    }
handleChange(e){
    const {checked} = e.target;

    this.setState({checked});
this.props.onChange(checked);
}
render(){
    return(
 <React.Fragment>
 <label for="todo-list">Check What You've Accomplished </label>
<input type="checkbox" name="todo-list"checked={this.state.checked} onChange= {this.handleChange.bind(this)}/>
    </React.Fragment>
    );
}
}

export default CheckBox;