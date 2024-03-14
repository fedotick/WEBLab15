// 1
function hello1() {
    return "Привет, JavaScript!";
}

alert(hello1());

// 2
let hello2 = function (name = "гость") {
    return `Привет, ${name}`;
};

alert(hello2("Василий"));
alert(hello2());

// 3
let mul = (n, m) => n * m;

alert(mul(2, 3));
