import React, { useState } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [ handle, setHandle ] = useState(null);
  const [ codes, setCodes ] = useState([]);
  let [ message, setMessage ] = useState('');

  const handleGetMessage = async (codes) => {
    let c = codes.join(" ");

    const response = await axios.get(`http://localhost:3333/api/?code=${c}`);
    const m = response.data.message;

    message = m;
    setMessage(message)
    return m;
  }

  const handleClick = async (code) => {
    if (code == 0) {
      clearTimeout(handle);
      if (codes.length > 0) {
        await handleGetMessage(codes);
      }
    
      codes.push(0);
      setCodes([...codes]);
      return;
    }

    if (handle) {
      const lastPosition = codes.length - 1;
      let lastCode = codes[lastPosition];

      if (lastCode[0] != code) {
        await handleGetMessage(codes);
        clearTimeout(handle);
        let newHandle = setTimeout( async () => {
          await handleGetMessage(codes)
          setHandle(null);
        }, 1000)
        setHandle(newHandle);

        codes.push(code);
        setCodes([...codes]);
      }
      else {
        const newCode = `${lastCode}${code}`;

        codes[lastPosition] = newCode;
        setCodes([...codes]);
  
        clearTimeout(handle);
        let newHandle = setTimeout( async () => {

          await handleGetMessage(codes)
          setHandle(null);
        }, 1000)
        setHandle(newHandle);
      }

    }
    else {
      codes.push(code)
      setCodes([...codes])

      let newHandle = setTimeout(async () => {
        await handleGetMessage(codes)
        setHandle(null);
      }, 1000)
      setHandle(newHandle); 
    }



  }

  return (
    <div className="box-phone">
      <section className="box-display">
        <h3 className="mark">Nokia</h3>

        <div className="visor">
          {message}
        </div>
      </section>
      <section className="box-buttons">
         <button className="button-action">1</button>
         <button className="button-action" onClick={() => handleClick('2')}>
           <span className="number">2</span>
           <span className="character">abc</span>
         </button>
         <button className="button-action" onClick={() => handleClick('3')}>
           <span className="number">3</span>
           <span className="character">def</span>
         </button>
         <button className="button-action" onClick={() => handleClick('4')}>
           <span className="number">4</span>
           <span className="character">ghi</span>
         </button>
         <button className="button-action" onClick={() => handleClick('5')}>
           <span className="number">5</span>
           <span className="character">jkl</span>
         </button>
         <button className="button-action" onClick={() => handleClick('6')}>
           <span className="number">6</span>
           <span className="character">mno</span>
         </button>
         <button className="button-action" onClick={() => handleClick('7')}>
           <span className="number">7</span>
           <span className="character">pqrs</span>
         </button>
         <button className="button-action" onClick={() => handleClick('8')}>
           <span className="number">8</span>
           <span className="character">tuv</span>
         </button>
         <button className="button-action" onClick={() => handleClick('9')}>
           <span className="number">9</span>
           <span className="character">wxyz</span>
         </button>
         <button className="button-action">*</button>
         <button className="button-action" onClick={() => handleClick('0')}>
           <span className="number">0</span>
           <span className="character">_</span>
         </button>
         <button className="button-action">#</button>
      </section>
    </div>
  );
}

export default App;
