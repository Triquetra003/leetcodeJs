/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let call=false
    return function(...args){
        if(!call){
            call=true;
            return fn(...args)
        }
    }
};

//Reference Note
//https://www.geeksforgeeks.org/function-that-can-be-called-only-once-in-javascript/

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
