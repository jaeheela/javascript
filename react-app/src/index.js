import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //./App.js 혹은 ./App.css 폴더로부터 App이라는 태그가 옴 (js 혹은 .css 확장자 생략하여 표시 가능)
import reportWebVitals from './reportWebVitals';

//리액트
// => node.js 실행환경으로 react프레임워크(프론트) 구축 - 클라이언트 측 렌더링을 위한 JavaScript 라이브러리
// =>  Node.js 환경에서도 실행 가능
// => React를 사용하여 프론트 엔드 웹 애플리케이션을 만들면 React 코드는 브라우저에서 실행됨

//1. create-react-app 생성하기
//react 공식 사이트 문서 : https://ko.legacy.reactjs.org/docs/create-a-new-react-app.html#create-react-app 접속 >> 
// >> 새로운 react 앱 만들기 클릭 >> 리액트 툴체인 이용할 것임 (이 중 create-react-app) >> create-react-app 깃허브 주소 접속 https://github.com/facebook/create-react-app 
// >> create-react-app-dev 링크 클릭 >> npx create-react-app . (현재 폴더인 [].] 안에 create-react-app 만들어줘) >> 
// >> npm start (실행) >> create-react-app (구동) >> node.js가 index.js(입구 파일) 찾아 동작함 
// >>  http://localhost:3000 (접속) - 브라우저 화면 (출력 확인) >> ctrl + c (종료)

//2. create-react-app 수정하기
// src > index.js  - "<App> 태그에 id가 root인 태그로 랜더링해주세요" 라는 코드 존재 
// public > index.html - "id값이 root인 태그 존재" - div id="root" style="border: 10px solid red;"></div>
// src > App.js
// src > App.css

//3. react-create-app 배포하기
//npm run build >> build 폴더 및 파일 생성됨 - index.html 열어보면 공백조차 없는 코드 존재함
//  >> npx serve -s build (빌드된 파일을 서버에 호스팅하는 명령어 - "-s"옵선 사용자가 어떤 경로로 들어오든 index.html 파일을 서비스해줌) 
// >> http://localhost:3000 (접속) - 화면확인 >> ctrl + c (종료)

//4. 컴포넌트(사용자 정의태그) 만들기  >> 컴포넌트에 PROP 만들기 >> 컴포넌트에 이벤트 기능 추가하기 - App.js
// => 리액트의 본질 
// => 리액트는 컴포넌트(사용자 정의 태그)를 만드는 기술이다.






//온라인 플레이그라운드
// => 스택플리츠 : https://stackblitz.com/edit/react-ssjkga?file=src%2FApp.js
//리액트 툴체인
// => React를 배우고 있거나 아니면 새로운 싱글 페이지 앱을 만들고 싶다면 Create React App, 서버 렌더링 Node.js 웹사이트를 만들고 있다면 Next.js, 고정적인 콘텐츠 지향적 웹사이트를 만들고 있다면 Gatsby
// => 컴포넌트 라이브러리 혹은 이미 있는 코드 베이스에 통합을 한다면? Neutrino(webpack의 장점과 React의 단순함과 미리 설정된 앱과 컴포넌트를 합친 것), Nx (풀스택 모노레포 개발을 위한 도구이며, React, Next.js, Express 등을 기본적으로 지원), Parcel(React와 함께 사용할 수 있고 빠르고 설정이 필요 없는 웹 애플리케이션 bundler), Razzle(서버 렌더링 프레임워크며 설정이 필요 없지만, Next.js보다 다루기 쉬움)
//JavaScript build 툴체인
// => [package manger] - Yarn, npm (서드 파티 패키지의 방대한 생태계를 활용할 수 있게 하며, 쉽게 설치하고 업데이트할 수 있게 함)
// => [bundler] - webpack,Parcel(코드를 모듈방식으로 작성할 수 있게 하고 이를 작은 package로 묶어서 로딩 시간을 최적화할 수 있음)
// => [compiler] - Babel(최신 JavaScript 코드를 구형 브라우저에도 실행되게 도와줌)
//npm(큰개념)
// => 패키지를 설치하고 관리하는 도구
// => npm을 사용하여 패키지를 설치하면 해당 패키지를 로컬 또는 전역으로 설치할 수 있음
// => 패키지를 업데이트하거나 제거하는 등의 작업 수행 가능
//npx(작은개념)
// => 패키지를 설치하지 않고 즉석에서 패키지를 실행하는 도구
// => 로컬 컴퓨터에 설치된 패키지를 실행할 수 있음
// => npx를 사용하여 패키지를 실행하면 해당 패키지를 로컬에 다운로드하고 실행한 다음, 실행이 끝나면 자동으로 삭제됨
// => 따라서 전역적으로 패키지를 설치하지 않아도 즉석에서 원하는 패키지를 실행할 수 있음
// => 터미널에 npx 명령어 입력하기 위해서는 node.js 설치 필수
// => Node.js 패키지 매니저의 일부로 제공되는 도구 , Node.js를 설치하면 함께 설치됨
//node index.js 명령
// => Node.js 런타임에서 동작함, JavaScript 파일 실행 가능
// => node 명령어를 사용하여 index.js 파일을 실행하는 것
// => node 명령어는 Node.js 런타임을 실행하는 데 사용되며, JavaScript 파일을 실행할 수 있음
// => 직접 index.js 파일을 실행하는 것입
// => 이 명령을 사용하면 package.json 파일과 관련없이 index.js 파일을 실행할 수 있음
// => 즉, node index.js 명령은 해당 파일만 실행하므로 프로젝트의 다른 설정과 의존성을 수동으로 설정해야함
//npm start 명령
// => Node.js 런타임에서 동작함, JavaScript 파일 실행 가능
// => npm 패키지 매니저가 제공하는 명령 중 하나 - Node.js 환경에서 실행됨
// => npm은 Node.js 패키지 매니저이며, start 명령은 package.json 파일에 정의된 스크립트를 실행하는 역할
// => 프로젝트의 package.json 파일에 정의된 start 스크립트를 실행하는 것
// => 이 스크립트에는 일반적으로 프로젝트를 실행하는 명령이 포함됨
// => 예를 들어, package.json 파일에 "scripts": { "start": "node index.js" } - start 스크립트가 정의되어 있다면 
// => npm start 명령은 node index.js 명령을 실행하게 됨
// => 즉, npm start 명령은 package.json 파일에 정의된 스크립트를 실행하므로 프로젝트에 설정된 환경과 의존성을 자동으로 로드하여 실행할 수 있음



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
