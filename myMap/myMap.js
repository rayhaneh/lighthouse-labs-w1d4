var words = ["ground", "control", "to", "major", "tom"];

words.myFun = function () {
  return
}

function myMap (arr, fcn) {
  var output = []
  arr.forEach(function(element) {
    output.push(fcn(element))
  })
  return output
}

var results = myMap(words, function(word) {
  return word.length;
});


console.log(results)