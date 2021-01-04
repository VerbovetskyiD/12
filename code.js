//задание 1
const sum = (i = 0) => (j) => i += j;

//проверка
const out = sum();
console.log(out(3));
console.log(out(5));
console.log(out(20));


//задание 2
function createCounter(initCount = 0, step = 1) {
    let count = initCount - step;
    function counter() {
        return count += step;
    }
    counter.reset = function() {
        count = initCount - step;
    }
    return counter;
}
//проверка
const counter = createCounter(5, 2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
counter.reset();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());