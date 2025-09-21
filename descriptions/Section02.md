## Section02
### 함수
- 함수: 특정 기능을 수행하기 위한 코드의 집합
    - 목적: 재활용을 통해 불필요한 코드의 중복 감소
- 함수 표현식
```javascript
// 호이스팅이 적용 O
testAlert();
// 함수 표현식
function testAlert(){
    console.log("test alert");
};
```
- 함수 선언식
```javascript
// 호이스팅이 적용 X
testAlert();
// 함수 선언식
let testAlert = function(){
    console.log("test alert");
};
// ReferenceError 발생
```
### 객체
#### 자료형
- 원시 자료형: 자바스크립트에서 기본으로 제공되는 자료형 (객체 X)
    - number, bigint, string, boolean, null, undefined, symbol
- 참조 자료형: 속성의 모음으로 이루어진 자료형(객체 O)
    - object, array, function, ...
#### 객체
- 속성들의 집합 / 여러 개의 데이터를 저장할 수 있는 자료형
- 속성(property)
    - key 값으로 식별되는 고유의 데이터 모음
    - property 값(value)으로 원시 자료형 ,참조 자료형, 함수 등 할당 가능
- 객체 생성
    - new 방식
    ```javascript
    let person = new Object();
    ```
    - 리터럴 방식
    ```javascript
    let person = {
        firstName: "kim",
        lastName: "minsu",
        age: 34,
        getName: function(){ return this.firstName + this.lastName}
    };
    ```

### 배열
- 순서가 있는 요소들의 집합
#### 기본
```javascript
// 선언, 할당
let array = new Array(); // 초기값 할당 new Array(1,2,3); 크기 설정 new Array(3)
// 요소 값 추가, 삭제
array.push(1); array.push('world'); array.push(null); // 뒤에 추가
array.unshift(4); // 앞에 추가
array.pop(); // 뒤에 삭제
array.shift(); // 앞에 삭제
// 참조, 접근
console.log(array[0]);
```
#### 심화
- 내장 함수
```javascript
// 반복문
let array = [1,2,3,4,5];
array.forEach((elm, idx, array) => {
    console.log(`
        element: ${elm},
        idx: ${idx},
        array Length: ${array.length}
    `);
});

// 요소 접근
console.log(array.at(-1)); // 맨 마지막 요소 접근
console.log(array.includes(3)); // 포함 유무
console.log(array.indexOf(3)); // 해당 값 인덱스
// 특정 요소 찾기
let findIdx = array.findIndex((elm) => elm === 4);
console.log(findIdx); 

// 요소 결합
// 복수의 array 통합
let array1 = ["a","b","c"];
let concatArray = array1.concat(["d","e"]);
console.log(concatArray);

// 문자열로 통합
console.log(array1.join("/"));

// 정렬
let sorted = [1,4,2,3,8].sort((a, b) => b-a); // 내림차순
console.log(sorted);

// 누적 함수
let sum = sorted.reduce((acc, cur, idx) => {
    return acc + cur;
});
console.log(sum);

// 타입 체크
console.log(Array.isArray(array1), Array.isArray(sorted), Array.isArray(array1.join("/")));
```
