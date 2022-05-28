function rotateElements(arr, num){
    function rotate(arr){
        arr.unshift(arr.pop());
        return arr;
    }
    
    for (let i = 0; i < num; i++) {
        rotate(arr);
    }
    console.log(arr.join(" "));
}

rotateElements(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);