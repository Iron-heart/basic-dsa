const fibonacciSequence = (n) => {
    const array = [0, 1];

    for (let i = 0; array.length < n; i++) {
        array.push(array[array.length - 1] + array[array.length - 2])
    }


    // Example Solution
    // for (let i = 2; i < n; i++) {
    //     array[i] = array[i - 1] + array[i - 2]
    // }

    return array;
}

module.exports = fibonacciSequence





