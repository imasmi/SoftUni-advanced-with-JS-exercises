function sameNumbers(number) {
    const arr = number.toFixed().split("");
    console.log(arr.every(el => el == arr[0]));
    console.log(arr.reduce((a, b) => Number(a) + Number(b), 0));
}

sameNumbers(1234);