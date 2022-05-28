function addAndRemoveElements(arr) {
    let cnt = 1;
    const newArr = [];
    arr.forEach(el => {
        if (el == "add") {
            newArr.push(cnt);
        } else {
            newArr.pop();
        }
        cnt++;
    });

    if (newArr.length) {
        newArr.forEach(el => console.log(el));
    } else {
        console.log("Empty");
    }
    
}

addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);