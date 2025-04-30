// function datafetch(callback) {
//     setTimeout(() =>{
//         console.log("fetching data");
//         callback(10);
//     },2000);
// }


// function display (x) {
//     console.log("display the data",x);   
// }

// datafetch((valu) =>{
//     console.log('im from datafetch function',valu);
//     display(valu);
// });




function one(callback, valu) {
    setTimeout(() => {
        console.log("one", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function two(callback, valu) {
    setTimeout(() => {
        console.log("two", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function three(callback, valu) {
    setTimeout(() => {
        console.log("three", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function four(callback, valu) {
    setTimeout(() => {
        console.log("four", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function five(callback, valu) {
    setTimeout(() => {
        console.log("five", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function six(callback, valu) {
    setTimeout(() => {
        console.log("six", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function seven(callback, valu) {
    setTimeout(() => {
        console.log("seven", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function eight(callback, valu) {
    setTimeout(() => {
        console.log("eight", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function nine(callback, valu) {
    setTimeout(() => {
        console.log("nine", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function ten(callback, valu) {
    setTimeout(() => {
        console.log("ten", parseInt(valu += 10));  
        callback(parseInt(valu += 10));
    }, 1700);
}

function finished(valu) {
    console.log("🎉 Finished with total:", parseInt(valu += 30));
}



one((v1) => {
    two((v2) => {
        three((v3) => {
            four((v4) => {
                five((v5) => {
                    six((v6) => {
                        seven((v7) => {
                            eight((v8) => {
                                nine((v9) => {
                                    ten((v10) => {
                                        finished(v10);
                                    }, v9);
                                }, v8);
                            }, v7);
                        }, v6);
                    }, v5);
                }, v4);
            }, v3);
        }, v2);
    }, v1);
}, 0);
