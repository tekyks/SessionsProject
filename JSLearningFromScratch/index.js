//to print something
//console.log('This is JS Training');

//this is single line comment

/*
This is multile line comment1
This is multile line comment2
This is multile line comment3
This is multile line comment4
*/

//variables - let, const, var
//primitive value types - string, number, boolean, undefined

// let x = 'Krishna';
// console.log(x);
// console.log(typeof x);

// let x = 2;
// console.log(x);
// console.log(typeof x);

// x = 5;
// console.log(x);

// x = 'SAPUI5';
// console.log(x);
// console.log(typeof x);

// let x = 2.5;
// console.log(x);
// console.log(typeof x);

// let x = true; //boolean = true or false
// console.log(x);
// console.log(typeof x);

// let x;
// console.log(x);
// console.log(typeof x);

// x = 5;
// console.log(x);
// console.log(typeof x);

// x = undefined; //usually we should never use undefined un our program
// console.log(x);
// console.log(typeof x);

// x = null; //null not equal to undefined
// console.log(x);
// console.log(typeof x);

// let x = 10;
// let y;
// console.log(2 * x);
// y = 5;
// console.log(x + y);
// x++; //x = x+1
// console.log(x);
// y = y + 1;
// console.log(y);
// ++y;
// console.log(y);

// let string1 = 'SAPUI5';
// let string2 = 'Fiori';
// console.log(string1 + string2);
// let number1 = 5;

// console.log(string1 + ' ' + string2 + '-' + 5);
// console.log('I like ' + string1 + ' and ' + string2);
// console.log(`I like ${string1} and ${string2}`);

//Reference type- Arrays, Objects and Functions
// let x = [1, 2, 3, 4];
// console.log(x);
// console.log(x[0]);
// console.log(x[3]);

// let x = [1, 2.4, 'SAPUI5', true];
// console.log(x);
// console.log(x[0]);
// console.log(x[3]);

// let x = 4;
// x = 6; //assignment
// x == 6; //comparison operator -- boolean true/false
// x === 6; //comparison operator -- boolean true/false
// console.log(x == 6);
// console.log(x === 8);
// console.log(x == '6'); //here comparison will only happen at data level
// console.log(x === '6'); //here comparison will only happen at data level + type //more strict

//JSON Object  //key:value
// let address = {
//   HouseNo: '456',
//   street: 'Street 333',
//   zipcode: '233322',
//   country: 'IN',
// };

// console.log(address);
// console.log(address.HouseNo);
// console.log(address['HouseNo']);

// let emp = {
//   id: '100',
//   name: 'James',
//   residential: {
//     HouseNo: '456',
//     street: 'Street 333',
//     zipcode: '233322',
//     country: 'IN',
//   },
// };

// console.log(emp.residential);
// console.log(emp.residential.zipcode);
//[] ==> array {} ==> JSON

// let x = 7;
// console.log(typeof x);
// let y = 7;
// console.log(typeof y);
// console.log(x === y);
// let z = '7';
// console.log(typeof z);
// console.log(x == z); //value will be considered
// console.log(x === z); //value + type will be considered

// let obj1 = { a: 1 };
// let obj2 = { a: 1 };
// console.log(typeof obj1);
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

//value type Vs reference type

//Functions

// function additionOf2Numbers(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let sum = additionOf2Numbers(4, 3);
// let sum2 = additionOf2Numbers(67893, 26727828);

// console.log(sum);

//way 1
// function add(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// let result1 = add(4, 6);

// //way2
// let add2 = function (num1, num2) {
//   let result = num1 + num2;
//   return result;
// };
// let result2 = add2(4, 6);

// //way3
// let add3 = (num1, num2) => {
//   let result = num1 + num2;
//   return result;
// };

// //way 4
// let add4 = (num1, num2) => num1 + num2;

//**************************** Logical Part ************************ */

//conditional statement
//if-else statement
// let time = 18;
// if (time < 12) {
//   console.log('Good Morning');
// } else if (time >= 12 && time < 16) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Evening');
// }

//switch or case - done

//loop - for, while, do-while
//for loop

//print name multiple times
// for (let count = 1; count <= 5; count++) {
//   console.log('Arooj');
// }

//print number count till 100
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let str = 'SAPUI5';
// let date = '23-07-2025';

// console.log('I am learning ' + str + ' on ' + date);
// console.log(`I am learning ${str} on ${date}`);

//print a table of 16
// for (let i = 1; i <= 10; i++) {
//   console.log(`16 X ${i} = ` + 16 * i);
// }

// let aData = [5, 8, 'Krishna', 19, 3, 6, 8, 6, 7, 'Arooj', 'James'];
// //console.log(aData.length);

// for (let i = 0; i < aData.length; i++) {
//   console.log(aData[i]);
// }

// let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let length = text.length;
// console.log(length);

// let text = 'Apple, Banana, Kiwi';
// let part = text.slice(7, 13);
// console.log(part);
