// add scripts

// $(document).on('ready', function() {
//   console.log('sanity check!');
// });

var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];


//Problem 1
function ageLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.age);
  });
}
ageLoop(students);

//or

for (var i = 0; i < students.length; i++){
  console.log("second solution" + students[i].age);
}


//Problem 2
function nameAndCity(arr) {
  arr.forEach(function(student) {
    console.log(student.name + ", " + student.city);
  });
}
nameAndCity(students);

//or

for (var i = 0; i < students.length; i++) {
  console.log(students[i].name + ", " + students[i].city);
}


//Problem 3
function fromBoulder(arr) {
  arr.forEach(function(student) {
    if (student.city === 'Boulder')
    console.log(student.name + " is from " + student.city);
  });
}
fromBoulder(students);

//or

for (var i = 0; i < students.length; i++) {
  if (students[i].city === 'Boulder'){
  console.log(students[i].name + " is from " + students[i].city);
  }
}


//Problem 4
function olderThan25(arr) {
  arr.forEach(function(student) {
    if (student.age > 25)
    console.log(student.name + " is older than 25.");
  });
}
olderThan25(students);

//or

for (var i = 0; i < students.length; i++) {
  if (students[i].age > 25){
  console.log(students[i].name + " is older than 25.");
  }
}
