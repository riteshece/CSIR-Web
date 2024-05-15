import React from 'react';
import Sidebar from '../Components/Sidebar';
import MainComponent from '../Components/MainComponent';

function Main() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainComponent />
    </div>
  );
}

export default Main;