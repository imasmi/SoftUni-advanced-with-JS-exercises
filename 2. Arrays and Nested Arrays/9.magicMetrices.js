function magicMetrices(matrix){
    let isMagical = true;
    for (let index = 0; index < matrix.length - 1; index++) {
        let sumRowOne = matrix[index].reduce((a ,b) => a + b, 0);
        let sumRowTwo= matrix[index + 1].reduce((a ,b) => a + b, 0);
        let sumColOne = 0;
        let sumColTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumColOne += matrix[index][j];
            sumColTwo += matrix[index + 1][j];
        }
        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            isMagical = false;
        }
    }
    return isMagical;
}

magicMetrices([[1, 0, 0],
    [0, 0, 1],
    [0, 0, 1]]);