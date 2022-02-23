// 1. 지출 내역
// 1) 교통비 3,000 원  2) 식비 6,000원  3) 음료비 3,000원
// 2) 삼항 연산자 사용.
// 3) 적정 지출 비용: 1만원 초과 => "000원 초과" 출력. :  돈관리 잘했어요!

let price1 = 3000;
let price2 = 6000;
let price3 = 3000;

let allPrice = price1 + price2 + price3;

let priceResult =
  allPrice > 10000 ? allPrice - 10000 + "원 초과" : "돈관리 잘했어요!";

document.write(priceResult);
