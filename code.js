function binarySearch(list, element) {
    let lowBound = 0; //lowBound is the lower searching bound
    let highBound = list.length - 1; //highBound is the high searching bound
    let middle;
    //console.log("\nList is: "+ list + " and target value is: " + element);
    while(lowBound <= highBound) {

        middle = lowBound + Math.floor((highBound - lowBound) / 2); // Gets the middle of the array
        //console.log("Middle is: " + middle);

        if(list[middle] === element) { //If the middle is the element we are searching for just return
            //console.log("Returning middle");
            return middle;
        }

        if(list[middle] > element){ //If the middle is greater then the element we need to search left
            //console.log("Moving left");
            highBound = middle - 1;
        }

        else {
            //console.log("Moving right");
            lowBound = middle + 1; //If the middle is less then the element we need to search right
        }
    }
    return -1; //return -1 if it cannot be found
}