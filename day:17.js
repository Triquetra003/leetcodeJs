
var TimeLimitedCache = function() {
    this.cache={};
    this.keys=0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let res=false;
    if(this.cache.hasOwnProperty(key)){
        clearTimeout(this.cache[key].reset);
        res=true;
    }
    else{
        this.cache[key]={};
        this.keys++;
    }
    this.cache[key].val=value;
    this.cache[key].reset=setTimeout(()=>{
        delete this.cache[key];
        this.keys--;
    },duration);
    return res;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.hasOwnProperty(key) ? this.cache[key].val : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.keys;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
