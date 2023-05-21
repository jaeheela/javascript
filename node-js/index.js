//Express
// => node.js 실행환경으로 express프레임워크(백-서버) 구축 - Node.js에서 실행되는 웹 프레임워크
// => 서버 측 JavaScript를 작성하는 데 사용 
// => 참고로 Node.js 환경에서 React와 Express를 함께 실행하면, React를 사용하여 프론트 엔드 웹 애플리케이션을 작성하고, Express를 사용하여 백엔드 서버 구축 가능

//node js란? - 런타임
// => Chrome V8 JavaScript 엔진(크롬브라우저꺼) 으로 빌드된 자바스크립트 런타임
// => V8엔진 : 자바스크립트 컴파일, 실행해주는 소프트웨어
// => 런타입 : 어떤 것을 만들고 실행해주는 일련의 구성요소들로 이루어진 실행환경, 즉 무언가를 실행해줌!!
// => node.js : 자바스크립트로 코드를 짜면 그걸 실행해주는 환경
// => 프레임워크 : 실행이 되는 환경에서 코드를 짤 때 쉽게짤 수 있도록 제공해주는 틀, 뼈대

//JAVASCRIPT 언어로 서버구축
// => express.js (프레임워크 - 나는 보통 3000prot로 많이 이용) - runtime: node.js

//JAVA 언어로 서버구축
// => springboot , spring (프레임워크 - 나는 보통 8080prot로 많이 이용) - runtime: jre(java runtime environment)

//node -v
//node index.js >> hello world
//console.log("hello world")

//npm에서 검색 >> figlet 모듈 이용할 것임
//npm init (npm 이용해서  패키지를 시작할게) >> figlet >> enter ... >> enter... >> package.json 생성됨 >> node_modules폴더 생성됨 
// >> npm install figlet >> pakage-lock.json 생성됨 

//npm install <module>
// => node.js 환경에서 모듈 다운받아 사용하는 명령어 (npm i <module>)
// => npm install <module> --save (요즘 디폴트가 됨, 원래는 --save 옵션을 줘야 이 모듈을 pakage.json에 입력이 되어 이 모듈을 이 폴더에서 사용하는구나 인식했었음)
// => npm install <module> --g (전역으로 모듈을 설치하는 명령어, D드라이브 폴더나 C드라이브폴더에 가도 보임)
// => 전역으로 설치하면 충돌할 가능성이 높으므로 충돌을 방지하기 위해 전역이 아닌 프로젝트 단위로 모듈 설치해서 사용하기

//package.json
// => 내용을 대략적으로 확인하기 위함 
// => 다운받은 npm모듈 관리해줌 - "dependencies": { "figlet": "^1.6.0"}
//package-lock.json
// => 내용을 상세하기 확인하기 위함
// => pakage.json이 해당 폴더의 모듈을 관리한다고 했는데, 더 구체적인 버전이 작성되어있음, figlet을 어디서 설치했는지, 버전이 뭔지.. 정확한 정보가 기록되어 있음
//node_modules폴더 
// => node_modules폴더 안에 우리가 설치한 모듈들이 다 기록됨 

//npm uninstall <module>
// => 안쓰는 모듈 삭제하기

//npm >> figlet >> simple usage >> 공식문서에 간단한 사용법을 복붙해서 실행시켜보기 >> npm uninstall figlet
/*
var figlet = require("figlet"); //figlet모듈을 요구할게 - 피글렛 모듈을 사용할 수 있는 변수
figlet("HIHIHI World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
*/

//API 서버 구축하기
// 서버프레임워크 : express.js (즉, 값을 돌려주는, 응답하는 API 구축) 
//express.js 프레임워크 설치 >> npm i express >> node index.js (node.js 실행) >> localhost3000 (접속) >> ctrl+c (종료)
/*
//npm >> express >> simple usage
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.listen(3000)
*/

//https://expressjs.com/ko/starter/hello-world.html >> node index.js >> localhost3000 >> ctrl+c
const express = require('express')
const cors = require('cors')
const { setTimeout } = require('timers/promises')

const app = express()
const port = 3000 //port 3000포트에 node.js 서버가 실행중이야
app.use(cors()) //조건을 걸기 가능  -cors() : 모든 요청에 허용 , cors(조건) : 조건을 건 요청애만 허용


