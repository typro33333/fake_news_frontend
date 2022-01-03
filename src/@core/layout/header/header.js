import React, { useEffect, useState } from 'react';
import { list_navigation } from '@core/utils/db/links';
import './header.css';

function Navagation() {
  const listItems = list_navigation.map((item) => (
    <li key={item.name} className='item_nav'>
      <a className='link_nav' href={item.link}>
        {item.name}
      </a>
    </li>
  ));
  return <ul className='link__list-items-nav'>{listItems}</ul>;
}

export default function Header() {

  const [open, isOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };
  }, []);

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 90) {
      document.getElementById('header_container').style.height = '70px';
    } else {
      document.getElementById('header_container').style.height = '90px';
    }
  };

  const isOpenNavigation = () => {
    document.getElementById('header-navigation').style.left = '0';
    isOpen(true);
  };

  const isCloseNavigation = () => {
    document.getElementById('header-navigation').style.left = '-100%';
    isOpen(false);
  };

  return (
    <div style={{position:'relative'}} className = {open? 'black' : ''}>
      <div className='header' id='header_container'>
        <div className='header__layout'>
          <div className='layout__logo'>Logo</div>
          <div className='layout__link'>{Navagation()}</div>
          <div className='layout__show-links'>
            <i class='bx bx-list-ul' onClick={() => {
              isOpenNavigation();
            }}></i>
          </div>
        </div>
      </div>
      <div
        className= {open? 'header__black' : ''}
        onClick={() => {isCloseNavigation();}}
      ></div>
      <div className='header__navigation' id='header-navigation'>
        <div className='navigation__list'>
          <div className='button__cancel'>
            <i class='bx bx-x' onClick={() => {isCloseNavigation();}}></i>
          </div>
          <ul className='list-links'>
            <li><i class='bx bxs-bookmark'></i><a href="#">How to use</a></li>
            <li><i class='bx bxs-file-doc' ></i><a href="#">Document</a></li>
            <li><i class='bx bxl-github'></i><a href="#">Github</a></li>
          </ul>
        </div>
        <div className='navigation__cancel'></div>
      </div>
    </div>
  );
}
