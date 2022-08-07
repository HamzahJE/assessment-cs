const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



// tinyArray results
// insert 17.959 μs
// append 72.542 μs

// smallArray results
// insert 24.708 μs
// append 59.375 μs

// mediumArray results
// insert 118.5 μs
// append 87.125 μs

// largeArray results
// insert 6.346 ms
// append 408.584 μs

// extraLargeArray results
// insert 767.322 ms
// append 2.310208 ms


// With push() and unshift() we quickly notice that push() scales a lot better than unshift() as apparent from the listed times above. We also notice that the bigger the array that we start with the more divergent the results get. For example, with the extraLargeArray we had a difference of almost 765 ms which is just huge. So the push() method definitely scales better. While with smaller starting arrays the results shift toward the unshift() method.

// Now going to why this is the case. We have to think back to time complexity. Unshift() has a time complexity of O(n) while with push() the time complexity is O(1) which means that as the size of the array gets better (n gets bigger) unshift() has to do more operations. For example, at the end of unshifting the tinyArray we had to change the index of 9 elements to place the final one, on the other hand, when unshifting the extraLargeArray we had to change the index of 99999 elements in order to place the first one. This example explains why push() is why better than unshift() when we scale.

