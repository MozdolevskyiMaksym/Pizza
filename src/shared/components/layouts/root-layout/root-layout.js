import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
