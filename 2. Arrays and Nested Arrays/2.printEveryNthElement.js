function printEveryNthElement(arr, elem) {
    let next = 1;
    let newArr = arr.filter((el, index) => {
        if (index + 1 == next) {
            next += elem;
            return el;
        }
    });
    return newArr;
}

printEveryNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6);