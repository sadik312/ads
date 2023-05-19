// Given an array of 'n' elements and a target element 't', find the index of 't' in the array.
// Return -1 if the target element is not found
// E.g. arr = [-5, 2, 10, 5], t=10 -> Should return 10

// Pseudocode
/*
    * Start at first element in array and move towards last
    * At each element, perform a check to see if element is equal to target element
    * If element found, return index of element
    * If NOT found, return -1
*/
function linSearch(arr, target) {
    for(i=0; i<arr.length; i++){
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Driver code
console.log(linSearch([5, 2, 14, 6, 10], 2));