import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ChampionStatus from './ChampionStatus.jsx';


export default class ChampionSummary extends React.Component {
  render() {
    if (!this.props.champion) { return null; }
    return (<div className="champion-summary">
      <Row>
        <Col md={3}>
          <Image src={`assets/img/champion/${this.props.champion.image.full}`} thumbnail />
        </Col>
        <Col md={6}>
          <Row>{this.props.champion.name}</Row>
          <Row>{this.props.champion.title}</Row>
          <Row>{this.props.champion.tags.join(' / ')}</Row>
        </Col>
      </Row>
      <Row>
        <ChampionStatus status={this.props.champion.stats} />
      </Row>
    </div>);
  }
}
ChampionSummary.propTypes = {
  champion: React.PropTypes.object.isRequired,
};
