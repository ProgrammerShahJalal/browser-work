console.log('aaaaa');
/* setInterval(() => {
    console.log('interval');
}, 3000); */

let second = 0;
const timeId = setInterval(() => {
    // second++;
    /* console.log(second++); */
    console.log(++second);
    if (second > 10) {
        clearInterval(timeId);
    }
}, 1000);
console.log('dddddd');