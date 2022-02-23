// 제어문
// 프로그램의 흐름 제어를 도와줌.

// false: 0, "", underfined
// true: 그 외 전부

// 1) 조건문 : 조건의 만족 여부에 따라 코드를 제어.
// 1-1) if 문
//  if(조건문) {
//    자바스크립트 코드
//  }

/*
let num = 10;

if (num < 500) {
  // true
  document.write("hello");
}

if (0) {
  // false
  document.write("hello");
}
*/

// 입력 받은 걸음 수가 10,000 이하면 false(The End), 10,000 이상이면 true (좋은 습관을 지니셨군요!)
// let work = prompt("당신이 하루에 걷는 양은 몇 보인가요?", "0");

// if (work >= 10000) {
//   document.write("좋은 습관을 지니셨군요!");
// } else {
//   document.write("The End");
// }

/*
let userName = prompt("방문자의 이름은?", "");

if (userName) {
  document.write(userName + "님 반갑습니다!");
}
*/

// 1-2) else 문
//  if(조건문) {
//    자바스크립트 코드
//  } else {
//    자바스크립트 코드2
//  }

let result = confirm("정말로 회원을 탈퇴하시겠습니까?");

if (result) {
  document.write("탈퇴 처리되었습니다.");
} else {
  document.write("탈퇴 취소되었습니다.");
}

// 1-3) else if 문
//  if(조건문1) {
//    자바스크립트 코드
//  } else if(조건문2){
//    자바스크립트 코드2
//  }
//  } else if(조건문3){
//    자바스크립트 코드2
//  } else {
//  }

// 1-4) 중첩 if 문
//  if(조건문1) {
//     if(조건문2){
//    자바스크립트 코드
//    }
//  }

// 2) 선택문 : 변수에 일치하는 경우 값에 따라 코드를 제어.
// 2-1) switch
// let 변수 = 초깃값;
// switch(변수) {
// case 값1: 코드1;
// break;
// case 값2: 코드2;
// break;
// case 값3: 코드3;
// break;
// case 값4: 코드4;
// break;
//
// default: 코드5;
//}

// 3) 반복문 : 특정 코드를 여러 번 반복.
// 3-1) while
// let 변수 = 초깃값;
// while(조건식) {
// 자바스크립트 코드;
// 증감식;
//}

// 3-2) do while 문 : 코드를 실행하고 조건식을 검사.
// let 변수 = 초깃값;
//do {
//  자바스크립트 코드;
//  증감식;
//} while(조건식)

// 3-3) for
// for(초깃값; 조건식; 증감식) {
//  자바스크립트 코드;
// }

// 3-4) break 문 : 강제로 반복문 종료.
// for(초깃값; 조건식; 증감식) {
// break; 반복문 강제 종료
// 자바스크립트 코드;
// }

// 3-5) continue 문 : 다음 코드 무시.
// for(초깃값; 조건식; 증감식) {
//  continue;
//  자바스크립트 코드;
// }

// 3-6) 중첩 for문
// for(초깃값; 조건식; 증감식) {
//  for(초깃값; 조건식; 증감식) {
//    자바스크립트 코드;
//  }
// }
