# DOM
## Tree
```
Node
 ├── Document
 │    ├── Element
 │    │    ├── Attr
 │    │    ├── Text
 │    │    └── Comment
 │    └── DocumentFragment
 └── Event
```
## Summary
- DOM은 일종의 인터페이스로 html 문서를 조작하기 위한 표준을 제공
- 트리구조로 html 문서 전체(요소, 속성, 텍스트, ...)를 객체로 표현
- 예시로 브라우저 환경에서 DOM이 document 객체로 구현되어, 자바스크립트를 통해 요소를 생성,수정,삭제하거나 이벤트를 제어