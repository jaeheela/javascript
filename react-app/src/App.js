import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //react로 부터 온 useState 함수 사용할게!

/*
//1. 컴포넌트(사용자 정의태그) 미사용한 리액트
function App() {
  return (
    <div>
      <header>
        <h1><a href='/'>WEB</a></h1>
      </header>
      <nav>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
          <li><a href='/read/3'>js</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        hello, WEB
      </article>
    </div>
  );
}
export default App;
*/


/*
//2. 컴포넌트(사용자 정의태그)를 사용한 리액트
// => 규칙 : 컴포넌트(사용자 정의태그 - 함수)의 함수명의 첫문자는 반드시 대문자로 작성
function Header() { //컴포넌트1
  return <header><h1><a href='/'>WEB</a></h1></header>
}
function Nav() { //컴포넌트2
  return <nav><ol>
    <li><a href='/read/1'>html</a></li>
    <li><a href='/read/2'>css</a></li>
    <li><a href='/read/3'>js</a></li>
  </ol></nav>
}
function Article() { //컴포넌트3
  return <article>
    <h2>Welcome</h2>
    hello, WEB
  </article>
}
function App() {
  return ( //컴포넌트 사용함
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  )
}
*/

/*
//3. 컴포넌트의 PROPS 속성(사용자 속성값) - 컴포넌트를 사용하는 외부자를 위한 데이타
// => 사용자 속성값 : 값 사용 가능(3), 변수 사용 가능(3), 함수 사용 가능(4)
// => PROPS의 역할 : props 객체의 값이 변경되면 새로운 UI를 만들어 return 해줌
// => 규칙 : 컴포넌트 내 props(사용자 정의 속성값을 가진 객체)는 object 객체로 전달되므로 매개변수로 받아 사용 가능
// => 규칙 : 컴포넌트 내 props(사용자 정의 속성값)을 사용하기 위해서는  {} 안에 표현
function Header(props) { //컴포넌트1
  //console.log('props = ', props) //props =  {title: 'REACT'}
  //console.log('props.title = ', props.title) //props.title =  REACT
  return <header>
    <h1><a href='/'>{props.title}</a></h1>
  </header>;
}
function Nav(props) { //컴포넌트2
  //console.log('props = ', props) //props =  {topics: '{topics}'}
  //console.log('props.topics = ', props.topics) //props.topics =  {topics}
  //console.log('props.topics[0] = ', props.topics[0]) //props.topics[0] =  {id: 1, title: 'html', body: 'html is ...'}
  //console.log('props.topics[0].id = ', props.topics[0].id) //props.topics[0].id =  1
  const lis = [];

  // => 주의 : 반복문 사용 시 리액트는 태그를 자동으로 생성할 시 리액트가 추적할 근거가 필요하므로 근거로서 각 태그의 구분지인 key prop을 부여해야함
  // => 전체 태그가 아닌 반복문 안에서만 고유하면 됨
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li >)
  }
  return <nav><ol>
    {lis}
  </ol></nav>;
}
function Article(props) { //컴포넌트3
  //console.log("props = ", props) //props =  {title: 'welcome', body: 'hello, REACT'}
  //console.log("props.title = ", props.title) //props.title =  welcome
  //console.log("props.body = ", props.body) //props.body =  hello, REACT
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}
//규칙 : <Nav topics="topics"></Nav> : topics라는 문자열 전달 >> <Nav topics={topics}></Nav> : 함수 내 topics라는 변수 전달
function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ];
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="welcome" body="hello, REACT"></Article>
    </div>
  );
}
export default App;
*/

/*
//4. 컴포넌트의 EVENT 발생
// => event 객체: 이벤트 상황을 제어할 수 있는 여러가지 정보 및 기능을 가진 객체
// => event.preventDefault() : 해당 태그(a)가 가진 기본 이벤트 동작을 멈추는 메소드 - 클릭이벤트 발생해도 reload되지 않음
// => props.onChangeMode() : 사용자 정의 함수
// => event.target : 이벤트를 발생시킨 태그 - <a>
// => event.target.id : 이벤트를 발생시킨 태그의 id 속성값
function Header(props) { //컴포넌트1
  return <header>
    <h1><a href='/' onClick={function (event) {
      event.preventDefault()
      props.onChangeMode()
    }}>{props.title}</a></h1>
  </header>;
}
function Nav(props) { //컴포넌트2
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id} id={t.id} onClick={(event) => {
          event.preventDefault()
          props.onChangeMode(event.target.id)
        }}>{t.title}</a></li >)
  }
  return <nav><ol>
    {lis}
  </ol></nav>;
}
function Article(props) { //컴포넌트3
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}
function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ];
  return (
    <div>
      <Header title="REACT" onChangeMode={() => { alert('Header') }}></Header>
      <Nav topics={topics} onChangeMode={(id) => alert(id)}></Nav>
      <Article title="welcome" body="hello, REACT"></Article>
    </div>
  );
}
export default App;
*/

