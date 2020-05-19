import React from 'react';
import { Typography } from 'antd';
import { t } from 'helpers/i18n';

const { Title } = Typography;

const Home = () => {
  return (
    <div className="app-container">
      <div className="app-container-head">
        <Title className="app-title" level={4}>
          {t('WelcomeText')}
        </Title>
      </div>
    </div>
  );
};

export default Home;
