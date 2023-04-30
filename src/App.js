import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/hello" element={<h1>hello</h1>}>
      </Route>
      <Route path="/" element={<Home />}>
        {/* 여기에 컴포넌트를 작성한다. 
        보통, path가 "/"라면 홈화면을 의미
      element 속성에는 띄워줄 component를 import하기만 하면 끝. 앱을 실행해보면, 도메인 뒤에 "/"만 붙어있음을 알 수 있다. 이렇게 함으로써, url마다 정확히 원하는 컴포넌트를 보여줄 수 있게 된다.*/}
      </Route>
      <Route path="/movie/:id" element={<Detail />}>
      </Route>
    </Routes>
  </Router>
  )
}

export default App;

/*
react.js 앱에서 페이지를 전환하는 방법
화면의 어느 요소를 눌렀을 때, 다른 페이지로 넘어가는 방법

map을 이용하여, 배열 안의 여러 요소들을 순회하여 각 요소들을 렌더링하려고 할 때, 반드시 key 속성을 넣어주어야 한다. key는 각각의 아이템마다 유일해야 한다.

React Router란?
페이지를 전환하기 위하여 사용되는 것.

route : 각 하나의 화면, url 혹은 페이지와 대응된다.
ex)
home route : 모든 영화에 대한 개괄을 보여줌
movie route : 각 영화에 대한 자세한 정보를 보여줌

사용 방법
https://reactrouter.com/en/6.11.0/start/tutorial
1. 터미널에 다음과 같이 입력
npm install react-router-dom

2. 화면들을 담기 위하여 아래와 같이 2개의 폴더를 마련한다.
- routes -> 하위에 Home.js 파일(컴포넌트)을 만든다. 이는 홈화면 하나를 위한 파일이다. -> 여태 App.js에서 작업한 것들을 모두 그곳으로 옮긴다.
그리고, 영화에 대한 상세정보를 보여주는 화면을 만들기 위하여 Detail.js 라우터를 만든다.
- components -> 하위에 Movie.js 컴포넌트를 만든다.

3. 이러한 과정을 거치면, App.js에는 아무것도 남지 않게 된다.(return null;)
이제 App.js가 하게 되는 역할은 router를 render하는 것이다. 

url에 따라서, 각각의 다른 컴포넌트를 보여주기 위하여,
4. route를 위해 필요한 것들을 import한다.
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

참고로, BrowserRouter와 HashRouter가 있는데, BrowserRouter는 우리가 생각하는 그대로의 url을 나타내고, HashRouter는 뒤에 #이 붙는다는 것에서 차이가 있다.

5. 형태
<Router>
  <Routes>
    <Route path="url" element={<컴포넌트명 />}>
    </Route>
  </Routes>
</Router>

6. 한 Route에서 다른 Route로 이동하는 방법
- 영화 제목 클릭 시, Detail 스크린으로 이동
- HTML에서 a 태그 이용 가능
예를 들어, Movie 컴포넌트의 제목 h2 태그를 클릭하면 이동하도록 하기 위해 <h2><a href="/movie"></a></h2> 이런 식으로
- a태그를 사용하는 것의 문제점 : 페이지 전체가 다시 실행됨 => 이는 React의 장점을 십분 활용하지 못하는 방법이다.
- 이 때, "Link"라는 컴포넌트를 사용한다.
- Link : 브라우저 새로고침 없이 다른 페이지로 이동할 수 있도록 하는 컴포넌트
- Link의 to 속성을 이용. to 속성에 이동할 url을 작성

6. 동적 url 만들기 - parameters
'동적' : url에 변수를 넣을 수 있다는 의미
ex) /movie/123
여기서 123은 영화의 넘버를 나타내는 변수를 의미

사용법 : route 컴포넌트에서 ":변수명" 명시
ex) /user/:id
=> /user/10 : 아이디가 10번인 user
그 후, 컴포넌트에서 Link 태그의 to 속성에 
식별자 변수를 넣는다.`${변수명}`

7. useParams 사용(Detail 컴포넌트 참고)
*/