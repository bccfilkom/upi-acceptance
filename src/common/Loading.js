import React, { Component } from 'react';

export default ({cube, circular, wrapped = true}) => {
  return(
    <div>
      <div className={!wrapped ? '' : 'loading-container'}>   
      <div className={!wrapped ? '' : 'loading-wrapper'}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="loader"></div>
        <div className="loader2"></div>
        <div className="loader3"></div>
      </div>
      </div>
      </div>
    </div>
  );
}