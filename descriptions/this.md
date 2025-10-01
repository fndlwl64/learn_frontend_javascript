## this
- this는 스코프에 따라 달라진다
    - 전역 스코프
        - window 객체
    - 함수 스코프
        - **함수가 호출한 객체**
```javascript
// this 출력 함수
function callThis(){
    return this;
}

// 객체
const obj = {
    name: "jo",
    innerObj: {
        name: "jung",
        call: callThis
    }
}

const result = obj.innerObj.call(); 
console.log(result.name); // "jung" 출력 
```
## bind
- this의 값을 다른 객체로 바인딩해주는 함수
- **caution** : 같은 객체를 연속으로 바인딩할 수 없음
```javascript
// this 출력 함수
function callThis(){
    return this;
}

const obj = { key: "value"};
const bindCallThis = callThis.bind(obj);

console.log(bindCallThis()); // window 객체가 obj 객체를 호출
```
## arrow
- 화살표 함수는 기존 함수 표현식을 간단하게 나타낼 수 있는 문법
- 일반 함수와 다르게 화살표 함수의 this 값은 **선언된 위치**에 따라서 결정
    - 화살표 함수는 자신의 this를 가지고 있지 않아 외부로부터 this를 가져와서 사용
```javascript
const obj = {
    key: "value",
    func: function() { console.log(this); },
    arrow: () => console.log(this),
    innerArrow: function(){
        (() => console.log(this))();
    }
}

obj.func(); // obj 객체 호출
obj.arrow(); // window 객체 호출
obj.innerArrow(); // obj 객체 호출
```

