import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

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
