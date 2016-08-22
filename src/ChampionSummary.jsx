import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ChampionStatus from './ChampionStatus.jsx';


export default class ChampionSummary extends React.Component {
  render() {
    if (!this.props.data) { return null; }
    return (<div className="champion-summary">
      <Row>
        <Col md={3}>
          <Image src={`assets/img/champion/${this.props.data.image.full}`} thumbnail />
        </Col>
        <Col md={6}>
          <Row>{this.props.data.name}</Row>
          <Row>{this.props.data.title}</Row>
          <Row>{this.props.data.tags.join(' / ')}</Row>
        </Col>
      </Row>
      <Row>
        <ChampionStatus data={this.props.data.stats} />
      </Row>
    </div>);
  }
}
ChampionSummary.propTypes = {
  data: React.PropTypes.object.isRequired,
};
