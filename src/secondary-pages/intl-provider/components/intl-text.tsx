import React, { useIntl } from 'react-intl';

const IntlText = () => {
  const intl = useIntl();

  return <div>{intl.formatMessage({ id: 'someMessage' })}</div>;
};

export default IntlText;
