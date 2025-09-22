## Section01 과제
1. var를 이용해서 호이스팅 문제를 발생시킬 수 있는 샘플코드를 작성해보시요.
- 호이스팅은 런타임 전에 스코프 내의 변수 또는 함수의 선언을 미리 인식하는 현상 
```javascript
// 변수 호이스팅
var sum = a + b; // 아직 값이 할당되지 않음
var a = 10, b = 20;
console.log(sum); // NaN 출력

// 함수 호이스팅
runAlert();
var runAlert = function (){ // 함수 표현식
    alert('execute alert');
} // 경고 창 실행
```

2. 변수란 무엇인지 선언과 할당이 무엇인지 설명하시오.
```
변수는 저장소의 이름이며, 
선언은 변수의 이름을 설정하는 것이고,
할당은 선언된 변수에 데이터를 저장하는 것이며, 주의할 점으로 객체를 저장할 때는 그 객체의 주소를 저장한다.
```
3. 스코프란 무엇인 초등학생도 이해할 수 있게 설명하시오.
- 스코프(Scope)의 원문 뜻은 "범위"다. 자바스크립트에서는 무엇의 "범위"인지 이해해야한다.
- 대상은 "변수"이며, 즉 "저장소가 유효하게 존재할 수 있는 범위"가 스코프이다. 
- 스코프 영역은 중괄호로 표시한다.
```javascript
// for문을 통한 스코프 
for(let i; i < 10; i++){ 
    // for 문의 스코프 내에서 변수 i 선언 및 할당
    console.log(i);
} 
console.log(i); // for문 스코프 밖에서는 변수 i가 존재하지 않음.
```
4. 아래 코드를 실행할 시 콘솔의 결과는?
```javascript
var a = 'hello?'; // 전역 변수
function fnCall(){
    console.log(a); 
    var a = '안녕하세요?'; // 지역 변수
    function _fnCall(a){
        console.log(a);
    }
    _fnCall(a); // 지역 스코프에서 실행
}
fnCall(); // 전역 스코프에서 실행
```
- a 변수의 선언들을 먼저 메모리에 저장한다는 점을 고려
    - 전역 스코프에서 먼저 선언, 지역 스코프에서 선언
- 이후 할당 시 '안녕하세요?' 값은 재할당이 아니라 할당임을 고려
- fnCall 실행 시 호이스팅으로 인해 아래에 선언한 a를 콘솔에 실행
- _fnCall은 함수 내에서 실행 -> fnCall내에서 할당된 파라미터 값을 인식
### 콘솔 결과
```
undefined
안녕하세요?
```
5. 아래 코드를 실행할 시 콘솔의 결과는?
```javascript
var a = 'hello?'; // 전역 변수
function fnCall(){
    console.log(a); 
    var a = '안녕하세요?'; // 지역 변수
    function _fnCall(){
        console.log(a);
    }
    _fnCall(); // 지역 스코프에서 실행
}
fnCall(); // 전역 스코프에서 실행
```
- fnCall의 콘솔 결과는 4번과 문제와 동일
- _fnCall은 fnCall의 a 변수를 인자로 받지 않음
- _fnCall이 실행되는 스코프 밖의 전역 변수 a를 인식
```
undefined
hello?
```