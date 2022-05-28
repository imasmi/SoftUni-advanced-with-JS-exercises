function previousDay(year, month, day) {
    let date = new Date(`${year}-${month}-${day}`);
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    console.log(`${previous.getFullYear()}-${previous.getMonth() + 1}-${previous.getDate()}`);
}

previousDay(2016, 9, 30);