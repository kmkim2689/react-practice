import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Button from './Button';

function App() {
  // 로딩을 위한 state변수
  const [loading, setLoading] = useState(true);
  // 코인 목록을 위한 state 변수 => API 이용할 것
  const [coins, setCoins] = useState([]);

  // API는 한번만 불러올 것이므로, useEffect 이용
  useEffect(() => {
    // 응답 확인 방법 : network 탭에 들어가서, 새로고침 해보고 (여기서는) tickers라는 객체가 왔으면 성공임
    // response로부터 json 추출하기
    // json을 출력하기
    fetch("https://api.coinpaprika.com/v1/tickers").then(response => response.json()).then(data => setCoins(data));
    // 로딩이 끝나면, 로딩 여부를 false로 변경
    setLoading(false);
  }, []);
  
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {/* {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((item, index) => {
          // 응답 오는 객체의 형태를 보고 각 속성명을 확인하여 보여줄 정보들을 명시하면 된다.
          return <option>{item.name} ({item.symbol}): {item.quotes.USD.price}</option>
        })}
      </select> */}

      {/* 로딩이 되는 도중에는, 빈 select가 나올 것임. 이것은 보기 좋지는 않으므로 로딩이 끝날 때 나타나도록 하기 위해서 loading변수가 true라면 loading글자가, false라면 select가 나타나도록 한다. */}
      {loading ? <strong>Loading...</strong> : (<select>
        {coins.map((item, index) => {
          // 응답 오는 객체의 형태를 보고 각 속성명을 확인하여 보여줄 정보들을 명시하면 된다.
          return <option key={item.id}>{item.name} ({item.symbol}): {item.quotes.USD.price}</option>
        })}
      </select>)}
      
    </div>
  );
}

export default App;