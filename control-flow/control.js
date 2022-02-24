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

/*
let result = confirm("정말로 회원을 탈퇴하시겠습니까?");

if (result) {
  document.write("탈퇴 처리되었습니다.");
} else {
  document.write("탈퇴 취소되었습니다.");
}
*/

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

/*
let mon = prompt("현재는 몇 월입니까?", "0");

if (mon >= 9 && mon <= 11) {
  // 9~11
  document.write("독서의 계절 가을이네요!");
} else if (mon >= 6 && mon <= 8) {
  // 6~8
  document.write("여행가기 좋은 여름이네요!");
} else if (mon >= 3 && mon <= 5) {
  // 3~5
  document.write("햇살 가득한 봄이네요!");
} else {
  // 나머지
  document.write("스키의 계절 겨울이네요!");
}
*/

// 1-4) 중첩 if 문
//  if(조건문1) {
//     if(조건문2){
//    자바스크립트 코드
//    }
//  }

/*
let id = "easy1004";
let pw = "112233";

let user_id = prompt("아이디는?", "");
let user_pw = prompt("비밀번호는?", "");

if (id === user_id) {
  if (pw == user_pw) {
    document.write(user_id + "님 반갑습니다.");
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    location.reload(); //브라우저 새로고침.
  }
} else {
  alert("아이디가 일치하지 않습니다.");
}
*/

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

/*
let site = prompt(
  "네이버, 다음, 네이트, 구글 중 즐겨 사용하는 포털 검색 사이트는?",
  ""
);
// 문자열 데이터는 줄을 바꾸면 오류 발생. But \와 함께 코드를 작성하면 문자열의 줄을 바꿔도 오류가 생기지 않는다.
let url;

switch (site) {
  case "구글":
    url = "www.google.com";
    break;

  case "다음":
    url = "www.daum.net";
    break;

  case "네이버":
    url = "www.naver.com";
    break;

  case "네이트":
    url = "www.nate.com";
    break;

  default:
    alert("보기 중에 없는 사이트입니다.");
}

if (url) location.href = "http://" + url; // 지정된 주소로 이동.
*/

// 3) 반복문 : 특정 코드를 여러 번 반복.
// 3-1) while
// let 변수 = 초깃값;
// while(조건식) {
// 자바스크립트 코드;
// 증감식;
//}

/*
let i = 1;

while (i <= 10) {
  document.write("안녕하세요" + i, "<br/>");
  i++;
}

document.write("===The End===");


let i = 1;
while (i <= 30) {
  if (i % 2 == 0 && i % 6 == 0) {
    document.write(i, "<br/>");
  }
  i++;
}
*/

// 3-2) do while 문 : 코드를 실행하고 조건식을 검사.
// let 변수 = 초깃값;
//do {
//  자바스크립트 코드;
//  증감식;
//} while(조건식)

/*
let i = 10;
do {
  document.write("hello!");
} while (i < 3);
*/

// 3-3) for
// for(초깃값; 조건식; 증감식) {
//  자바스크립트 코드;
// }

/*
for (let i = 1; i <= 10; i++) {
  document.write("반복" + i, "<br>");
}
*/

// 3-4) break 문 : 강제로 반복문 종료.
// for(초깃값; 조건식; 증감식) {
// break; 반복문 강제 종료
// 자바스크립트 코드;
// }

/*
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
  document.write(i, "<br>");
}

document.write("===The End===");
*/

// 3-5) continue 문 : 다음 코드 무시.
// for(초깃값; 조건식; 증감식) {
//  continue;
//  자바스크립트 코드;
// }

/*
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) continue;
  document.write(i, "<br>");
}

document.write("===The End===");
*/

// 3-6) 중첩 for문
// for(초깃값; 조건식; 증감식) {
//  for(초깃값; 조건식; 증감식) {
//    자바스크립트 코드;
//  }
// }

for (let i = 1; i <= 3; i++) {
  for (let k = 1; k <= 2; k++) {
    document.write(i + "행" + k + "열", "<br>");
  }
  document.write("<br>");
}
