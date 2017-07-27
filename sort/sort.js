var array = [10, 2, 5, 1, 9];
var result = array.sort(function(a,b){
  console.log(a,b, a-b)
    return a - b
})
console.log(result)
console.log()



var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



var sortedStudents = students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  } else {
    if (a.age < b.age) return 1;
  }
  return 0;
});


console.log(sortedStudents)
