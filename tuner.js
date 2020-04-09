function tune(arr) {
    if (arr.length !== 6) { throw "Wrong size of frequencies array" }
    const etalon = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    let zip = (el, et) => el.map((x, i) => [x, et[i]]);
    return (zip(arr, etalon).map((pair) => {return analyze(pair[0]/pair[1])}));
}

function analyze(comp) {    
    if (comp === 1) {return "OK"}
    else if (comp === 0) {return "-"}
    else if (0.97 < comp && comp < 1) {return ">•"}
    else if (0 < comp && comp < 0.97) {return ">>•"}
    else if (1 < comp && comp < 1.03) {return "•<"}
    else {return "•<<"}
}
