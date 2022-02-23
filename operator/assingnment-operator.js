// 3. 대입 연산자 (Assignment Operator)
let num1 = 10;
let num2 = 3;

// 3-1) A = B : A = B

// 3-2) A += B : A = A+B
// num1 += num2; //num1(13) = num1(10)+num2(3);

// 3-3) A *= B : A = A*B
// num1 *= num2; //num1(30) = num1(10)*num2(3);

// 3-4) A /= B : A = A/B
// num1 /= num2; //num1(3.3333333333333335) = num1(10)/num2(3);

// 3-5) A %= B : A = A%B
// num1 %= num2; //num1(1) = num1(10)%num2(3);

// console.log(num1);

let str = "<table border='1'>";

str += "<tr>"; // str = str + "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";

// <table>
//    <tr>
//      <td>1</td>
//      <td>2</td>
//      <td>3</td>
//    </tr>
// </table>

document.write(str);
