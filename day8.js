/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(x) {
	return function(x1) {
        return x.reduceRight((x2,x3)=>x3(x2),x1)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
