//🤍자바스크립트의 등장
// => 브라우저 위에서 동적인 요소를 추가하기 위해 만들어진 언어
// => 브라우저에서 동작할 수 있는 유일한 언어였음🖤
// => 하지만 요즘에는 어셈블리가 등장해 rust, c, c++, c#, java, python, go 등 다양한 언어들을 이용해 웹어플리케이션을 만드는 것이 가능해짐 (웹브라우저에서 쉽게 동작이 가능하다는 것)
//🤍자바스크립트의 역사
// => 1993 Mosaic Web Browser 첫 웹 브라우저 등장
// => 1994 Netscape Navigater 등장 (UI 요소가 좀 더 더해진 브라우저)
// => 1994 Mocha -> LiveScript, Interpreter 등장. 동적인 요소가 추가되기 시작
// => ❤️‍🔥1995 Javascript 등장!!!!!
// => 1995 Internet Explorer 등장
// => 1997 ECMAScript 1 등장, (Language Specification)
// => 2000 Internet Explorer 시장 점유율 95%
// => 2004 Firefox 브라우저 등장
// => 2004 AJAX (Async Javascript And XML) 도입, jQuery 등장 - 자바스크립트의 라이브러리 등장 : jQuery(write less do more), doho, mootools .. - 개발자들이 더 이상 다른 브라우저의 구현사항을 신경쓰지 않도록 만드는 것
// => ❤️‍🔥2008 JIT(Just-in-time compilation)가 포함된 크롬 브라우저 등장!!!!
// => 2009 ECMAScript5
// => 2015 ECMAScript6
//🤍프로그램 만들 때 중요사항
// => service layer, presetation layer, business layer를 만들 때 APIs를 잘 작성해서 나중에 구현사항이 변경되더라도 인터페이스를 사용하고 있는 사용자의 코드는 수정되지 않도록 만드는 것
//🤍2008년 Google의 Chrome 브라우저 출시
// => JIT(Just In Time Compliation)의 강력한 엔진이 포함된 브라우저
// => 자바스크립트의 실행속도가 매우 빠른 강력한 엔진이 포한된 브라우저
// => 2008 ~ 2007 : 모든 브라우저들이 모여 대화함 - 우리 이제 표준화를 만들어보자
//🤍자바스크립트 표준 정착
// => 2009년 ECMAScript5 >> 2015년 ECMAScript6 - ..
// => 이제는 라이브러리의 도움 없이도 충분히 자바스크립트와 WebAPIs 만으로 모든 브라우저에서 잘 동작가능한 웹사이트, 웹어플리케이션 만들기 가능해짐
//🤍브라우저와 엔진
// => Chrome 브라우저 - V8 엔진 : node.js 와 ELECTRON에 많이 이용됨
// => MS Edge 브라우저 - Charkra 엔진 >> V8 엔진으로 대체 
// => Firefox 브라우저 - SpiderMonkey 엔진
// => Safari 브라우저 - JSCore 엔진
// => Opera 브라우저 - Carakan 엔진
// => Abode Flash 브라우저 - Tamarin 엔진
// => 2009년 ECMAScript5 >> 2015년 ECMAScript6 - ..
//🤍BABEL
// => 모든 사용자가 최신 버전의 브라우저 사용? NO >> 일단 개발자들은 최신 버전의 ECMAScript로 개발 >> BABEL(자바스크립트 trans compiler)을 이용해 ECMAScript5,6로 변환해 배포
//🤍SPA
// => (Single Page Application)
// => 하나의 페이지 내 부분적으로 데이터를 받아와 업데이트
// => 자바스크립트만으로도 충분히 구현 가능하지만(ajax 이용) SPA를 조금 더 쉽게 만들기 위해 react, angular, vue, backbon 같은 라이브러리 및 프레임워크 등장
//🤍node.js
// => 개요 : ECMAScript의 활발한 표준화와 강력한 v8 자바스크립트의 엔진의 등장
// => 의미 : v8 자바스크립트의 엔진을 이용한 백엔드에서 서비스를 구현할 수 있도록 만들어진 자바스크립트 런타임
// => 역할 : react native 이용해 모바일 어플리케이션 제작 가능, ELECTRON 이용해 데스크탑 어플리케이션 제작 가능


