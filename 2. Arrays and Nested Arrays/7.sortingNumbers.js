function sortingNumbers(arr){
    const newArr = [];
    const arrLength = arr.length;
    for (let index = 0; index < arrLength; index++) {
        let next = index % 2 === 0 ? Math.min(...arr) : Math.max(...arr);
        newArr.push(next);
        arr.splice(arr.indexOf(next), 1);
    }
    return newArr;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);