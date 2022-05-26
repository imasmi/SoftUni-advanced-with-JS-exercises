function cookingByNumbers(...params) {
    let current = Number(params[0]);
    for (let i = 1; i <= 5; i++) {
        switch (params[i]){
            case "chop":
                current /= 2;
            break;
            case "dice":
                current = Math.sqrt(current);
            break;
            case "spice":
                current = ++current;
            break;
            case "bake":
                current *= 3;
            break;
            case "fillet":
                current = (current * 80) / 100;
            break;
        }
        console.log(current);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');