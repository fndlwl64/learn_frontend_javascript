## Section05
## 보안
### SOP 정책
- 동일 정책 (Same Origing Policy)
- 목적: 브라우저 단에서 데이터 탈취 방지 및 세션 하이재킹 방지
    - 인증 쿠키, 토큰, 세션 ID 등의 민감한 데이터가 다른 도메인에서 임의로 접근되는 것 차단
### CORS 정책
- 교차 출처 리소스 공유(Cross Origin Resouce Sharing)
- 목적: SOP정책을 어기지 않으면서 서버단에서 특정 도메인 간의 데이터 교환 허용
- 원리: 클라이언트와 서버의 출처(Origin) 비교        
    - 브라우저가 요청 시 요청 출처(Origin)와 응답 시 허용 출처(Access-Control-Allow-Origin)를 비교
        - 즉 서버단에서 허용할지 말지 결정
    - 일치하지 않으면 CORS 정책 위반 오류 발생 
- 사전 요청(Preflight)
    - OPTIONS 메서드로 먼저 서버에 실제 요청을 보내도 되는지 확인
    - 승인 후 실제 요청(Actual Request) 보냄
## 해킹
### XSS
- 크로스 사이트 스크립팅(Cross Site Scripting)
- 목적: 브라우저에서 악의적 스크립트를 삽입해서 공격
    - 주로 중요 데이터(세션, 인증키, .....)등을 탈취
- 예시
    - 댓글에 스크립트 작성
    - 메일 내용에 스크립트를 작성해서 사용자 공격
- 코드 예시
    ```
    // 도메인 쿼리에 주입
    http://example.com/search?q=<script>alert('xss')</script>

    // SOP 등이 허용하는 html 요소에 주입
    <img src=x onerror=alert(1)>

    // DOM API에 주입
    document.getElementById('out').innerHTML = location.hash.substring(1)
    ```
- 보안 방법
    - **to be continued**