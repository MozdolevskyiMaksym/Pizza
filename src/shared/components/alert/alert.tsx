import React from 'react';
import useActions from '../../hooks/use-actions';
import { clearAlerts } from '../../../redux/actions/alerts-actions';

import './alert.scss';

export type AlertPropsType = {
  id: string;
  variant: string;
  message: string;
};

const Alert = (props: AlertPropsType) => {
  const { id, variant, message } = props;

  const removeAlert = useActions(clearAlerts);

  const setTimeAlert = () => {
    removeAlert(id);
  };

  return (
    <div className={`alert-item ${variant === 'error' ? 'error' : ''}`}>
      <div className="alert-item__name">{message}</div>
      <div onClick={setTimeAlert} className="alert-item__close-icon"></div>
    </div>
  );
};

export default Alert;
