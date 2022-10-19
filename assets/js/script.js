// var myCustomObj = {
//     name: 'Abir',
//     age: 21,
//     job: 'student',
//     anotherObj:{
//         name: 'Abir Islam',
//         value: function(msg){
//             console.log(msg +'My name is ' + this.name)
//         }
//     }
// }

// myCustomObj.anotherObj.value.bind(myCustomObj)

// var anydesk = myCustomObj.anotherObj.value.bind(myCustomObj)
// anydesk('Hello! ')

// var myCustomObj = {
//     name : 'Abir Islam Anupom',
//     age : 21,
//     timer : function(){
//         setTimeout(function(){
//             console.log('My name is ' + this.name)
//         }.bind(myCustomObj), 3000)
//     }
// }

// myCustomObj.timer()


// var a = 10, b = 20
// console.log('Before swap: value of a: ' + a + ' and value of b: ' + b )

// function swap(a, b){
//     console.log('Before swap inside function : value of a: ' + a + ' and value of b: ' + b);
//     var temp = a
//     a = b
//     b = temp
//     console.log('After swap inside Function: value of a: ' + a + ' and value of b: ' + b)
// }                            

// swap(a, b);
// console.log('After swap: Value of a: ' + a + ' and value of b: ' + b);



// var a = 10, b = 20
// console.log('Before swap: value of a: ' + a + ' and value fo b: ' + b)

// function swap(a, b){
//     console.log('Before swap inside function : value of a: ' + a + ' and value of b: ' + b)
//     var temp = a
//     a = b
//     b = temp
//     console.log('After swap value of a: ' + a + ' and value of b: ' + b)
// }

// swap(a, b)

// console.log('After swap: value of a: ' + a + ' and value of b: ' + b)

// =====

// var mObj = {
//     a : 10,
//     b : 20
// }

// console.log('Before swap the value of a: ' + mObj.a + ' and value of b: ' + mObj.b)

// function swap(x){
//     console.log('Before swap inside function value of a: ' + x.a + ' and value of b: ' + x.b)

//     var temp = x.a

//     x.a = x.b
//     x.b = temp

//     console.log('After swap inside function value of a: ' + x.a + ' and value of b: ' + x.b)
// }

// swap(mObj)

// console.log('After swap outside function value of a: '+ mObj.a + ' and value of b: ' + mObj.b) 
// console.log(mObj)
