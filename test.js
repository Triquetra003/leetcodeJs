// Create an array of objects . Each object will have the following properties:
// 1. topic 2. time_spent. 3. confidence_level
// Create a function: that loops over an object and firstly it will print the index of the current object and then it   prints all the key-value pairs object one by one.
// The number of keys of the object is undefined
// You have to make it dynamic
// Assume that the object is not nested, can only have datatypes such as string number or Boolean. Function should accept 2 parameters 
//1. The array 2. Property to print ( if not given then print all properties)

let array1=[
    {topic:0,
     time_spent:0,
     confidence_level:0
    },
    {topic:"1",
     time_spent:"1",
     confidence_level:"1"
    }
 ]
 
 let array2=[
    {topic:true,
     time_spent:false,
     confidence_level:true
    },
    {topic:3,
     time_spent:"3",
     confidence_level:false
    }
 ]

const loopThrough = function(arr,prop){
    for (let i=0;i<arr.length;i++) {
       if (prop=='topic') {
        console.log("Value of "+prop+":"+arr[i].topic);
        console.log(arr)
    }
      if (prop=='time_spent') {
        console.log("Value of "+prop+":"+arr[i].time_spent);
        console.log(arr)
    }
    if (prop=='confidence_level') {
        console.log("Value of "+prop+":"+arr[i].confidence_level);
        console.log(arr)
    }
    else if(prop==null){
        console.log(arr)
    }
    }
};

loopThrough(array1);
