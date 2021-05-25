# 프로젝트 소개(역전기록소)

## :family: 팀소개

|  이름  |            담당역할            |            github            |
| :----: | :----------------------------: | :--------------------------: |
| 김문정 | **팀장**, 프론트엔드, 디자이너 | https://github.com/moong3871 |
| 윤지해 |      프론트엔드, JIRA, QA      |                              |
| 이동훈 |          백엔드, UCC           |                              |
| 장수민 |        백엔드, IT Infra        |                              |
| 조우리 |      프론트엔드, GIT, PPT      |                              |

<br>

## :train: 프로젝트  "역전기록소" 소개

### 서비스 소개

> 자서전 작성 서비스 및 오픈소스 에디터 개발

#### 기획 의도

- 자서전 작성을 통해 자신을 돌아보는 시간을 가질 수 있도록 한다.
- 미래의 나에게 글을 씀으로써, 미래의 나를 구체화할 수 있고 목표의식을 가질 수 있도록 한다.
- 맞춤형 에디터를 제작하고 오픈소스화한다.

#### 기능

- **자서전 기능**

  - 쓰기

    직접 개발한 에디터 활용, 자동저장 기능, 공개/비공개 여부 선택 가능, 글 작성을 돕는 오늘의 질문 존재 및 질문 바꾸기 가능

  - 읽기

    turn.js 활용, 목차를 통해 바로가기 가능

  - 디자인

    자서전 표지 커스텀 가능 

  - 미래의 글

    미래의 특정 날짜에 해당하는 글을 쓰면, 그 날짜에 알림 기능
  
  <img width="80%" src="https://autobiography.s3.ap-northeast-2.amazonaws.com/book.gif"/>



- **일대기 UI**

  - 모든 에피소드를 한눈에 볼 수 있는 일대기 UI
  - 임시저장, 비밀 글 구분 가능
  - 순서 편집 가능
  - 에피소드가 많을 경우, 토글버튼을 이용한 UI 변경 가능

  <img width="80%" src="https://autobiography.s3.ap-northeast-2.amazonaws.com/timeline.gif"/>

- **공유기능**

  - 회원 간 팔로우 가능
  - 맞팔로우 시 자서전 공유 가능
  - 비밀 글 설정으로 원하는 챕터만 공유 가능

  <img width="80%" src="https://user-images.githubusercontent.com/68373278/119311542-2836aa00-bcac-11eb-8f96-cd2b1543af95.gif"/>

### - 에디터 오픈소스 소개

- [npm](https://www.npmjs.com/package/fospublisher-vue-text-editor)
- [에디터 오픈소스 github](https://github.com/fospublisher201/fospublisher-vue-text-editor#readme)

<br>

## :wrench: 스택

Backend: <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=black"> <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black"> <img src="https://img.shields.io/badge/Mysql-4479A1?style=flat-square&logo=Mysql&logoColor=white"> <img src="https://img.shields.io/badge/nodemon-76D04B?style=flat-square&logo=Nodemon&logoColor=black">

Frontend:<img src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=black"> <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white">

DevOps: <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=black"> <img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white"> <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=Jenkins&logoColor=black"/> <img src="https://img.shields.io/badge/NGINX-269539?style=flat-square&logo=NGINX&logoColor=black"/>

Common: <img src="https://img.shields.io/badge/GitLab-FCA121?style=flat-square&logo=GitLab&logoColor=black"/> <img src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=Jira&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white">

**버전**

- `node` : 14.16.0
- `npm` : 6.14.11

<br>

## :ledger: 기능소개

- 자서전 작성 기능 및 작성에 도움을 주기 위한 오늘의 질문 기능
- 자서전 내용을 타임라인으로 제공
- 자서전 작성 완료 후 word 파일 추출 기능
- 에디터를 사용하여 이미지 추가
- 회원 간 팔로우 및 자서전 공유 기능

<br>

## :computer:프로젝트 실행 방법

### - Backend

```text
$ git clone https://lab.ssafy.com/s04-final/s04p31b201.git
$ cd server
$ npm i
$ npm start
```

### - Frontend

```text
$ git clone https://lab.ssafy.com/s04-final/s04p31b201.git
$ cd fospublisher
$ npm i
$ npm run serve
```

<br>

## 🤝개발 규칙

### - GIT Convention

> 자세한 내용은 다음 페이지를 참고한다.
> [GIT Convention](https://www.notion.so/GIT-Convention-e0a324b35a154a0ebdc8e9600b46fe41)

- Commit message Template

  ```
  [feat/FE] : 제목 
  ##### 제목은 최대 50 글자까지만 입력 ############## -> |
  
  ######## 본문은 한 줄에 최대 72 글자까지만 입력 ########################### -> |
  
  #   feat       : 새로운 기능 추가
  #   fix        : 버그 수정
  #   refactor   : 코드 리팩토링
  #   style      : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
  #   docs       : 문서 수정
  #   test       : 테스트 코드, 리팩토링 테스트 코드 추가
  #   chore      : 빌드 업무 수정, 패키지 매니저 수정
  # ------------------
  #     제목 첫 글자를 대문자로
  #     제목은 명령문으로
  #     제목 끝에 마침표(.) 금지
  #     제목과 본문을 한 줄 띄워 분리하기
  #     본문은 "어떻게" 보다 "무엇을", "왜"를 설명한다.
  #     본문에 여러줄의 메시지를 작성할 땐 "-"로 구분
  ```

- Branch Name Example

  ```
  ex. 로그인 개발용 프론트엔드 feature branch
  	: feature/fe_login
  ```

### - Code Convention

> 자세한 내용은 다음 페이지를 참고한다.
>
> [Code Convention](https://www.notion.so/Code-Convention-ab35a4d0f439492589749090d4b68ec9)

- Vue.js: [Vue.js 공식 스타일 가이드](https://kr.vuejs.org/v2/style-guide/index.html)

- JavaScript

  - function: camel_case

  - class: pascal_case

  - indentation : 2spaces

  - 문장 끝 세미콜론(;)

  - 함수는 화살표 함수

    ```
    const app = () => {}
    ```

  - const / let 쓰기 (var 금지)

  - 함수간 공백 1칸씩

  - 주석 최소화

  - 네이밍 규칙

    - 명령문 형태, 동사+목적어+목적보어 (ex. createUserForBook)
    - 동사는 CRUD 를 준수 (create, read, update, delete)
    - 연산자는 다 띄움, 괄호 안은 `,` 의 경우에만 공백 허용, 그 외엔 붙여쓰기
