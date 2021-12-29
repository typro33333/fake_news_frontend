import React, { useEffect } from 'react';
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
  return (
    <div className='header' id='header_container'>
      <div className='header__layout'>
        <div className='layout__logo'>Logo</div>
        <div className='layout__link'>{Navagation()}</div>
      </div>
    </div>
  );
}
