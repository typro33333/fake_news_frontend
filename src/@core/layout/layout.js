import React from 'react';
import Header from '@core/components/header/header';
import Footer from '@core/components/footer/footer';

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
