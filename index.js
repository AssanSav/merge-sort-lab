function findMinAndRemoveSorted(array) {
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; ++i) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function merge(firstArray, secondArray) {
  let sorted = []
  while (firstArray.length != 0 && secondArray.length != 0) { 
    if (firstArray[0] < secondArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstArray))
    }
    else {
      sorted.push(findMinAndRemoveSorted(secondArray))
    }
  }
  return sorted.concat(firstArray).concat(secondArray)
}

function mergeSort(array) {
  let midPoint = array.length / 2
  let firstHalf = array.slice(0, midPoint)
  let secondHalf = array.slice(midPoint, array.length)
  if (array.length < 2) {
    return array
  }
  else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}