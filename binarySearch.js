// should take in an ordered array and search for a value within it

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

// test cases

// if the target is in the middle of the array
console.log(binarySearch([1, 2, 3, 4, 5], 3));

// if the target is in another random index within the array
console.log(binarySearch([12, 15, 18, 24, 56, 70, 74, 80, 99], 80));

// if the target is not in the array
console.log(binarySearch([22, 23, 25, 30, 45, 50], 19));

