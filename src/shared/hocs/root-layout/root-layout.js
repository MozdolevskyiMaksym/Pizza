import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Alert from '../../components/alert/alert';

import './root-layout.scss';

const RootLayout = ({ children }) => {
  const alertsData = useSelector((state) => state.alerts.data);

  const successAlertsContent = useMemo(
    () =>
      alertsData?.length > 0 ? (
        <div className="alerts-container">
          {alertsData?.map((alert) => (
            <Alert
              id={alert.key}
              key={alert.key}
              variant={alert.type}
              message={alert.message}
            />
          ))}
        </div>
      ) : null,
    [alertsData]
  );

  return (
    <>
      <Header />
      {children}
      <Footer />
      {successAlertsContent}
    </>
  );
};

export default RootLayout;
