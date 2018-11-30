const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg){
  if(typeof arg === "string"){
    let result = [];
    if(arg[0] === "#"){
      result.push(document.getElementById(arg.slice(1)));
    }else if(arg[0] === "."){
      let elements = document.querySelectorAll(arg.slice());
      for(let i = 0; i < elements.length; i++){
        result.push(elements[i]);
      }
    } else {
      elements = document.getElementsByTagName(arg);
      for(let i = 0; i < elements.length; i++){
        result.push(elements[i]);
      }
    }
    return new DOMNodeCollection(result);
  }else if (arg instanceof HTMLElement){
    return new DOMNodeCollection([arg]);
  }
}
