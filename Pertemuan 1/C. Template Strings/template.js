let fname = 'Christian';
let lname = 'Ronaldo';
let age = prompt("Masukkan Umur Christian Ronaldo!");

// Cara Lama
// let result = fname + ' ' + lname + 'is' + age + 'years old';
// alert(result);

//Memakai Template Strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);