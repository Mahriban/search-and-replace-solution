function myReplace(str, before, after) {
     let newStr;

    if ((before[0] == before[0].toUpperCase()) ===false ){
            newStr= str.replace(before, after);
            return newStr;
    } else if ((before[0] == before[0].toUpperCase()) === true ) {
           let afterUpCase = after.replace(after[0], after[0].toUpperCase())
           newStr = str.replace(before, afterUpCase)
           return newStr;
    }
    return newStr;
}