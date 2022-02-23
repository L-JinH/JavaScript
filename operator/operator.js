// 4. 증감 연산자 (Increment and decrement Operator)
// Valable++;, ++Valable;, Valable--;, --Valable;

let num1 = 10;
let num2 = 20;

let result;

num1--;
document.write(num1, "<br>"); // 9

num1++; // 9+1
document.write(num1, "<br>"); // 10

result = num2++;
document.write(result, "<br>"); // result = 20, num2 = 21

result = ++num2;
document.write(result, "<br>"); // result = 22, num2 = 22

// 5. 비교 연산자 (Comparison Operator)
// A > B
// A < B
// A >= B
// A <= B
// A == B, A === B(자료형도 비교) : 같다
// A != B, A !== B(자료형도 비교) : A와 B는 다르다.

let a = 10;
let b = 20;
let c = 10;
let f = 20;

let result1;

result1 = a > b; // 10 > 20 = false
document.write(result1, "<br>");

result1 = a < b; // 10 < 20 = true
document.write(result1, "<br>");

result1 = a <= b; // 10 <= 20 = true
document.write(result1, "<br>");

result1 = b == f; // 20 == 20 = true
document.write(result1, "<br>");

result1 = b === f; // 20 === 20 = true
document.write(result1, "<br>");

// 5. 논리 연산자 (Logical Operator)
// || : or 하나라도 true면 true.
// && : and 하나라도 false면 false.
// ! : not Operator, 결과의 반대값 출력.

let aa = 10;
let bb = 20;
let m = 30;
let n = 40;

let result2;

result2 = aa > bb || bb >= m || m > n; // false || false || false
document.write(result2, "<br>"); // = false

result2 = aa > bb || bb >= m || m <= n; // false || false || true
document.write(result2, "<br>"); // = true

result2 = aa <= bb && bb >= m && m <= n; // true && false && true
document.write(result2, "<br>"); // = false

result2 = aa <= bb && bb <= m && m <= n; // true && true && true
document.write(result2, "<br>"); // = true

result2 = !(a > b); // !false를 계산
document.write(result, "<br>"); // true

// 연산자 우선순위
// 1. ()
// 2. 딘힝 연산자 ( --, ++, ! )
// 3. 산술 연산자 ( *, /, %. +, - )
// 4. 비교 연산자 ( >, >=, <, <=, ==, ===, !==, !=)
// 5. 논리 연산자 ( &&, || )
// 6. 대입(복합 대입) ( =, +=, -+, *=, /=, %= )

// 6. 삼항 조건 연산자 (Ternary Operator)
// 조건식 ? 코드 1 : 코드 2

// true = 코드 1
// false = 코드 2

let aaa = 10;
let bbb = 3;

let result3 = aaa > bbb ? "javascript" : "hello";

document.write(result3);
// (+) prompt() : 사용자로부터 입력된 값은 문자형 데이터로 반환.
