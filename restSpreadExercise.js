// create a version that used the rest operator and arrow function

const filterOutOdds = (arguments) => arguments.filter(v => v % 2 ===0);


//find the minimun value

const findMin = (...arguments) => Math.min(...arguments);

//write a function that merges two objects

const mergeObjects = (obj1, obj2) => ({...obj1}, {...obj2});

//write  function that accepts an array and additional values that doubles the additional values
//I am assuming that the array will always come first

constdoubleAndReturnArgs = (array, ...arguments) => [...array, ...arguments.map(v => v * 2)];

//remove a random element and return a new array

const removeRandom = stuff => {
    let index = Math.floor(Math.random() * stuff.length);
    return [...stuff.slice(0, index), ...stuff.slice(index + 1)];
};

//returna new array that conbines two arrays

const combine = (array1, array2) => {
    return [...array1, ...array2];
};

//return a new object that has all of the keys and values of the old object and adds a new pair

const addedValue = (object, key, value) => {
    let moreValue = {...object, [key]: value};
    return moreValue;
};

//retruna  new object with a key removed

const downSized = (object, key) => {
    let lostKey = {...object};
    delete lostKey[key]
    return lostKey;
};

// combine two objects and return teh new object

const bigObject = (object1, object2) => {
    return {...object1, ...object2};
};

// make an object with w modefied key and value

const updated = (object, key, value) => {
    let newUpdate = {...object, [key]: value};
    return newUpdate;
};