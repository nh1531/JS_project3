
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
// 8개 선택되었으면 성공
let cnt = 0 ;


//폭탄이 섞였는지 체크하는 flag변수
// true가 되면 폭탄섞기 버튼이 눌러지면 안됨
let shuffleFlag = false;

// 메시지 표시 함수
const showMsg = (m) => {
    // m은 매개변수
    document.querySelector("#msg").innerHTML = m;
}

// 보드 내용 지우기
const boardInit = () => {
    const board = document.querySelectorAll(".boardBox"); // 여러개 쓸 경우에는 querySelectorAll. 배열
    // 9개 내용을 순회하면서 지우기
    for(let item of board){
        item.innerHTML = '';
    }

    // 초기화 (실패시)
    cnt = 0;
    selNum.length = 0; 
    console.log(board);
}

// 보드 전체 하트 만들기
//자바스크립트 배열 indexof
const showAll = () => {
    // 위치 찾아서 바꿈
    /*
    let idx = num.indexOf(1) + 1; // 위치를 찾았으면 +1 해줘야 함
    console.log('last:' , idx);
    document.querySelector("#box"+ idx).innerHTML = `<img src = "./images/hart.png" />`;
    */

    // 다 바꿈
    const board = document.querySelectorAll(".boardBox"); 
    for(let item of board){
        item.innerHTML = `<img src = "./images/hart.png" />`;
    }

}
// 보드 숫자 누른 후 보여주기 함수
const show = (n) => {
    if(!shuffleFlag){
        showMsg('게임 종료. 다시 하세요');
        // boxShuffle();
        return;
    }
    console.log(n);

    // 같은 곳을 여러번 눌렀을 때
    //똑같은 칸 중복으로 누르는 것 방지. 원래는 똑같은 칸 눌러도 cnt가 증가했음
    if(selNum.indexOf(n) != -1) return;

    cnt++; // 누른 횟수. 하나씩 증가. selNum.length로 처리해도 됨
    selNum.push(n); // 눌러진 정보 저장. 몇 번만에 폭탄에 도착했는지, [6] -> [6,3] -> [6,3,5]..
    console.log(selNum);

   

    let img;
    if(num[n-1] == 0) img = 'hart';
    else {
        img = 'boom';
        shuffleFlag = false; // 폭탄 발견하면 
        showMsg('게임 실패!');
    }
    document.querySelector("#box"+n).innerHTML = `<img src = "./images/${img}.png" />`

    if(cnt == 8){
        showAll();
        shuffleFlag = false;
        showMsg('게임 성공!');
        return;
    }

}

// 폭탄섞기 함수
// 반복문 빠질 땐 break, 함수를 빠질 땐 return
const boxShuffle = () => {
    if(shuffleFlag){ // shuffleFlag 자체로 true false라서 shuffleFlag == true라고 안해도 됨
        showMsg('폭탄위치를 결정했습니다. 게임을 진행해 주세요.');
        return;
    }
    num.sort(() => Math.random() - 0.5);
    shuffleFlag = true;

    // 폭탄이 섞이면 숫자가 사라짐
    boardInit();
    console.log(num);
}



/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   
});