// Variable: let VariableName
// Data를 저장할 수 있는 메모리 공간

//Data type
//String, Number, Boolean, Null & undefined
// 1) String : 'String', "String", let tag = <h1> String </h1>
// 2) Number : let num = 0;, Number("String type number");
// 3) Boolean : true or false(= 0, null, undefined, " "), boolean(Data);
// 4-1) Null : 의도 없는 기본 값.
// 4-2) undefined : 의도한 빈 값.

// typeof : 저장된 자료형을 알고 싶을 때 사용.
// typeof Variable or Data

let stringName = "String";
let numberName = 0;
let booleanName = true;
let nullName = null;
let undefinedName = undefined;

console.log(typeof stringName);
//string

console.log(typeof numberName);
//number

console.log(typeof booleanName);
//boolean

console.log(typeof nullName);
// object(버그)

// typeof의 구현 항목에 null 누락.
// 많은 사이트가 typeof를 사용해서 버그 수정 불가능.
// 대신 일치 연산사 ===를 사용.
console.log(nullName === null);
//true

console.log(typeof undefinedName);
//undefined

// Variable Declare (변수 선언)
// 1. Variable Name 첫글자로 $, _, 영문자만 사용 가능.
// 2. 그 다음은 $, _, 영문자, 숫자만 사용 가능.
// 3. 사용 중인 단어는 불가능.
// 4. 의미를 부여해서 작성.
// 5. 대문자, 소문자 구분.
