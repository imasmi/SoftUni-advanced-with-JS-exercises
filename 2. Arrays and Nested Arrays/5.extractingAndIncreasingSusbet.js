function extractingAndIncreasingSusbet(arr){
    let biggest = Number.MIN_SAFE_INTEGER;

    const newArr = arr.filter(el => {
        if (el >= biggest) {
            biggest = el;
            return true;
        }
    });
    return newArr;
}

extractingAndIncreasingSusbet(
    [20, 
    3, 
    2, 
    15,
    6, 
    1]     
);