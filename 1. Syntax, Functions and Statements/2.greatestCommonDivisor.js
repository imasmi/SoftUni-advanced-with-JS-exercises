function greatestCommonDivisor(number1, number2) {
    let gcd = 0;
    for (let i = 1; i <= number1 && i <= number2; i++) {
        if( number1 % i == 0 && number2 % i == 0) {
            gcd = i;
        }
    }

    console.log(gcd);
}

greatestCommonDivisor(2154, 458);