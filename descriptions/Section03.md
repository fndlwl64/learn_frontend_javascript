## Section03
### 비동기 처리
- 복수의 작업을 비순착적으로 처리하는 방법
    - 멀티 스레드 방식: 복수의 스레드 마다 작업을 실행 -> 동시 실행
    - 논블록킹 방식: 단일 스레드로 비동기 실행을 하게 하는 방식
        - 브라우저 환경에서는 브라우저에 백그라운드 작업을 할당하여 자바스크립트가 여러 작업을 동시에 실행하는 것처럼 보이게함.
### 비동기 객체, 함수
- Promise 객체
    - 목적
        - 비동기 작업 처리 
        - 비동기 작업들을 동시에 실행할 때 , 콜백 지옥 문제를 방지하기위 사용
    - 원리
        - 메서드 체이닝으로 promise 객체를 계속 반환해서 내부 콜백 함수를 순차적으로 처리
    - 예시
    ```javascript
    const promise = new Promise((resolve, reject) => {
        const status = true;
        // 비동기 함수
        setTimeout(() => {
            if(status)
                resolve("success");
            else
                reject("fail");
        }, 1000);
    });
    // 작업 처리
    promise
        .then(result => console.log(result))
        .catch(error => console.log(result))
        .finally(() => console.log("end"));
    ```
    - **comment** : promise 뜻은 약속, "작업이 완료되면 결과를 반환하겠다는 계약"일 수 있다.
- async, await 키워드
    - async 
        - 함수 앞에 써서 Promise 객체를 반환
    - await
        - async 함수의 작업 결과를 대기
### API 호출
- API
    - Application Programming interface
    - 컴퓨터(또는 소프트웨어) 사이의 연결 또는 상호작용을 위한 규칙
- 예시
```javascript
// API 사용
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
        return response.json();
    })
    .then(data => {
        console.log("success");
        console.log(data);
    })
    .catch(error => {
        console.log("fail");
        console.log(error);
    });
```