// ❤️레퍼런스(reference)
// => 프로그래밍을 공부하기 위한 자료, 레퍼런스는 명령어의 사전을 의미
// ❤️tutorial(안내서)
// => 프로그래밍을 공부하기 위한 자료, 튜토리얼은 언어의 문법을 설명
// ❤️자바스크립트의 API
// => API : Application Programming Interface의 약자 (VS  UI - User Interface)
// => 프로그램이 동작하는 환경을 제어하기 위해서 환경에서 제공되는 조작 장치, 이 조작 장치는 프로그래밍 언어를 통해서 조작할 수 있음
// => 자바스크립트의 API는 크게 자바스크립트 자체의 API와 자바스크립트가 동작하는 호스트 환경의 API로 구분
// ❤️자바스크립트 API 문서
// => ECMAScript (표준문서)
// => 자바스크립트 사전 (생활코딩) : https://opentutorials.org/course/50](https://opentutorials.org/course/50
// => 자바스크립트 레퍼런스 (MDN) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// => jscript 레퍼런스 (MSDN)
// ❤️호스트 환경의 API 문서
// =>  웹브라우저 API : https://developer.mozilla.org/en-US/docs/Web/API
// => Node.js API : https://nodejs.org/api/
// => Google Apps Script API
// ❤️javaScript
// => JavaScript는 웹페이지를 동적으로, 프로그래밍적으로 제어하기 위해서 고안된 언어다. 그렇기 때문에 오늘날 가장 중요한 플랫폼이라고 할 수 있는 웹브라우저에서 유일하게 사용할 수 있는 프로그래밍 언어이다.
// => 최근에는 HTML5의 적용이 가속화되면서 지금까지 모바일 환경에서 네이티브 앱(안드로이드, IOS)으로 구현해왔던 기능이 웹에서도 대부분 구현할 수 있게 되고 있다.
// => 웹이 크로스플랫폼이라는 점, 검색 가능하다는 점, 네이티브 디바이스를 제어할 수 있는 하드브리드 시스(phonegap 등)이 존재한다는 점에서 웹의 중요함은 더욱 확대될 전망이다.
// => 자연스럽게 웹에서 구동되는 유일한 언어인 JavaScript의 중요함도 점점 커질 것으로 예상된다. 자바스크립트로 할 수 있는 일을 참고하면 알 수 있지만, 최근에는 자바스크립트가 웹을 벗어나서 광범위하게 사용되고 있다.
// => 그 효용이 다각적이면서도 배우기 쉬운 점 때문에 자바스크립트는 중급 개발자나 프로그래밍 입문자 모두가 도전해볼만한 언어다.
// ❤️역사
// => HTML이 한번 화면에 출력된 후에는 그 형태나 동작방법을 바꿀 수 없는 문제를 해결하기 위해서 네스케이프에서 만들어졌다.
// => 이후에 이 언어는 마이크로소프트의 인터넷 익스플로러에 jscript라는 이름으로 탑재된다. 후에 ECMA라는 표준화 기구로 이 언어의 관리 주체가 옮겨졌다.
// ❤️ECMAScript
// => ECMAScript는 표준화 기구인 Ecma International에 의해서 관리되는 자바스크립트 표준안이다. 
// => 현재의 자바스크립트는 ECMAScript 3 기반으로 만들어졌고, 현재 시점(2013년)에서는 ECMAScript 5가 표준으로 정의 되었고 이 버전의 자바스크립트를 브라우저 벤더들이 자신들의 브라우저에 구현하는 작업이 한창이다.
// => 곧 ECMAScript 5의 새로운 기능들을 웹에서도 문제 없이 사용할 수 있게 될 것이다. ECMAScript 4는 기존의 자바스크립트와 너무 큰 차이점 때문에 표준으로 채택되지 못했다.
// ❤️JavaScript로 할 수 있는 일들
// => 웹페이지 스크립팅 - DOM , 서버 측 스크립팅 - node.js
// => 브라우저 확장기능 - Google Chrome extensions, Opera extensions, Apple Safari 5 extensions, Apple Dashboard Widgets, Microsoft Gadgets, Yahoo! Widgets
// => Google Desktop Gadgets, Serence Klipfolio, Adobe PDF, Tools in the Adobe Creative Suite, Photoshop, Illustrator, Dreamweaver, InDesign, OpenOffice.org
// => Unity 게임 엔진, Google Apps Script, Google Spreadsheets, Google Sites, 채팅 시스템, ChatZilla, XChat
// ❤️JavaScript에 영향을 준 언어
// => Java : 기본적인 문법
// => Scheme : 1급함수(first-class function) 함수의 인자와 반환값으로 함수를 사용
// => Self : prototype 기반의 상속 개념
// ❤️참고사이트
// => jQuery를 만든 John Resig의 JavaScript 고급 강의 : http://ejohn.org/apps/learn/
// => Firefox의 모질라 재단에서 운영중인 자바스크립트 튜토리얼 : https://developer.mozilla.org/ko/docs/JavaScript/Guide
// => JavaScript 사전 : http://opentutorials.org/course/50
// ❤️브라우저에서 동작하는 자바스크립트
// => HTML 문서의 요소 조작, 생성, 삭제 등, 문서 내 요소들의 스타일 지정 및 변경, 클릭 및 입력 등의 사용자가 발생시키는 이벤트 처리, 브라우저에 데이터 저장, 서버에 요청 전송, 서버로부터 최신의 데이터 패치
// ❤️브라우저 밖에서 동작하는 자바스크립트
// => 백엔드 개발(Express 등), 모바일 앱 개발(Ionic, React Native 등), 데스크톱 앱 개발(Electron 등)

