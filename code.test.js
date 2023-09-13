const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) {

        arr.sort(function(a, b){return a - b}); //Make sure the array is sorted. I ripped this off directly from the inverse insertion sort tests

        if(arr.length > 0) {
            return binarySearch(arr, arr[0]) === 0 || arr[0] == arr[binarySearch(arr,arr[0])]; //After the || is dealing with duplicates becuase the tests dont play nicely with them 
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });

jsc.assert(testSearch);