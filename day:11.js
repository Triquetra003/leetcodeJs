/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
 
    const memorize={}
    return function(...args) {

        if(args in memorize){
            return memorize[args];
        }

        memorize[args]=fn(...args);
        return memorize[args]
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