/*
//5. 컴포넌트의 State 객체
// => vs PROP 속성과 비교해서 이해하기
// => PROP을 통해 입력된 데이타를 우리가 만든 컴포넌트 함수가 처리하여 리턴값을 만들면 리턴값이 새로운 UI로 탄생함
// => 객체의 값이 변경되면 새로운 UI를 만들어 return 해줌
// => PROP 객체 : 컴포넌트를 사용하는 외부자를 위한 데이타
// => State 객체 : 컴포넌트를 만드는 내부자를 위한 데이타 - import 선언 필수 : import { useState } from 'react';
// => useState(초기값) : 상태를 만들어주는 함수 , 인자는 state의 초기값, 반환값은 배열
// => useState( ) 함수의 반환값 : 배열의 0번째 원소는 상태의 값을 읽을 때 쓰는 데이타이고, 1번째 원소는 그 상태의 값을 변경할 때 사용하는 함수
function Header(props) { //컴포넌트1
  return <header>
    <h1><a href='/' onClick={function (event) {
      event.preventDefault()
      props.onChangeMode()
    }}>{props.title}</a></h1>
  </header>;
}
function Nav(props) { //컴포넌트2
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id} id={t.id} onClick={event => {
          event.preventDefault()
          props.onChangeMode(Number(event.target.id))
        }}>{t.title}</a></li >)
  }
  return <nav><ol>
    {lis}
  </ol></nav>;
}
function Article(props) { //컴포넌트3
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}
//useState( )의 역할 
// => setMode()를 통해 mode값이 바뀌면 컴포넌트가 새로 실행되면서(App()) 새로운 mode값이 지정됨
// => setId()를 통해 id값이 바뀌면 컴포넌트가 새로 실행되면서(App()) 새로운 id값이 지정됨
function App() {
  // const mode = "WELCOME";
  // const _mode = useState("WELCOME")
  // console.log("_mode = ", _mode) //_mode =  (2) ['WELCOME', ƒ]
  // const mode = _mode[0]; //상태의 값을 읽을 때 쓰는 데이타
  // const setMode = _mode[1]; //상태의 값을 변경할 때 사용하는 함수
  const [mode, setMode] = useState("WELCOME") //변수명은 아무렇게나 작성 가능 - mode,setMode
  const [id, setId] = useState(null)

  const topics = [ //<Nav> 태그에 사용
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ];

  //mode의 값에 따라 각기 다른 태그 보여줌 - mode의 값은 이벤트가 발생했을 때 변경되게 만들것임
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="welcome" body="hello, welcome"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        setMode("WELCOME")
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode("READ")
        setId(_id)
      }}></Nav>
      {content}
    </div>
  );
}
export default App;
*/


//6. CRUD 기능
function Header(props) { //컴포넌트1
  return <header>
    <h1><a href='/' onClick={function (event) {
      event.preventDefault()
      props.onChangeMode()
    }}>{props.title}</a></h1>
  </header>;
}
function Nav(props) { //컴포넌트2
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id} id={t.id} onClick={event => {
          event.preventDefault()
          props.onChangeMode(Number(event.target.id))
        }}>{t.title}</a></li >)
  }
  return <nav><ol>
    {lis}
  </ol></nav>;
}
function Article(props) { //컴포넌트3
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}
function Create(props) { //컴포넌트4
  return <article>
    <h2>Create</h2>
    <form onSubmit={(event) => {
      event.preventDefault()
      const title = event.target.title.value
      const body = event.target.body.value
      props.onCreate(title, body)
    }}>
      <p><input type='text' name='title' placeholder='title' /></p>
      <p><textarea name='body' placeholder='body'></textarea></p>
      <p><button type='submit'>Create</button></p>
    </form>
  </article >;
}
function App() {
  const [mode, setMode] = useState("WELCOME")
  const [id, setId] = useState(null)
  const [nextId, setNextId] = useState(4)
  const [topics, setTopic] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]);

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="welcome" body="hello, welcome"></Article>
  } else if (mode === "READ") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if (mode === "CREATE") {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body }
      topics.push(setTopic(newTopic.id))
    }}></Create>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        setMode("WELCOME")
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode("READ")
        setId(_id)
      }}></Nav>
      {content}
      <hr></hr>
      <a href="/create" onClick={(event) => {
        event.preventDefault()
        setMode("CREATE")
      }}>create</a>
    </div>
  );
}
export default App;
