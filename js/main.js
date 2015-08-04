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
function ageLoop1(arr) {
  return arr.map(function(student){
    return student.age;
  });
}

var howOld = ageLoop1(students);

for (var i = 0; i < howOld.length; i++) {
  console.log(howOld[i]);
}

//or
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

//or

function whereFrom(students, location){
var matchingStudents = [];
  return students.filter(function(student){
    if (student.city === location) {
      matchingStudents.push(student);
      return matchingStudents;
    }
  });
}

var boulderStudents = whereFrom(students, "Boulder");
for (var i = 0; i < boulderStudents.length; i++) {
  console.log(boulderStudents[i].name + " is from Boulder.");
}
console.log(boulderStudents);



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

//or

function older25(students, ageLimit){
var matchingStudents = [];
  return students.filter(function(student){
    if (student.age > ageLimit) {
      matchingStudents.push(student);
      return matchingStudents;
    }
  });
}

var twentyFiveAndUp = older25(students, 25);
for (var i = 0; i < twentyFiveAndUp.length; i++) {
  console.log(twentyFiveAndUp[i].name + " is older than 25.");
}
