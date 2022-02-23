// 적정 체중 = (본인 신장 - 100)X0.9
// 신장: 180(cm)
// 체중: 74(kg)
// 적정 체중: (180-100)X0.9 =72(kg)
// 결과: 적정 체중은 72kg이며, 현재 적정 체중에서 2kg 초과.

// 1. 적정 체중 구하기.
let userHeight = 180; // 신장
let userWeight = 74; // 체중

// 평균 체중 = (신장 - 100) X 0.9
let normal_w = (userHeight - 100) * 0.9;
document.write(normal_w);
// 적정 체중 = 72kg

// 2. 입력 받아서 적정 체중 구하기.
// prompt("질문", "기본 응답");
let name = prompt("당신의 이름은?", ""); // 이름 입력
let height = prompt("당신의 신장은?", "0"); // 신장 입력
let weight = prompt("당신의 몸무게는?", "0"); // 체중 입력

let normal_w1 = (height - 100) * 0.9; // 평균 체중
let result4 = weight >= normal_w1 - 5 && weight <= normal_w1 + 5; // 오차 범위 +-5

result4 = result4 ? "적정 체중입니다." : "적정 체중이 아닙니다.";

document.write(name + "님은" + result4);
