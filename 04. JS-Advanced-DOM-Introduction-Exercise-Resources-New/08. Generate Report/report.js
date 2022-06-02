function generateReport() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let checkedCols = [];
    let checkedVals = {};
    let cnt = 0;
    for (const box of checkboxes){
        if (box.checked) {
            checkedCols.push(cnt);
            checkedVals[cnt] = box.name;
        }
        cnt++;
    }

    const result = [];
    let rows = document.querySelectorAll("tbody tr");
    for (const row of rows){
        let colCount = 0;
        let columns = row.querySelectorAll("td");
        let rowResult = {};
        for (let x = 0; x < columns.length; x++) {
            if (checkedCols.indexOf(x) !== -1) {
                rowResult[checkedVals[x]] = columns[x].textContent;
            }
        }
        result.push(rowResult);
    }

    document.getElementById("output").value = JSON.stringify(result);
}