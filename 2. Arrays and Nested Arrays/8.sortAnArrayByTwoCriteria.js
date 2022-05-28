function sortAnArrayByTwoCriteria(arr){
    arr.sort((a,b) => a.localeCompare(b)).sort((a, b) => a.length - b.length).forEach(el => console.log(el));
}

sortAnArrayByTwoCriteria(['test', 
'Deny', 
'omen', 
'Default']);