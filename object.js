// 객체 : 기능과 속성을 가진 주변의 모든 사물.
// 객체, 메소드();
// 객체.속성; or 객체.속성=값;

// 종류
// 1) 내장 객체 : 문자(String), 날짜(Date), 배열(Array), 수학(Math)
// 1-1) 내장 객체 생성
//  참조 변수(인스턴스 이름) = new 생성 함수()

// 1-2) 날짜 메소드
// *날짜 정보를 가져올 때. - get
// getFullYear():연도, getMonth():월(달), getDate():일, getDay():요일
// getHours(): 시간, getMinutes(): 분, getSeconds(): 초, getMillisecinds(): 밀리초
// getTime(): 1970년 1월 1일부터 경과된 시간을 밀리초로 표기.
// toGMTString(): GMT 표준 표기 방식으로 문자형 데이터 반환.

// *날짜 정보를 수정할 때. - set
// setFullYear(): 연도 수정, setMonth(): 월(달) 수정, setDate():일 수정
// '요일'은 자동으로 변경. - setDay()는 없음.
// setHours(): 시 수정, setMinutes(): 분 수정, setSeconds(): 초 수정, setMillisecinds(): 밀리초 수정
// setTime(): 1970년 1월 1일부터 경과된 시간을 밀리초 수정.
// toLocaleString(): 운영 시스템 표기 방식으로 문자형 데이터로 반환.

// 1-3) 수학 객체 메소드
// Math.abs(숫자): 절댓값 반환.
// Math.max(숫자1, 숫자2, 숫자3, 숫자4): 가장 큰 값 반환.
// Math.min(숫자1, 숫자2, 숫자3, 숫자4): 가장 작은 값 반환.
// Math.pow(숫자, 제곱값): 거듭제곱값 반환
// Math.random(): 0~1 사이 난수 반환
// Math.round(숫자): 소수점 첫째 자리에서 반올림해서 정수 반환.
// Math.ceil(숫자): 소수점 첫째 자리에서 무조건 올림해서 정수 반환.
// Math.floor(숫자): 소수점 첫째 자리에서 무조건 내림해서 정수 반환.
// Math.sqrt(숫자): 제곱근값 방환
// Math.PI: 원주율 상수 반환.

// 1-4) 배열 객체의 메소드
// join(연결 문자): 배열을 연결해서 하나의 문자열로 반환.
// reverse(): 데이터 순서를 거꾸로 반환.
// sort(): 데이터를 오름차순으로 정렬.
// slice(index1, index2): 원하는 구간만큼 잘라서 배열 객체로 가져옴.
// splice(): 지정 객체를 삭제하고 새 데이터 삽입.
// concat(): 2개의 객체를 하나로 결합.
// pop(): 저장 데이터 중 마지막 인덱스에 저장된 데이터 삭제.
// push(new data): 배열 마지막에 새 데이터 삽입.
// shift(): 첫번째 인덱스에 새 데이터 삽입.
// unshift(new data): 배열 객체 가장 앞의 인덱스에 새 데이터 삽입.
// length: 베열에 저장된 총 데이터의 갯수 반환.

// 1-5) 문자열 객체 메소드
// charAt(index): 문자열에서 인덱스 번호에 해당하는 문자 반환.
// indexOf("찾을 문자"): 왼쪽부터 찾을 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 반환.
// (없으면 -1 반환.)
// lastIndexOf("찾을 문자"): 오른쪽부터 칮을 문자를 찾아 제일 먼저 일치하는 문자 인덱스를 반환.
// (없으면 -1 반환.)
// match("찾을 문자"): 왼쪽부터 찾을 문자를 찾아 먼저 찾은 문자를 반환. (없으면 null 반환)
// replace("바꿀 문자", "새 문자"): 왼쪽부터 바꿀 문자를 찾아 새 문자로 치환. (없으면 null 반환)
// search("찾을 문자"): 왼쪽부터 찾을 문자를 찾아 제일 먼저 일치하는 인덱스 번호 반환.
// slice(a, b): a개의 문자를 자르고 b번째 이후에 문자를 자른 후 남은 문자 반환.
// substring(a, b): a인덱스부터 b인덱스 이전 구간의 문자를 반환.
// substr(a, 문자 개수): 문자열에 a 인덱스부터 지정한 문자 개수만큼 문자열 반환.
// split("문자"): 지정한 문자를 기준으로 문자 데이터를 나누어 배열에 저장해 반환.
// toLowerCase(): 영문 대문자를 모두 소문자로 바꿈.
// toUpperCase(): 소문자를 전부 대문자로 바꿈.
// length: 문자 갯수 반환.
// concat("새로운 문자"): 새로운 문자열 결합.
// charCodeAt(index): 해당 문자의 아스키 코드값 반환.
// fromCharCode(아스키 코드 값): 고드값에 해당하는 문자 반환.
// trim(): 문자의 앞 또는 뒤에 공백 문자열을 삭제.

