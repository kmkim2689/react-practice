import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Button from './Button';

function App() {
  // const [counter, setCounter] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onChange = (event) => {
  //   setKeyword(event.target.value);
  // }
  // const onClick = () => {
  //   setCounter((prev) => prev + 1);
  // }
  // // 컴포넌트가 처음으로 render될 때, console에 rendered가 찍힘
  // // state 변수에 변화가 생기면, 당연히 해당 컴포넌트 전체 차원에서 재렌더링이 일어나기 때문에 rendered가 또 찍힘.
  // // 여기서 문제점 : 
  // // 다시 render될 때마다 반복실행되어도 괜찮은 코드가 있는 반면, 하지만, 그렇게 하지 않고 component가 처음 렌더링 될 때에만 컴포넌트의 코드가 실행되도록 해야 할 때가 있음. 즉 첫번째 렌더링 때에만 코드가 실행되도록 해야 할 때가 있음..
  // // 예를 들어, API를 통해 데이터를 가져올 때, 처음 렌더링 할 때에만 API를 호출하도록 하는 것이 훨씬 효율적일 것임. 
  // // 이것을 effect를 통해 해결할 수 있음.
  // // useEffect : 2개의 인자를 가지는 function
  // // 첫 번째 인자 : 컴포넌트가 처음 렌더링될 때 딱 한번만 실행하고 싶은 코드(화살표 함수를 직접 넣어도 되고, 함수명을 넣어도 되는 등)
  // // 두 번째 인자 : dependencies 배열이 들어감. 배열 안에는 변화를 감지할 변수들을 넣는다. 그리고 그 변수들에 대한 변화가 일어날 때 첫번째 인자에 넣은 함수가 실행되는 것이다. 참고로, 빈 배열이 주어지면, 그 코드는 처음 렌더링될 때 한번만 실행됨을 의미한다. 지켜볼 것이 없기ㅣ 때문

  // // 만약, 상단에 검색창을 두기 위해 input(type text)을 두고, state변수를 검색창에 들어가는 글자로 지정한다면, onChange를 설정함으로써 글자를 추가하거나 삭제할 때마다 state의 변경이 일어나기 때문에 코드 재실행 및 렌더링이 수도 없이 일어나게 된다. 이는 매우 비효율적이다. 

  // // 다른 문제점으로는, keyword 이외에 다른 state변수(counter)가 변화할 때에도 검색이 다시 이뤄진다는 것이다. 이러한 관심사 분리를 위하여 effect 함수가 필요한 것이다.

  // // 코드의 특정한 부분만이 변화했을 때, 원하는 코드들만 실행되도록 하는 방법이 필요함

  // console.log('rendered');
  // useEffect(() => {
  //   console.log("call the api")
  // }, []);

  // // keyword가 변화할 때에만 함수를 실행하도록 하는 effect
  // useEffect(() => {
  //   // 처음 렌더링 될 때에는 검색을 하지 않도록 하기 위해 조건을 걸어줌
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("search for", keyword);
  //   }
  // }, [keyword]);

  // useEffect(() => {
  //   console.log("counter changed", counter);
  // }, [counter]);

  // useEffect(() => {
  //   console.log("keyword or counter changed");
  // }, [counter, keyword]);
  
  // return (
  //   <div>
  //     <input type="text" placeholder='search here' value={keyword} onChange={onChange} />
  //     <h1>
  //       {counter}
  //     </h1>
  //     <button onClick={onClick}>click me</button>
  //   </div>
  // );

  // cleanup function
  // 일례로, 검사에서 element 메뉴에서 태그들을 보면, 버튼을 누를 때마다 구성되는 태그들이 변경되는 것을 알 수 있다. 특히나, h1 태그가 버튼을 클릭함에 따라 dom에서 사라지기도 하고(hide) 다시 생기기도(show) 한다. => destroy. 아예 코드에도 남아있지 않고 사라짐.
  // 특정 component가 destroy될 때에도 원하는 코드를 실행할 수 있음
  
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
  
}

function Hello() {
  function byeFunc() {
    console.log("bye");
  }

  function hiFunc() {
    console.log("hi");
    return byeFunc;
  }

  useEffect(hiFunc, []);

  // useEffect(() => {
  //   console.log("component created!")
  //   // useEffect 첫번째 인자 함수 내부에서 return문으로 반환하는 함수 : component가 destroy되면서 실행되는 코드 => cleanup function!!
  //   // 이것을 통하여, component가 언제 create되었는지, 언제 destroy되었는지 알 수 있음...
  //   return () => console.log("component destroyed!");
  // }, []);

  return (
    <h1>hello</h1>
  );
}

// 버튼 클릭시, created :) , destroyed :(, created :) 메세지가 3개가 등장하였습니다.
// 이유는 index.js의 React.StrictMode 가 활성화 되어 있어서네요.
// 급하게 강의를 따라하느라 끄라고 했었는지는 기억이 잘 나지 않지만 혹시 저와 같이 함수가 두번 실행되는 경우 (double invoke)가 발생하면 위의 코드를 주석처리 하시면 될것 같습니다.

// strictmode의 경우, 개발 과정중 안전을 위해 켜는 기능이며 배포시에 자동으로 해제된다고 합니다.


export default App;