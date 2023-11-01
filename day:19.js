/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise(async(res,rej)=>{
        let length=functions.length, ct=0;
        const ans=new Array(length);
        functions.forEach(async(func,i)=>{
            try{
                let val= await func();
                ans[i]=val;
                ct++
                if(ct===length){res(ans)}
            }
            catch(err){
                rej(err);
            }
        })
    });

};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
