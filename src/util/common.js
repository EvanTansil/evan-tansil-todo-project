import react from 'react';
import React from 'react';

export function objectWithOnly(object, attrs){
    let newObject = {};

attrs.forEach(attr => {
    newObject[attr] = object[attr].bind(object); 
});

return newObject;
}

export function wrapChildrenWith(children, props){
return react.children.map(children, child =>react.cloneElement(child, props));
}

export function  stringIncludes(str,substr){
return  str.indexOf(substr) !== -1; 
}