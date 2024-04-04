import React from 'react';
import { Link } from 'react-router-dom';

function BasicMenu(props) {
  return (
    <header>
      <div className='inner'>
        <div className='header-wrap'>
          <div className=''>
            <Link to={'/'} className=''>
                <img src="images/logo.png" alt="Logo"/>
            </Link> 
          </div>
            <nav className='gnb'>
              <ul className="">
                <li className=""> 
                    <Link to={'/'} className=''>IGS 소개</Link> 
                </li>
                <li className=""> 
                    <Link to={'/about'} className=''>IGS 요금제</Link> 
                </li>
                <li className=""> 
                    <Link to={'/todo'}>스케쥴 등록</Link> 
                </li>
                <li className=""> 
                    <Link to={'/board'}>고객센터</Link> 
                </li>
              </ul>
            </nav>
          <div className='flex gap-1'>
            <Link to={'/login'}>Login</Link> 
            <Link to={'/join'}>Join</Link> 
          </div>
        </div>
      </div>
</header>
  );
}

export default BasicMenu;