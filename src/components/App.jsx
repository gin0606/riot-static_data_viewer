import React from 'react';
import ChampionStore from '../stores/ChampionStore.js';
import Header from './Header.jsx';
import item from '../../assets/data/ja_JP/item.json';
import ChampionGrid from './ChampionGrid.jsx';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      appChampions: ChampionStore.getAll(),
      item,
    };
  }

  componentDidMount() {
    ChampionStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    ChampionStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({
      appChampions: ChampionStore.getAll(),
      item,
    });
  }

  render() {
    return (<div>
      <Header />
      <ChampionGrid champions={this.state.appChampions} />
    </div>);
  }
}
