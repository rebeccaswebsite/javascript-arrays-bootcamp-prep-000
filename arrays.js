var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'] ;
var newCandy = "foo";
 
function addElementToBeginningOfArray(chocolateBars, newCandy){
  return [newCandy, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, newCandy){
  chocolateBars.unshift(newCandy);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, newCandy){
  return [...chocolateBars, newCandy];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, newCandy){
  chocolateBars.push(newCandy);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, newCandy){
  chocolateBars.shift(newCandy);
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(3);
  return chocolateBars;
}