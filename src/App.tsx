import React, { useState } from 'react';
import './App.css';
import Toolbox from './components/Toolbox';
import Info from './components/Info';
import Flow from './components/Flow';

function App() {
  const [selectedInfo, setSelectedInfo] = useState(null);
  return (
    <div className='h-screen p-4'>
      <div className='toolbox-info flex'>
        <div className='w-2/5'>
          <Toolbox />
        </div>
        <div className='w-3/5'>
          <Info selectedInfo={selectedInfo} />
        </div>
      </div>
      <div className='flow-block mt-4'>
        <Flow setSelectedInfo={setSelectedInfo} />
      </div>
    </div>
  );
}

export default App;
