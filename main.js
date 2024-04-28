//Task 1: Advanced Array Filtering
function customFilterUnique (array, callback) {
  let filteredArray = [];
  let filteredSet = new Set;

  for (let i = 0; i < array.length; i++) {
    const current = callback(array[i]);

    if (!filteredSet.has(current)){
      filteredArray.push(array[i]);
      filteredSet.add(current);
    }
  }
  
  return filteredArray;
}

const arrayOfObjects = [
  { name: "a", cost: 1 },
  { name: "a", cost: 2  },
  { name: "b", cost: 3  },
  { name: "b", cost: 4  },
  { name: "d", cost: 5  }
];

console.log(customFilterUnique(arrayOfObjects, obj => obj.name));

//Task 2: Array Chunking
function chunkArray (array, chunk) {
  let res = [];

  for (let i = 0; i < array.length; i += chunk) {
    res.push(array.slice(i, i + chunk));
  }

  return res;
}

//Task 3: Array Shuffling
function customShuffle(array) {
  const result = array.slice();

  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

//Task 4: Array Intersection and Union
function getArrayIntersection (array1, array2) {
  let res = [];
  for (element of array1) {
    if (array2.includes(element)) {
      res.push(element);
    }
  }
  return res;
}

function getArrayUnion (array1, array2) {
  let res = [];
  let set = new Set;

  for (element of array1) {
    if (!set.has(element)) {
      set.add(element);
      res.push(element);
    }
  }

  for (element of array2) {
    if (!set.has(element)) {
      set.add(element);
      res.push(element);
    }
  }

  return res;
}

//Task 5: Array Performance Analysis
//Use the measureArrayPerformance function to compare the performance of built-in array methods (map, filter, reduce, etc.) against your custom array manipulation functions.
function measureArrayPerformance (func, array) {
  let start = performance.now();
  func(array);
  let finish = performance.now();
  return (finish - start);
}

function measureArrayPerformance2 (func, callback, array) {
  let start = performance.now();
  func(array,callback);
  let finish = performance.now();
  return (finish - start);
}

const arr = [1, 2, 4, 5, 6, 7];

console.log(measureArrayPerformance2(customFilterUnique, element => element > 2, arr));
console.log(measureArrayPerformance(element => element > 2, arr));