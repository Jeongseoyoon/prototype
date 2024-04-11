import React from 'react';
import BasicMenu from '../components/menus/BasicMenu';

function SubLayout({children}) {
  return (
    <div>
      <BasicMenu></BasicMenu>
      <div className='sub-container'>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default SubLayout;