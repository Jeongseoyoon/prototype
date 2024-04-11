import React from 'react';
import SubLayout from '../../layout/SubLayout';
import '../../styles/start_pages.scss';

function StartPages(props) {
  return (
    <SubLayout>
      <div className='start-container'>
        <div className='img flex_center'>
          <img src='images/PaperDrawingAlmazSatellite.png'></img>
        </div>
        <div className='title'>
        Get Started
        </div>
        <div className='txt'>
        Use the IOPs Ground Station to communicate with satellites and communicate IOPs Ground Station with wireless or satellite observations, and to downlink data.
        </div>
        <div className='card_wrap'>
          <div className='card'>
            <div className='title'>
              Register a Spacecraft
            </div>
          </div>
          <div className='card'>
            <div className='title'>
              Register a Spacecraft
            </div>
          </div>
          <div className='card'>
            <div className='title'>
              Register a Spacecraft
            </div>
          </div>
        </div>
      </div>
    </SubLayout>
  );
}

export default StartPages;