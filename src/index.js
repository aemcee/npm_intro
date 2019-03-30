// import $ from 'jquery'; // import entirety of jquery library
// // web browser cannot read import statment?

// // we need to use webpack to build 

// $('#root').append('<h1>I was added with jQuery</h1>');

import sQuery, { addToDom, makeElement } from './helpers';
import add from './add';
import ItsAPromise from './promise';

addToDom('Who needs jQuery? Not me');

addToDom(`5 + 8 = ${add(5,8)}`);

makeElement('p','This is a paragraph');

sQuery.makeElement('h2','This is sQuery');


function pauseValue(delay, value){
    return function(callback){
        setTimeout(()=> callback(value),delay);
    }

};

var promise = new ItsAPromise(pauseValue(5000, 'It is done'));

// function logValue(value){
//     return function(){
//         console.log(value);
//     }
// }

// promise.then(logValue('It is done'));

promise
.then(value => {
    console.log(value);
    return value;
})
.then(console.log);

// var promise = new Promise(function(resolve, reject){
//     resolve('no really, this is done');
// });

// promise
// .then(function(value){
//     console.log('this is the result of the promise: ', value);
//     return value + ', yes really';
// })
// .then(function(monkey){
//     console.log('this is the 2nd result of the promise: ', monkey);
//     return monkey + ', yes really';
// })
// .catch(function(value){
//     console.log('there was an error, yo: ', value);
//     return value;
// })
// .then(function(monkey){
//     var newPromise = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('rejecting 3rd promise');
//             reject(new Error(monkey));
//         }, 5000);
//     });

//     console.log('this is the 3rd result of the promise: ', monkey);
//     return newPromise;
// })
// .catch(function(value){
//     console.log('there was another error, yo: ', value);
//     return value;
// });