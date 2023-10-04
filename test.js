// Create an array of objects . Each object will have the following properties:
// 1. topic 2. time_spent. 3. confidence_level
// Create a function: that loops over an object and firstly it will print the index of the current object and then it   prints all the key-value pairs object one by one.
// The number of keys of the object is undefined
// You have to make it dynamic

let array=[
    {time:undefined,
     time_spent:undefined,
     confidence_level:undefined
    },
    {time:undefined,
     time_spent:undefined,
     confidence_level:undefined
    }
 ]

const loopThrough = function(){
    for(let i=0;i<array.length;i++){
       let currObj=i;
       let vals=array[i]
       console.log("Current Object : "+currObj)
       console.log(vals)
    }
};

loopThrough();
