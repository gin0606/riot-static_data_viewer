import React from 'react';
import champion from '../assets/data/ja_JP/champion.json';
import App from './App.jsx';

const AppContainer = function appContainer() {
  return <App champion={champion.data} />;
};
export default AppContainer;
