export default class ItsAPromise {

    constructor(runner){
        this.callbacks = [];

        // can do this to bind this to correct reference
        this._resolve = this._resolve.bind(this);

        runner(this._resolve); // part of the Promise in index.js
    }

    
    _resolve(value){
        if(this.callbacks.length > 0){
            const callback = this.callbacks.shift(); // shift off of the front end
            // callback(value);
            var newValue = callback(value);
            this._resolve(newValue);
        }
    }

    then(callback){
        this.callbacks.push(callback);
        return this; // need to return this to chain
    }


}