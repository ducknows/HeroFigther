import React from 'react';
import '../styles/AppFrame.css';

function AppFrame({ children }) {
    return (
      <div className="app-frame">
        
        <div className="top-left">
          <div className="circle"></div>
        </div>
        <div className="top-right">
          <div className="circle"></div>
        </div>
        <div className="bottom-left">
          <div className="circle"></div>
        </div>
        <div className="bottom-right">
          <div className="circle"></div>
        </div>
        {children}
      </div>
    );
  }
  
  export default AppFrame;