//app.get('라우팅',callback) : HTTP 메소드 GET
// => 라우팅 : 라우팅에 따라 보여지는 HTML 페이지가 달라짐  ex) / - 기본주소 , /about - 소개페이지, /board - 게시판페이지, /board/write - 게시판작성페이지
// => callback(콜백함수) : 다른 코드의 인수로서 넘겨주는 실행 가능한 코드  - 앞에 app.get()함수가 끝나고(그 다음에 실행할 함수)
// => ex. setTimeout(() => console.log("1초지남"), 1000) : 1000ms 뒤에 콜백함수를 실행하는 함수
// => 해석) HTTP 메소드 GET으로 해서 "/" 라우팅으로 받으면 그 다음에 콜백함수를 실행해줘
app.get('/', (req, res) => {
    res.send('Hello World!') //response 객체의 바디에 - Hello World! 보낼게
})
app.get('/hihi', (req, res) => {
    res.send('HI~~~~~~~~ HIHI~~~~~~!')
})
app.get('/getget', (req, res) => {
    res.send('GET!!!!')
})
// => 해석) 3000번 포트로 들고나면(listen) 그 다음에 콜백함수를 실행해줘
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// => 최종해석) node index.js (서버실행 start) >> 서버는 localhost3000 포트로 항상 listen 중 >> 콘솔에 Example app listening on port 3000 출력되는 것으로 확인 가능
// >> 그러다 클라이언트가 http://localhost:3000 방식으로 접근 >> Hello World!라고 응답해 화면에 출력됨
// >> 그러다 클라이언트가 http://localhost:3000/hihi GET 방식으로 접근 >> HI~~~~~~~~ HIHI~~~~~~!라고 응답해 화면에 출력됨
// >> 그러다 클라이언트가 http://localhost:3000/getget GET 방식으로 접근 >>GET!!!!라고 응답해 화면에 출력됨
// => 라우팅에는 한글이 들어가면 안됨 - 넣고싶다면 인코딩해서 변경해줘야함 - url Encoder 사이트 이용하기

// http://localhost:3000/dog
app.get('/dog', (req, res) => {
    //res.send('강아지')            //response header : Content-Type: text/html; charset=utf-8
    //res.send('<h1>강아지</h1>')   //response header : Content-Type: text/html; charset=utf-8
    //res.send({ '강아지': '멍멍' }) //response header : Content-Type: application/json; charset=utf-8
    res.json({ '강아지': '멍멍' })   //명시적으로 json으로 응답하겠다 표현하므로, 좀 더 빠른 응답 가능
})

// http://localhost:3000/cat
app.get('/cat', (req, res) => {
    //res.send('고양이') 
    //res.send('<button>고양이</button>')
    res.send({ '고양이': '야옹' }) //{"고양이":"야옹"}
})

//GET으로 전달값 보내기
// => http://localhost:3000/user/:id
// => 1. 파라미터 이용 : 콜론 + 변수명으로 작성 - ex) :id
// => http://localhost:3000/user/jeri
// => 2. 쿼리스트링 이용 : ?key&value=key?value..
// => http://localhost:3000/user/jeri?age=20&address=seoul
app.get('/user/:id', (req, res) => {

    //파라미터 변수에 담기
    const p = req.params
    //console.log(p) //{ id: 'jeri' }
    //console.log(p.id) //jeri

    //쿼리스트링 변수에 담기
    const q = req.query
    //console.log(q)  //{ age: '20', address: 'seoul' }
    //console.log(q.age) //20
    //console.log(q.address) //seoul

    res.send({ 'userid': p.id, 'userAge': q.age, 'userAddress': q.address }); //{"userid": "jeri","userAge": "20","userAddress": "seoul"}
})

//POST
// => http://localhost:3000/user/:id
// => http://localhost:3000/user/jeri + 리퀘스트 body에 전달값 보내기(age=20&address=seoul) >> POSTMAN 이용
app.post('/user/:id', (req, res) => {
    //파라미터, 리퀘스트 body 출력
    console.log(req.params) //{ id: 'jeri' }
    console.log(req.body)
    res.send("ok")
})



//동물소리 API 서버 만들기
//GET
// => http://localhost:3000/sound/:name
// => http://localhost:3000/sound/dog
// => http://localhost:3000/sound/cat
app.get('/sound/:name', (req, res) => {
    const { name } = req.params //파라미터로 넘어온 값을 바로 name변수에 담을 수 있음 즉, dog , cat.. 등 바로 쓸 수 있음
    //console.log(name) //http://localhost:3000/sound/dog >> dog 출력됨
    if (name == "dog") {
        res.json({ 'sound': '멍멍' })
    } else if (name == "cat") {
        res.json({ 'sound': '야옹' })
    } else {
        res.json({ 'sound': '알수없음' })
    }
})

//CORS 이슈?
// => HTML 파일에서 어떠한 서버로 요청했을 때 보안상 되게 이상한 곳에서 요청할 수 있기 때문에 기본적으로 HTML 파일에서 요청온 것은 차단함
// => 그냥 HTML을 아무곳에서나 요청해도 응답될 수 있도록 만들어야함 >> cors 설정 필요
// => cors 역할 : HTML 요청에 응답이 잘 되도록 해줌 >> 다른 프론트엔드에서 요청와도 응답을 잘 해줄 수 있음
// => require cors 모듈을 설치해서 적용하기
// => npm 사이트 접속 >> cors 검색 >> npm install cors >> package-lock.json - "dependencies": {"cors": "^2.8.5","express": "^4.18.2"} 확인 가능
// >> Simple Usage (Enable All CORS Requests) 복 붙 >> 사용할 cors 선언을 맨 위로 올림 

// => 해당 실습은 내 컴퓨터의 loacal로 프론트페이지(index.html)와 백엔드페이지(index.js - express프레임워크로 구축)를 연결한 것이다.