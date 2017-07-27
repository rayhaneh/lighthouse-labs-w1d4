 // The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(currentVal,index) {
    if (currentVal === "Waldo") {
      found(index)
    }
  })
}
