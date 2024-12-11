function main() {
    let x = 2, y = 8;

    let st;
    if (x < y) {
        st = "x is less than y";
    }
    console.log(st);
}
if (require.main === module) {
    main();
}

let x = 0;
while (x < 4) {
    console.log(x);
    x = x + 1;
}

let Months = ["Jan", "Feb", "Mar", "April", "May", "June"];
for (let i = 0; i < Months.length; i++) {
    console.log(i, Months[i]);
}

for (let i of '1234') {
    console.log("Raji");
}

let Dict = {'Tim': 18, 'Charlie': 12, 'Tiffany': 22, 'Robert': 25};
let Boys = {'Tim': 18, 'Charlie': 12, 'Robert': 25};
let Girls = {'Tiffany': 22};
let studentX = {...Boys};
let studentY = {...Girls};
console.log(studentX);
console.log(studentY);

Dict["Sarah"] = 9;
console.log(Dict);

let Students = Object.keys(Dict);
Students.sort();
for (let S of Students) {
    console.log(S + ":" + Dict[S].toString());
}

let a = true;
let b = false;
console.log(('a and b is', a && b));
console.log(('a or b is', a || b));
console.log(('not a is', !a));

let x = 4;
let y = 8;
let list = [1, 2, 3, 4, 5];
if (list.includes(x)) {
    console.log("Line 1 - x is available in the given list");
} else {
    console.log("Line 1 - x is not available in the given list");
}
if (!list.includes(y)) {
    console.log("Line 2 - y is not available in the given list");
} else {
    console.log("Line 2 - y is available in the given list");
}

let balance = [300, 200, 100];
balance.splice(2, 0, 150);
console.log(balance);

let first = [2, 3, 4];
first.splice(first.indexOf(3), 1);
console.log(first);

let number = [2, 3, 4, 5, 6];
console.log(number.indexOf(3));

number = [1, 2, 3];
number.reverse();
console.log(number);

