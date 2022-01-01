import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App2 = () => {

  const [ s_username, set_s_username ] = useState({});
  
  const [ s_staffList, set_s_staffList ] = useState([]);

  // 渲染時取得登陸人員
  useEffect(() => {

    let moment = true;

    const call = async () => {
      
      const res = await axios.get('http://localhost:3030/user');

      if(moment) set_s_username(res.data);

    }

    call();

    return () => moment = false;

  }, []);

  // 取得員工清單
  const getStaff = async () => {
    
    const res = await axios.get('http://localhost:3030/staff');

    set_s_staffList(res.data)

  }

  return(
    <>
      <div className='LoginName'>
        {s_username.username}
      </div>

      <button
        className='btn'
        onClick={getStaff}
      >
        取得員工清單
      </button>

      {s_staffList.length > 0 ? (
        s_staffList.map(item => <div key={item.staffID}>{item.staffNM}</div>)
      ) : null}
    </>
  )
};

export default App2;