import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class ChampionStatus extends React.Component {
  render() {
    if (!this.props.status) { return null; }
    return (<div className="champion-status">
      <Col md={6}>
        <Row>Health: {this.props.status.hp} (+{this.props.status.hpperlevel})</Row>
        <Row>Health Regen: {this.props.status.hpregen} (+{this.props.status.hpregenperlevel})</Row>
        <Row>Mana: {this.props.status.mp} (+{this.props.status.mpperlevel})</Row>
        <Row>Mana Regen: {this.props.status.mpregen} (+{this.props.status.mpregenperlevel})</Row>
        <Row>Move Speed: {this.props.status.movespeed}</Row>
      </Col>
      <Col md={6}>
        <Row>
          Att. Damage: {this.props.status.attackdamage} (+{this.props.status.attackdamageperlevel})
        </Row>
        <Row>
          Att. Speed: {
            (1 / (1.6 * (1 + this.props.status.attackspeedoffset))).toFixed(3)
          } (+{this.props.status.attackspeedperlevel}%)
        </Row>
        <Row>Att. Range: {this.props.status.attackrange}</Row>
        <Row>Armor: {this.props.status.armor} (+{this.props.status.armorperlevel})</Row>
        <Row>MR: {this.props.status.spellblock} (+{this.props.status.spellblockperlevel})</Row>
      </Col></div>);
  }
}
ChampionStatus.propTypes = {
  status: React.PropTypes.object.isRequired,
};
