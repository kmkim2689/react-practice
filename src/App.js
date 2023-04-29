import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Button from './Button';

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  // 4. 여러개의 todo를 받기 위하여 빈 array를 하나 정의한다
  const [toDos, setToDos] = useState([]);
  console.log(toDo);
  // 2. 새로고침되는 것을 방지하기 위하여, event 하위의 preventDefault 함수를 이용
  const onSubmit = (event) => {
    event.preventDefault();
    // 3. 아무것도 입력 안해놓고 submit되는 것을 막기 위하여 조건을 걸어줌
    if (toDo === "") {
      return;
    } else {
      // 5. 배열에 추가. 그런데 state변수이므로 push를 통해 직접 넣을 수는 없음. 직접 state 변수를 수정할 수는 없기 때문에, setState를 사용한다. 인자에는 함수를 넣는데, 들어가는 함수의 인자로 기존의 state변수 값이 넘어가게 된다.
      // 이 과정에서, 기존의 배열에서 새로운 원소를 추가하여 새로운 배열을 만들고 싶을 때, 스프레드 연산자를 사용하면 된다. 그냥 [toDo, currArray]이런식으로 하면 배열 안에 currArray배열이 다시 들어가는 형태가 되어버림.
      // 결국, state 변수 변경을 위해, setState 함수에 어떤 특정 값을 넣어줄 수도 있고, 함수를 넣어줄 수도 있다는 것이 된다. 만약 함수를 넣어준다면, 첫번째 인자로 현재 state 값을 보낸다. 이름은 무엇을 하든 자유
      setToDos((currArray) => [toDo, ...currArray])
      setToDo("");
      // 여기서 로그를 찍어보면 최근에 추가한 것이 반영이 되어있지 않음...
      // console.log(toDos);
    }
  };
  console.log(toDos);

  // form 태그 하위의 onSubmit 콜백 : 폼이 버튼 클릭 등을 통해 제출되었을 때의 동작을 정의
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type='text' placeholder="write your to dos" />
        {/* 1. 버튼 태그의 경우, 기본적으로 설정된 동작 타입이 submit이므로 버튼을 누르면 기본적으로 제출로 처리되어 새로고침됨 */}
        <button>Add To Do</button>
      </form>
      <hr />
      {/* toDos 배열 안의 아이템들을 각각 하나의 컴포넌트로 만들어주기 위하여, map() 함수를 이용 
      map() 안에 들어가는 것은 함수인데, 그 함수는 배열의 모든 요소에 대해 각각 실행된다는 특징이 있음. 모든 요소에 대해 실행되고 그 변경된 값은 toDos 배열로 다시 산출된다. 즉 toDos 배열이 새로운 값을 변경되어 출력된다는 것.
      map안에 들어가는 함수의 매개변수 중 첫번째 매개변수를 이용할 수 있는데(이름은 무엇이든 상관없음), 그 매개변수는 배열의 현재 처리되는 item을 가리킨다. 
      추가적으로, 리액트에서는 li의 각 요소에 key값을 설정해주어야 한다. 각 li 요소를 구분해야 하기 때문(콘솔 경고 방지). 따라서, map 함수의 두번째 매개변수인 index값을 이용하여 key값을 설정한다.*/}
      <ul>
        {toDos.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      
      </ul>
      
    </div>
  );
}



export default App;