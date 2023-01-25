/* 배열 선언 */
 // 데이터 타입으로 선언하지 않음
 let arr = [];
 let arr2 = new Array();


/* 배열 추가 삭제 :뒤에서 */
// 주로 push, pop 사용
arr.push('🍕'); // 이모지도 문자열. push는 먼저 들어간게 제일 밑으로
arr.push('🍔');
arr.push('🍤');
console.log(arr);

arr.pop(); // 뒤에서 뺌
console.log(arr);

/* 배열 추가 삭제 :앞에서 */
// unshift, shift 쓰는걸 추천하진 않음
arr.unshift('😀'); 
arr.unshift('😅')
console.log(arr);

arr.shift();
console.log(arr);
  

/* 배열 순회 1 */
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

/* 배열 순회 2 -> 추천*/
for(let i of arr){
    console.log(i);
}
 
/* 배열의 length 속성*/
console.log(arr); // 원래는 3인데
console.log(arr.length);
// length는 속성인데 변경 가능

//배열 비우기
arr.length = 0;
console.log(arr); // 속성값 변경해서 0 나옴


/* 배열을 문자열로 반환*/
// 원래는 마지막에 , 찍으면 오류 났는데 이제는 다음에 값이 들어올수도 있다고 마지막에 , 찍어주는게 좋다는 사람도 있음
arr = ['🍕','🍔','🍗','🍜',] ; 
let s = String(arr);
console.log(s);

/* 문자열 split하면 배열반환*/
// 나중에 split 많이 씀
let sarr = s.split(',');
console.log(sarr); // 다시 배열로
 
/* 배열 정렬 */
// 자바스크립트 배열 내림차순
// 콜백함수 이용해서 내림차순, 오름차순
// a-b : 오름차순
let num = [1,3,5,2,4];
num.sort((a, b) => { return b-a });
console.log(num);
 

/* 배열 섞기*/
//random -> 0부터 1 사이의 랜덤값?
num.sort(() => Math.random() - 0.5)
console.log(num);
 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 


/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

//합집합
// 배열안에 펼쳐서 새로운 배열로 만듦
let union =  [...setA, ...setB]
console.log(union);

//교집합
//setA에서 콜백함수에 의해 골라내겠다 -> B에 포함되어있는것
// filter 골라서 배열 만듦. 다 가지고 오지x
let intersection =  setA.filter((item) => { setB.includes(item) })
console.log(intersection);

// map 조건에 맞게 변형시켜서 새로운 배열 만듦. 다 가지고 옴. 변형시켜서 가지고 옴
let setA2 = setA.map((item) => item * 2)
console.log(setA2);

//차집합
let difference =  setA.filter((item) => { !setB.includes(item) })
console.log(difference);

// 합집합 수정
union = [...difference, ...setB]
console.log(union);






// 나중에 json 데이터로 받으면 object로 배열 


