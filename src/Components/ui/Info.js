import React from 'react';
import {MODE_NONE} from '../../services/mode' ;
import {INFO_SHORTCUT_KEYS, INFO_CANCEL_SHORT_KEY} from '../../assests/text/en_US';

export default function  Info (props){
const message = props.mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORT_KEY;   

return <p className="info">{message}</p>

}