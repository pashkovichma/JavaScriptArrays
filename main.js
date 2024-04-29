//Task 1: Advanced Array Filtering
function customFilterUnique (array, callback) {
  let filteredArray = [];
  let arrayAfterCallback = [];

  array.forEach ( item => {
    arrayAfterCallback.push(callback(item));
  })

  for (let i = 0; i < array.length; i++) {
    if (arrayAfterCallback.indexOf(arrayAfterCallback[i]) === arrayAfterCallback.lastIndexOf(arrayAfterCallback[i])) {
      filteredArray.push(array[i]);
    }
  }
  
  return filteredArray;
}

const arr1 = [
  { id: 1, name: 'test' },
  { id: 2, name: 'foo' },
  { id: 3, boo: 3 },
  { id: 2, isAdmin: false },
];
const arr2 = [1, 2, 'a', 'b', 2, 'b', 3];

console.log(customFilterUnique(arr1, el => el.id));
console.log(customFilterUnique(arr2, el => el));

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