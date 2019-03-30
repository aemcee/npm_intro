export function addToDom(message){
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');

    h1.innerText = message; 

    root.append(h1);
}

export function makeElement(type,text){

    const root = document.getElementById('root');

    const ele = document.createElement(type);

    ele.innerText = text; 

    root.append(ele);

}

export default {

    addToDom: addToDom,
    makeElement: makeElement

}