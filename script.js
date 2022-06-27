const array = [];
for (let index = 0; index < 1000000; index++) {
    array[index] = index;
}

testFor();
console.log('-------------');

testReduce();
console.log('-------------');

testForeach();
console.log('-------------');

testMap();

// for loop
function testFor() {
    console.time('for sum');

    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }

    console.timeEnd('for sum');

    const newArray = [];
    console.time('for array');

    for (let index = 0; index < array.length; index++) {
        newArray.push(array[index]);
    }

    console.timeEnd('for array');
    console.log(`for: check sum - ${sum === getSum(newArray)}`);
}

// reduce
function testReduce() {
    console.time('reduce sum');
    let sum = array.reduce((prev, current) => prev + current);
    console.timeEnd('reduce sum');
    
    console.time('reduce array');
    const newArray = array.reduce(
        (prev, current) => {
            prev.push(current);
            return prev;
        }, 
        []
    );
    console.timeEnd('reduce array');
    
    console.log(`reduce: check sum - ${sum === getSum(newArray)}`);
}

// foreach
function testForeach() {
    console.time('forEach sum');
    let sum = 0;
    array.forEach((item) => sum += item);
    console.timeEnd('forEach sum');

    const newArray = [];
    console.time('forEach array');
    array.forEach((item) => newArray.push(item));
    console.timeEnd('forEach array');

    console.log(`forEach: check sum - ${sum === getSum(newArray)}`);
}

// map
function testMap() {
    console.time('map sum');

    let sum = 0;
    array.map((item) => sum += item);

    console.timeEnd('map sum');
    
    const newArray = [];
    console.time('map array');
    array.map((item) => newArray.push(item));
    console.timeEnd('map array');

    console.log(`map: check sum - ${sum === getSum(newArray)}`);
}

function getSum(array) {
    return array.reduce((prev, current) => prev + current);
}