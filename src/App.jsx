import React from 'react';
import ChampionGrid from './ChampionGrid.jsx';


export default class App extends React.Component {
  render() {
    if (!this.props.champion) { return null; }
    return (<ChampionGrid champion={this.props.champion} />);
  }
}

App.propTypes = {
  champion: React.PropTypes.object.isRequired,
};
