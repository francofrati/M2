import React from 'react';
// import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={s.main}>
      
        <SearchBar 
          onSearch={onSearch}
        />
      
    </div>
  );
};

export default Nav;
