import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class ChampionStatus extends React.Component {
  render() {
    if (!this.props.data) { return null; }
    return (<div className="champion-status">
      <Col md={6}>
        <Row>Health: {this.props.data.hp} (+{this.props.data.hpperlevel})</Row>
        <Row>Health Regen: {this.props.data.hpregen} (+{this.props.data.hpregenperlevel})</Row>
        <Row>Mana: {this.props.data.mp} (+{this.props.data.mpperlevel})</Row>
        <Row>Mana Regen: {this.props.data.mpregen} (+{this.props.data.mpregenperlevel})</Row>
        <Row>Move Speed: {this.props.data.movespeed}</Row>
      </Col>
      <Col md={6}>
        <Row>
          Att. Damage: {this.props.data.attackdamage} (+{this.props.data.attackdamageperlevel})
        </Row>
        <Row>
          Att. Speed: {
            (1 / (1.6 * (1 + this.props.data.attackspeedoffset))).toFixed(3)
          } (+{this.props.data.attackspeedperlevel}%)
        </Row>
        <Row>Att. Range: {this.props.data.attackrange}</Row>
        <Row>Armor: {this.props.data.armor} (+{this.props.data.armorperlevel})</Row>
        <Row>MR: {this.props.data.spellblock} (+{this.props.data.spellblockperlevel})</Row>
      </Col></div>);
  }
}
ChampionStatus.propTypes = {
  data: React.PropTypes.object.isRequired,
};
