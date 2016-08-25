import React from 'react';
import champion from '../assets/data/ja_JP/champion.json';
import item from '../assets/data/ja_JP/item.json';
import App from './App.jsx';

const AppContainer = function appContainer() {
  const data = {
    champion,
    item,
  };
  return <App data={data} />;
};
export default AppContainer;
