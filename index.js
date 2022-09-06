function superbowlWin(record) {
    let found = record.find( value => value.result === "W")
      
    if (found) {
        return found.year;
    }
}