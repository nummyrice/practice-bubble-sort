// [2,4,6,8,1,3,5,7,9]
function bubbleSort(arr) {
let sort = true;
while (sort) {
    // Iterate through the array
    let count = 0;
  arr.forEach(function(ele, index) {
    if (ele > arr[index + 1]) {
      debugger;
      let tmp = ele;
      arr[index] = arr[index + 1];
      arr[index + 1] = tmp;
      debugger;
      count++;

    }


  });
  if (count === 0) {
    sort = false;
  }
}
      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        // console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
    console.log(arr.join(","));

  return arr.join(",");
}

module.exports = bubbleSort;
