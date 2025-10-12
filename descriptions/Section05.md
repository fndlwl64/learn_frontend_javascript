## 보안
### CORS 정책
- 교차 출처 리소스 공유(Cross Origin Resouce Sharing)
- 목적: 브라우저 단의 데이터 탈취 방지
    - 다른 사이트의 API를 무단 호출 방지(인증 쿠키나 토큰을 탈취 후)
- 원리: 클라이언트와 서버의 출처(Origin) 비교        
    - 브라우저가 요청 시 요청 출처(Origin)와 응답 시 허용 출처(Access-Control-Allow-Origin)를 비교
    - 일치하지 않으면 CORS 정책 위반 오류 발생 
- 사전 요청(Preflight)
    - OPTIONS 메서드로 먼저 서버에 실제 요청을 보내도 되는지 확인
    - 승인 후 실제 요청(Actual Request) 보냄
