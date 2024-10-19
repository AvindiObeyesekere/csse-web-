import React from 'react';
import { Outlet } from 'react-router-dom';

const WMA = () => {
  return (
    <div>
      <h1>WMA Component</h1>
      {/* This will render the nested route's component */}
      <Outlet />
    </div>
  );
};

export default WMA;
