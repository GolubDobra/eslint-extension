console.log('Correct code for eslint rule:');
const test = 123;
console.log('test: ', test);

const TESTS = 123;
console.log('TESTS: ', TESTS);

const testValue = { 1: 1 };
console.log('testValue: ', testValue);

function func() {
  //code
}
func();

function testFunc() {
  //code
}
testFunc();

console.log('Incorrect code for eslint rule:');
const inсorrectTest = 123;
console.log('inсorrectTest (russian letter "с"): ', inсorrectTest);

const testValueС = { 1: 1 };
console.log('testValueС (russian letter "С"): ', testValueС);

function сfunc() {
  //code
}
сfunc();

function testFuncС() {
  //code
}
testFuncС();
