var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]


function addElementToBeginningOfArray(chocolateBars, element) {
  return [element, 
  ...chocolateBars];
}



function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [];
  array.unshift(element)
}

  