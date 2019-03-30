// import $ from 'jquery'; // import entirety of jquery library
// // web browser cannot read import statment?

// // we need to use webpack to build 

// $('#root').append('<h1>I was added with jQuery</h1>');

import sQeury, { addToDom, makeElement } from './helpers';
import add from './add';

addToDom('Who needs jQuery?');

addToDom(`5 + 8 = ${add(5,8)}`);

makeElement('p','This is a paragraph');

sQeury.makeElement('h2','This is sQuery');