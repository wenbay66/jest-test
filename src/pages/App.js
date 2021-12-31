import React, { useState } from 'react';
import logo from './logo.svg';


function App() {

  const [ buttonColor, setButtonColor ] = useState('red');
  const [ s_disabled, set_s_disabled ] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        data-testid="testBtn"
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={s_disabled}
      >
        Change to {newButtonColor}
      </button>
      <input 
        type='checkBox' 
        data-testid="testCheckBox" 
        defaultChecked={s_disabled}
        aria-checked={s_disabled}
        onChange={e => set_s_disabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
