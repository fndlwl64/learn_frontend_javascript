# Javascript
## 학습
### 섹션1
- 자바스크립트 소개
    - 자바스크립트 개발 환경
        - 브라우저 개발자 도구
        - 에디터 설치 (VS Code)
        - ......
    - 자바스크립트 사용 이유
        - 웹 페이지에서 동적인 기능을 구현하기 위해
        * 사용자와 상호작용하는 웹 애플리케이션 개발 등
### 섹션2
- 자바스크립트 기초 문법
    - 변수와 상수
        - var: 재할당 가능한 변수 선언
            - caution: 호이스팅(hoisting) 문제 발생 가능 / type safety 없거나 약함
        - let: 재할당 가능한 변수 선언 (ES6)
            - comment: 블록 스코프에 영향을 받음 / 약간의 type safety
            - caution: 타입 변환에는 type safety가 없음 (ex. 처음에 문자열할당해도 숫자 재할당 가능)
        - const: 재할당 불가능한 상수 선언 (ES6)
            - comment: 블록 스코프에 영향을 받음 / type safety
### 섹션3
- 자바스크립트 스코프, 호이스팅
    - 스코프: 변수와 함수가 접근할 수 있는 범위
        - 전역 스코프: 어디서든 접근 가능
        - 함수 스코프: 함수 내부에서만 접근 가능
        - 블록 스코프: 중괄호 {} 내부에서만 접근 가능 (let, const)
        - comment: Scope는 범위를 뜻함.
    - 호이스팅: 변수와 함수 선언이 해당 범위의 최상단으로 끌어올려지는 현상
        - var는 선언과 초기화가 동시에 호이스팅
        - let과 const는 선언만 호이스팅, 초기화는 호이스팅되지 않음 (TDZ)
        - comment: Hoist는 들어올리다를 뜻함.
### 섹션4
- 자바스크립트 자료형
    - 원시 자료형: number, string, boolean, null, undefined, symbol (ES6)
    - 참조 자료형: object, array, function
    - typeof 연산자: 변수의 자료형을 확인하는 데 사용
- 참조 자료형 심화
    - 객체, 배열, 함수 (**to be continue**)
    - 객체 내장 함수 (**to be continue**)
### 문서
- [DOM 정리](./DOM.md)