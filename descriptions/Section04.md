## Section04
### DOM API
- 목적: 자바스크립트로 HTML 문서를 조작
    - HTML 요소를 객체(DOM 객체)로 변환
    - Node를 상속받는 객체
- API
    - 노드 생성
        - querySelector: 요소 접근 
        - createElement: 요소 생성
    - 요소 내 속성 및 내용 접근
        - classList: 요소 내에서 class 속성에 접근
        - textContent: 요소 내에 문자열에 접근
        - appendChild: DOM 객체에 자식 노드 추가 
        - style: 스타일에 접근
    - 이벤트 처리
        - addEventListner: 요소에 이벤트 추가
### fetch
- 목적: 네트워크 요청을 통해 리소스(데이터, 파일 등)을 가져오거나 전송하기 위해 사용
- 특징
    - 리소스 경로 설정(ex. https://example.com/data)
    - Request, Response 객체 사용
    - fetch 함수 호출 시 Promise 객체 반환
        - await나 then으로 비동기적으로 응답 처리 필요 

    


