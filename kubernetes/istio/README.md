# 서비스 매쉬
- 마이크로 서비스 아키텍처는 각각의 서비스를 독립적으로 관리할 수 있지만 인스턴스 관리 부담이 증가
- 기존의 서비스 아키텍처에서 호출이 직접 호출방식이었다면, 서비스 매쉬에서는 서비스에 딸린 프록시끼리 호출
- 서비스가 거대해짐에 따라 프록시 수도 증가하는데, 프록시에 대한 설정정보를 중앙집중화된 컨트롤러가 통제 
    - Data Plane : 프록시들로 이루어져 트래픽을 설정값에 따라 컨트롤하는 부분
    - Control Plane : 프록시에 설정값을 전달하고 관리하는 컨트롤러 역할

# istio
- Data Plane의 메인 프록시로 Envoy proxy를 사용하며 이를 컨트롤해주는 Contrl Plane의 오픈 소스 솔루션
- Pilot : envoy에 대한 설정 관리 및 service discovery
- Mixer : 액세스 컨트롤, 정책 통제 그리고 각종 모니터링 지표의 수집
- Citadel : 보안에 관련된 기능
- Galley : Istio Configuration의 유효성 검사

# 기능
- 쉬운 규칙 구성과 트래픽 라우팅을 통해 서비스간의 트래픽 흐름과 API 호출을 제어
- 기본적으로 envoy를 통해 통신하는 모든 트래픽을 자동으로 TLS 암호화
- 서비스간 상호작용에 대해 access, role 등의 정책을 설정하여 리소스가 각 서비스에게 공정하게 분배되도록 제어
- 강력한 모니터링 및 로깅 기능을 제공하여 문제를 빠르고 효율적으로 감지

- https://gruuuuu.github.io/cloud/service-mesh-istio/
- http://itnp.kr/post/istio-task-environment (실습)
- https://github.com/istio/istio/releases/download/1.4.2/istio-1.4.2-osx.tar.gz