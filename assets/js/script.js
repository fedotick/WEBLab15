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

// 4
function kvadrat(x) {
    return Math.pow(x, 2);
}

function kub(x) {
    return Math.pow(x, 3);
}

let calc = (x, kvadrat, kub) => kvadrat(x) + kub(x);

alert(calc(2, kvadrat, kub));
