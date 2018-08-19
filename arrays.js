var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]


function addElementToBeginningOfArray(chocolateBars, element) {
  [element, 
  ...array];
}



function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [];
  array.unshift(element)
}

  