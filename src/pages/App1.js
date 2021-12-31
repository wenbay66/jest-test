import React, { useState } from 'react';

const App1 = () => {

  const [ s_className, set_s_className ] = useState('bg_red');

  // 切換 button 的背景色
  const handleClick = () => {
    s_className === 'bg_red' ? set_s_className('bg_blue') : set_s_className('bg_red')
  }

  return (
    <div>
      <button 
        onClick={handleClick}
        className={s_className}
      >
        testBtn
      </button>
    </div>
  )
};

export default App1;