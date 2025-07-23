// let a < b --> a is smaller than b
// let x > y --> x is bigger than y

//way 1
let salary = 30000;

if (salary < 25000) {
  console.log('Low Salary');
} else {
  console.log('High Salary');
}

//way2 //terniary operator --> (statemet) ? (statement is true) : (if statement is false)
salary < 25000 ? console.log('Low Salary') : console.log('High Salary');
