class DOMNodeCollection {
  constructor(HTMLElements){ //
    this.HTMLElements = HTMLElements;
  }
  
  html(str){
    if(str){
      this.HTMLElements.forEach(element=> {
        element.innerHTML = str;
      });
    } else {
      return this.HTMLElements[0].innerHTML;
    }
  }
  
  empty(){
    this.HTMLElements.forEach(element => {
      element.innerHTML = "";
    });
  }
  
  append(arg){
    if (arg instanceof HTMLElement){
          this.HTMLElements.forEach(el => el.appendChild(arg));
    } else if (arg.constructor === String){
      this.HTMLElements.forEach(el => {
        el.innerHTML += arg;
      });
    } else if (arg.constructor === DOMNodeCollection){
      arg.forEach(argElement => {
        this.HTMLElements.forEach(el => { el.appendChild(argElement); });
      });
    }
  }
  
  forEach(cb){
    this.HTMLElements.forEach(el => cb(el));
  }
  
  attr(attribute, setter){
    if(attribute === "checked"){
      this.HTMLElements.forEach(el => el.checked = !el.checked );
    }
    if(setter){
      
    } else if (attribute){
      
    } else {
      let attributes = {};
      this.HTMLElements.forEach(el => {
        for(let i = 0; el[i] !== undefined; i++){
            if(attributes[el[i]] !== undefined){
              attributes[el[i]] = el[i].value;
            }
        }
      });
      return attributes;
    }
  }
  
  addClass(){
    
  }
  
  removeClass(){
    
  }
  
}

module.exports = DOMNodeCollection;