import React, { useState } from 'react';
import './App.css';
import Flow from './components/Flow';
import Info from './components/Info';

function App() {
  const [selectedInfo, setSelectedInfo] = useState(null);
  return (
    <div className='h-screen grid grid-cols-12'>
      <div className='col-span-9'>
        <Flow setSelectedInfo={setSelectedInfo} />
      </div>
      <div className='col-span-3' style={{ borderLeft: '1px dashed #c0c0c0' }}>
        <Info selectedInfo={selectedInfo} />
      </div>
    </div>
  );
}

export default App;
