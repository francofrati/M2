var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
   if(matchFunc(startEl)){resultSet.push(startEl)}
   if(startEl.children.length){
     for(let i = 0 ; i<startEl.children.length ; i++){
       resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc,startEl.children[i]))
     }
   }
   return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
if(selector[0]==='#'){return 'id'}
else if(!(selector.split('').includes('.'))&&!(selector.split('').includes('#'))){return 'tag'}
else if(selector[0]==='.'){return 'class'}
else if(selector[0]!='.' && selector.split('').includes('.')){return 'tag.class'}
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(element){
      selector = selector.split('#').join('');
      if(element.id === selector){
        return true}
      else{return false}
    }   
  } else if (selectorType === "class") {
    matchFunction = function(element){
      selector = selector.split('.').join('');
      if(element.className.split(' ').includes(selector)){
        return true}
      else{return false}
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(element){
    let [a, b] = selector.split('.');
      if(element.tagName === a.toUpperCase() && element.className.split(' ').includes(b)){
        return true}
      else{return false}
    }
  
  } else if (selectorType === "tag") {
    matchFunction = function(element){
      if(element.tagName === selector.toUpperCase()){
        return true}
      else{return false}
    }
  }
  
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
