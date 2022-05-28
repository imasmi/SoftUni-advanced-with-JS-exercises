function validityChecker(x1, y1, x2, y2){
    function calculate(a1, b1, a2, b2){
        let result = Math.sqrt(Math.pow(a2 - a1, 2) + Math.pow(b2 - b1, 2));
        console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is ${result % 1 == 0 ? 'valid' : 'invalid'}`);
    }
    calculate(x1, y1, 0, 0);
    calculate(x2, y2, 0, 0);
    calculate(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);