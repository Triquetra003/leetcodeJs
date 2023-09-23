/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe:
        (param1)=>{
           if(param1===val){return true}
           else{throw new Error('Not Equal')
           }
        },
        notToBe:
        (param2)=>{
            if(param2!==val){return true}
            else{throw new Error('Equal')
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
