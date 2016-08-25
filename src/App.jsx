import React from 'react';
import ChampionGrid from './ChampionGrid.jsx';


export default class App extends React.Component {
  render() {
    if (!this.props.data) { return null; }
    return (<ChampionGrid champions={this.props.data.champion.data} />);
  }
}

App.propTypes = {
  data: React.PropTypes.object.isRequired,
};
