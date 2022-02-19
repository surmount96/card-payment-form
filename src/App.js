import { useState } from 'react';
import './App.css';

function App() {
  const [card,setCard] = useState('');
  const [status,setStatus] = useState(false);

  const addSpacing = (value) => {
    let data = value;
    let strLength = value.length;
    let tracker = [4,9,14];
      if(tracker.includes(strLength) && !status){
        data += ' ';
      }
      setCard(data);
      console.log(value);
  };

  const updateCard = (e) => { 
    e.persist();
    if(e.target.value.length < 20 ) {
      addSpacing(e.target.value);
    }
  }

  const listenTODelete = (e) => {
    if(e.key === 'Backspace') setStatus(true)
    else setStatus(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="h-40 my-4 bg-white rounded-md">
          <input type="text" value={card} onChange={updateCard} onKeyDown={listenTODelete} className="focus:outline-red-100 py-3 px-10 text-sm" placeholder="5399 9089 1234 1970" />
        </div>
      </header>
    </div>
  );
}

export default App;
