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