// Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
// Output: (examples)
// 1) input a = 1, then output : 1
// 2) input a = 2, then output : 1
// 3) input a = 3, then output : 1, 3, 5
// 4) input a = 4, then output : 1, 3, 5
// 5) input a = 5, then output : 1, 3, 5, 7, 9
// 6) input a = 6, then output : 1, 3, 5, 7, 9
// .
// .
// 7) input a = x, then output : 1, 3, 5, 7, .......

function oddNumbers(r) {
    let arr = [];
    l=0;10
    while (l <= r) {
        arr.push(l);
        l += 1;
    };
    return arr.filter(n => n % 2);
}
let inputVal = (prompt("enter the number"))
document.write(`<h1> your input value is : ${inputVal} <br></h1> `);
document.write(`<h1>your output value is : ${oddNumbers(inputVal)}</h1>`)