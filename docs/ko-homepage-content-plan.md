# PLACHEM VINA Homepage Content Plan

## 기준

- 한국어 7개 화면을 승인 기준으로 유지한다.
- 영문 7개와 베트남어 7개 화면은 한국어 승인 구조와 동일한 디자인 시스템을 사용한다.
- KO·EN·VI 경로는 각각 `/ko/`, `/en/`, `/vi/` 아래에서 동일한 slug 구조를 유지한다.
- 확인되지 않은 생산능력, 인증, 고객사, 기술 수치, 적용 소재, 개별 제품 상세 정보는 공개하지 않는다.
- 실제 문의 전송 폼, 첨부 업로드, WordPress 변경, AI 상담·RAG·ERP 연결은 포함하지 않는다.
- 고객 화면에는 내부 작업 범위나 승인 절차 설명을 노출하지 않는다.

## 공개 가능한 회사 정보

- 회사명: `PLACHEM VINA CO., LTD`
- 설립: 2016년
- 제조 기반: Bắc Ninh, Vietnam
- 베트남 전화: `+84 222 395 2060`
- 한국 연락처: 저장소에 승인된 주소와 전화만 사용한다.
- 사업 범위: 표면처리약품 제조·공급, 제품군별 공정 검토, 현장 기술지원
- 핵심 가치: 한국 포뮬레이션 기술 + 베트남 현지 제조 + 현장 기술지원

## 메뉴와 페이지 연결

- Home: `/ko/`, `/en/`, `/vi/`
- About: `/ko/about/`, `/en/about/`, `/vi/about/`
- Products & Solutions: `/ko/solutions/`, `/en/solutions/`, `/vi/solutions/`
- Technology Support: `/ko/technology/`, `/en/technology/`, `/vi/technology/`
- Quality Management: `/ko/quality/`, `/en/quality/`, `/vi/quality/`
- Knowledge: `/ko/knowledge/`, `/en/knowledge/`, `/vi/knowledge/`
- Contact: `/ko/contact/`, `/en/contact/`, `/vi/contact/`
- 언어 전환은 현재 페이지에 대응하는 KO·EN·VI 경로로 이동한다.

## 페이지별 목적

### Home

- 목적: 방문자가 PLACHEM VINA의 사업 분야를 빠르게 이해하게 한다.
- 핵심 메시지: 표면처리 공정 안정화를 위한 약품 제조와 현장 기술지원.
- 구성: Hero, PLACHEM의 역할, 4개 핵심 솔루션, 현장 기술지원, 제조·품질관리, 기술자료·문의.

### About

- 목적: PLACHEM VINA의 정체성과 베트남 현지 대응 구조를 설명한다.
- 구성: 회사 정체성, 2016년 설립, Bắc Ninh 제조 기반, 사업영역, 한국 기술과 베트남 현장 대응.

### Products & Solutions

- 목적: 개별 제품명이 아니라 공정과 관리 항목 기준으로 8개 제품군을 이해하게 한다.
- 구성: 제품군 번호, 제품군명, 적용 공정, 취급 품목·공정, 제품군별 기술문의 연결.
- 개별 제품 상세페이지는 만들지 않는다.

### Technology Support

- 목적: 공정 문제를 약품명 하나가 아니라 현장 조건과 함께 검토한다는 점을 설명한다.
- 구성: 공정 정보 확인, 도금욕 분석, 불량 원인 분류, 조건 조정, 재확인 및 안정화.
- pH, 금속농도, 온도, 교반, 여과는 분석 항목으로만 표시한다.

### Quality Management

- 목적: 원료부터 출하와 자료 제공까지의 관리 흐름을 설명한다.
- 구성: 원료 입고 확인, 제조관리, 공정검사, 완제품검사, 출하 확인, LOT 추적, TDS·SDS·COA 제공 절차.

### Knowledge

- 목적: 공정관리, 불량 원인, 약품 안전과 품질관리 자료를 공정별로 안내한다.
- 구성: 공정별 자료 분류, 기술 블로그 3개 링크, TDS·SDS·COA 요청 안내.
- 다운로드 버튼이나 존재하지 않는 자료 링크는 만들지 않는다.

### Contact

- 목적: 상담 가능한 내용, 준비하면 좋은 공정 정보, 베트남 법인과 한국 연락처를 안내한다.
- 구성: 문의 가능 범위, 준비 정보, 선택된 제품군 표시, 연락처, 제품·솔루션 이동.
- 실제 온라인 전송 폼은 만들지 않는다.

## 확정 제품군과 취급 범위

1. 전처리
   - 탈지
   - 세정
   - 산세
   - 에칭
   - 디스머트

2. 전기도금
   - 니켈
   - 구리
   - 주석
   - 아연
   - 크롬
   - 은
   - 금

3. 무전해도금
   - 무전해 니켈
   - 무전해 구리

4. 알루미늄 아노다이징
   - 화학연마
   - 에칭
   - 디스머트
   - 아노다이징
   - 염색
   - 봉공
   - 니켈 리치아웃 제거

5. 화성피막
   - 인산염
   - 징케이트
   - 크로메이트

6. 후처리·특수약품
   - 변색방지
   - 코팅
   - 특수 세정
   - 제거제

7. 기초화학약품
   - 황산
   - 염산
   - 질산
   - 가성소다

8. 여과장비·관련 설비
   - 표면처리 및 도금 공정용 여과장비

## 이미지와 비주얼

- 실제 이미지 파일을 고객 화면에 로딩하지 않는다.
- Home Hero는 CSS 메탈릭 비주얼을 사용한다.
- 실제 PLACHEM 공장·설비·연구실처럼 보이는 AI 이미지는 사용하지 않는다.
- 빈 이미지 박스를 만들지 않는다.
- 실제 시설 사진이 확보되면 현재 비주얼 구조 안에서 교체할 수 있게 유지한다.

## 기술 블로그 연결

- `https://blog.plachem.biz/material-plating-difficulty-guide/`
- `https://blog.plachem.biz/plating-agitation-defects-quality/`
- `https://blog.plachem.biz/plating-pitting-filtration-carbon-treatment/`

위 3개 URL만 연결한다. WordPress 글 자체는 변경하지 않는다.

## 보류 항목

- 실제 문의 전송 기능
- 개별 제품 상세페이지
- 생산능력, 인증, 고객사, 기술 수치, 설비 상세
- Production 배포, main 병합, `plachem.biz` 변경
