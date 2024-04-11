import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'EN', label: 'EN' },
  { value: 'KR', label: 'KR' },
];

function BasicMenu(props) {
  const defaultValue = options.find(option => option.value === 'KR');
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <header>
      <div className='header-logo'>
        <Link to={'/schedule/start'} className=''>
            <img src="images/logo.svg" alt="Logo"/>
        </Link> 
      </div>
      <nav className='gnb'>
        <ul className="">
          <li className=""> 
            <Link to={'/'} className=''>About IGS</Link> 
          </li>
          <li className=""> 
            <Link to={'/'} className=''>Pricing</Link> 
          </li>
          <li className=""> 
            <Link to={'/schedule/start'}>Schedule</Link> 
          </li>
          <li className=""> 
            <Link to={'/'}>Support</Link> 
          </li>
        </ul>
      </nav>

      <div className='header-nav-items'>
        <Select
          defaultValue={defaultValue}
          onChange={setSelectedOption}
          options={options}
        />
        <div className=''>
          Login
        </div>
      </div>
    </header>
  );
}

export default BasicMenu;