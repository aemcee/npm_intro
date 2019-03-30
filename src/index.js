// import $ from 'jquery'; // import entirety of jquery library
// // web browser cannot read import statment?

// // we need to use webpack to build 

// $('#root').append('<h1>I was added with jQuery</h1>');

import sQeury, { addToDom, makeElement } from './helpers';
import add from './add';

addToDom('Who needs jQuery? Not me');

addToDom(`5 + 8 = ${add(5,8)}`);

makeElement('p','This is a paragraph');

sQeury.makeElement('h2','This is sQuery');

var promise = new Promise(function(resolve,reject){

    resolve('Iam done');

});

console.log('this is the promise: ', promise);

promise.then(function(value){
    console.log('this is the result of the promise: ',value);
    return 'im trying to return something now so I am different'
}).then(function(value2){
    console.log('this is the 2nd result of the promise: ',value2);
});