// 2) 브라우저 객체 모델 : window, screen, location, history, navigator
// 2-1) window 객체 메서드
// open("URL", "새 창 이름", "새 창 옵션")
// alert(data): 경고창.
// promp("질문", "답변"): 질의응답 창
// confirm("질문 내용"): 확인(true), 취소(false) 창을 나타냄.
// moveTo(x, y): 지정한 새 창의 위치를 이동.
// resizeTo(width, height): 지정한 새 창의 크기를 변경.
// setInterval(funtion(){ 자바스크립트 코드 }, 일정 시간 간격)
// 지속적으로 일정한 시간 간격으로 함수를 호출하여 코드 실행.
// setTimeout(funtion(){ 자바스크립트 코드 }, 일정 시간 간격)
// 단 한 번 일정한 시간 간격으로 함수를 호출하여 코드를 실행.

// 2-2) 새 창의 옵션 종류
// width: 새 창의 너비 설정.
// height: 새 창의 높이 설정.
// left: 새 창의 수평(X축) 위치 설정.
// top:  새 창의 수직(Y축) 위치 설정.
// scrollbars: 새 창의 스크롤바 숨김(no)/노출(yes) 설정.
// location: 새 창의 URL 입력 숨김(no)/노출(yes) 설정.
// status: 새 창의 표시줄 영역의 숨김(no)/노출(yes) 설정.
// toolbars: 새 창의 도구 상자 영역의 숨김(no)/노출(yes) 설정.

// 2-3) screen 객체 속성 종류
// screen.width: 화면 너빗값 반환.
// screen.height: 화면 높잇값 반환.
// screen.availWidth: 작업 표시줄 제외 화면 너빗값 반환.
// screen.availHeight: 작업 표시줄 제외 화면 높잇값 반환.
// screen.colorDepth: 사용자 모니터가 표현 가능한 컬러 bit 반환.

// 2-4) location 객체의 속성 종류
// location.href: 주소 영역 참조 주소 설정 & URL 반환.
// location.hash: URL 해시값(#에 명시된 값) 반환.
// location.hostname: URL 호스트 이름 설정 & 반환.
// location.host: URL 호스트 이름과 포트 번호 반환.
// location.protocol: URL 프로토콜 반환.
// location.search: URL 쿼리(요청값) 반환.
// location.reload(): 새로고침.

// 2-5) history 객체 속성 종류
// history.back(): 이전 방문 사이트 이동.
// history.forward(): 다음 방문 사이트 이동.
// history.go(이동숫자): -2를 입력하면 2단계 이전의 방문 사이트 이동.
// history.length: 방문 기록에 저장된 목록의 개수 반환.

// 2-6) navigator 객체 속성 종류
// navigator.appCodeName: 현재 브라우저 코드명 반환. 현 시점 모든 브라우저는 'Mozilla'를 반환.
// navigator.appName: 현재 브라우저의 이름 반환. 현 시점 모든 브라우저는 'Netscape'를 반환.
// navigator.appVersion: 현재 브라우저의 버전 정보 반환. 현 시점 모든 브라우저는 '5.0(Win-dows)'를 반환.
// navigator.language: 현재 브라우저가 사용한 언어 반환. 한국어를 사용할 경우 "ko" 반환.
// navigator.product: 현재 브라우저가 사용하고 있는 엔진 이름 반환.
// Ex) 크롬 = Gecko.
// navigator.platform: 현재 컴퓨터의 운영체제 정보 제공.
// Ex) 윈도우, 64bit(But 설치된 32bit) = Win32
// navigator.onLine: 온라인 상태 여부에 대한 정보 제공.
// Ex) 인터넷이 정상적으로 연결 = true 값 반환.
// navigator.userAgent: 브라우저와 운영체제의 종합 정보 제공.

// 3) 문저 객체 모델(DOM) : HTML 문서 구조. IE8 이하 버전에선 호환성이 떨어진다.