//🤍실행방법
// => teminal 접속 >> cd 현재폴더의경로 >> node main.js >> hello world! 출력 확인
// => Web APIs 에서 console APIs 중 log 함수 이용해 콘솔창에 출력되는 것
// => index.html와 main.js연결 <script src="00-main.js"></script> >> 브라우저 접속 >> 개발자도구 console 접속 >>  hello world! 출력 확인
// => node.js에서 console APIs 중 log 함수 이용해 콘솔창에 출력되는 것
// => node.js 와 Web APIs 둘 다 콘솔에 관련된 API가 있기 때문에, 그리고 둘의 인터페이스가 동일하기 때문에 출력되는것
// => console API spec : https://console.spec.whatwg.org/ - 함수들은 어떤 것들이 있는지, 어떤 데이타를 파라미터 형태로 전달해야하는지 작성되어 있음
// => Web APIs의 console API : https://developer.mozilla.org/ko/docs/Web/API/Console_API
// => node.js의  console API : https://nodejs.org/api/console.html

//🤍WEB APIs
// => 브라우저가 제공하는 브라우저가 이해할 수 있는 함수들
// => 자바스크립트 언어 자체에 포함된 아이가 아님

//🤍DEV TOOLS(개발자도구)
// => 브라우저에 제공해주는 개발 툴
// => 공부나 현업에서 유용히 사용 가능
// => Elements 탭 : html, css 요소들 확인하고 검사 가능
// => Console 탭 : 코드에서 작성한 메세지 확인 가능, 자바스크립트 실행 가능 - 동적으로 요소들을 검사하고 붙여넣고 지우기 가능
// => Source 탭 : 디버깅에 유용, breakpoint를 걸어 디버깅 가능
// => network 탭 : 네트워크가 어떻게 발생하고 얼마나 많은 사이즈들이 오고가는지 검사 가능, performane분석 가능, memory분석 가능 ..

//🤍자바스크립트 사이트
// => ECMAScript(공식) : https://www.ecma-international.org/
// => MDN(공부) : https://developer.mozilla.org/ko/docs/Web/JavaScript

console.log("hello world!");