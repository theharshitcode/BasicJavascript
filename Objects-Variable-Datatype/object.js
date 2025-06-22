let a = {
    'name': 'John',
    'age': 30,
    'isStudent': false,
    'courses': ['Math', 'Science', 'History'],
    'address': {
        'street': '123 Main St'},

}

console.log(a); // Output: { name: 'John', age: 30, isStudent: false, courses: [ 'Math', 'Science', 'History' ], address: { street: '123 Main St' } }
console.log(a.name); // Output: John
console.log(a.age); // Output: 30

//updation
a.age = 31;
console.log(a.age); // Output: 31
