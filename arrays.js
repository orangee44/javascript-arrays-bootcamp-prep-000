var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]


function addElementToBeginningOfArray(array, element) {
  return [element, 
  ...array];
}



function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  return chocolateBars.unshift(element);
}

  