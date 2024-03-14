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

// 5
function repeat(str = "", n = 2) {
    let result = "";

    for(let i = 0 ; i < n; i++) {
        result += str;
    }

    return result;
}

alert(repeat("str", 4));
alert(repeat("str"));

// 6
let rgb = (r = 0, g = 0, b = 0) => `rgb(${r}, ${g}, ${b})`;

alert(rgb(23,100,134));
alert(rgb());

// 7
let avg = (...args) => args.reduce((a, b) => a + b) / args.length;

alert(avg(1, 2, 3));

// 8
let operation = (m, n, o) => o(m, n);

alert(operation(2, 3, mul)); 
