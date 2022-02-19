import { useState } from 'react';
import './styles/index.css'; 

function FormInput({container,attr,placeholder,handleInputValue}) {
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
  };
  const updateCard = (e) => { 
    e.persist();
    if(e.target.value.length < 20 ) {
      addSpacing(e.target.value);
      handleInputValue(e.target.value);
    }
  }
  const listenTODelete = (e) => {
    if(e.key === 'Backspace' || e.key === 'Delete') setStatus(true)
    else setStatus(false)
  }
  return (
    <div>
      <div className={container}>
        <input type="text" value={card} onChange={updateCard} onKeyDown={listenTODelete} className={attr} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default FormInput;
