import React from 'react';
import Header from '../../../../components/header/header';

type RootLayoutPropsType = {
  children: JSX.Element;
};

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootLayout;
