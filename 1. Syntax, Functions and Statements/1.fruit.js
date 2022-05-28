function fruit(...params) {
    let kilos = params[1] / 1000;
    console.log(`I need $${(params[2] * kilos).toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${params[0]}.`);
}

fruit('apple', 1563, 2.35);