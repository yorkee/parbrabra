var parbrabra = function(input) {

  var inputArray = input.split('');

  var checkerList = [];
  var isLegit = true;

  inputArray.forEach(function(c, i) {
    if (isOpenPbb(c)) {
      checkerList.push(c);
    }
    if (isClosePbb(c) && (checkerList.length > 0)) {
      if (isMatchingPair(checkerList[checkerList.length-1], c)) {
        checkerList.pop();
      } else {
        isLegit = false;
      }
    }
  });
  return (checkerList.length > 0 ? false : isLegit);

  //braces {}, brackets[] and parentheses()
  function isOpenPbb(c) {
    return (c === '{' || c === '[' || c === '(');
  }

  function isClosePbb(c) {
    return (c === '}' || c === ']' || c === ')');
  }

  function isMatchingPair(open, close) {
    return ((open === '{' && close === '}') ||
      (open === '[' && close === ']') ||
      (open === '(' && close === ')'));
  }

  return isLegit;
};