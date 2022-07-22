const arr1 = [
  ['name', 'id', 'rollNo'],
  ['Mike', '1', '12'],
  ['Robert', '2', '14'],
  ['Harry', '3', '16'],
  ['Tom', '4', '18'],
]

const arr2 = [
  ['name', 'id', 'weight', 'height(Feet)'],
  ['Mike', '1', '58', '5'],
  ['Robert', '2', '48', '5.5'],
  ['Harry', '3', '50', '5.2'],
  ['Tom', '4', '55', '5.1'],
]

const arr3 = [
  ['name', 'id', 'age', 'gender'],
  ['Mike', '1', '12', 'M'],
  ['Robert', '2', '14', 'M'],
  ['Harry', '3', '16', 'M'],
  ['Tom', '4', '18', 'M'],
]

/* 
  TODO: 
  
  1) Here, 3 arrays are given with student details.
  Each student different details available in different arrays.
  We need to collect all details of the individual student in an object
  with no duplicacy.

  2) Each array will have multiple nested arrays with value.
  Where each array's first value will always be 
  array of headings (keys of object).

  3) You have to collect details for individual students by matching it's id.
  In each array you can see id is given common.

  For e.g. for student 'Mike' in arr1 is having 3 things
   ['name', 'id', 'rollNo']

  In every array after this (heading or arr[0]) array the sequence of 
  value will be same as per headings.
  so for arr1[1] = ['Mike', '1', '12']
  first is name = mike
  second is id = 1
  third is rollNo = 12

  So it will 
  {
    name: 'Mike',
    id: '1',
    rollNo: '12'
  }
  will same for Robert, Harry and Tom.
  
  Then we need to extract details for each students from arr2.
  From arr2 there are 4 details given.
  ['name', 'id', 'weight', 'height(Feet)']

  So for Mike it would be
  {
    name: 'Mike', 
    id: '1', 
    weight': '58', 
    height(Feet): '5'
  }

  but the old details from arr1 should also be there in object so it will
  {
    name: 'Mike',
    id: '1',
    rollNo: '12'
    weight: '58', 
    height(Feet): '5'
  }

  and after extracting remaining details from arr3
  final result for Mike
  {
    name: "Mike",
    id: "1",
    age: "12",
    gender: "M",
    weight: "58",
    height(Fee): "5",
    rollNo: "12"
  },


  The output should list all student with his details as an array of object.
  The output should match the below given expected output.
*/

// Output:
[
  {
    "name": "Mike",
    "id": "1",
    "age": "12",
    "gender": "M",
    "weight": "58",
    "height(Feet)": "5",
    "rollNo": "12"
  },
  {
    "name": "Robert",
    "id": "2",
    "age": "14",
    "gender": "M",
    "weight": "48",
    "height(Feet)": "5.5",
    "rollNo": "14"
  },
  {
    "name": "Harry",
    "id": "3",
    "age": "16",
    "gender": "M",
    "weight": "50",
    "height(Feet)": "5.2",
    "rollNo": "16"
  },
  {
    "name": "Tom",
    "id": "4",
    "age": "18",
    "gender": "M",
    "weight": "55",
    "height(Feet)": "5.1",
    "rollNo": "18"
  }
]