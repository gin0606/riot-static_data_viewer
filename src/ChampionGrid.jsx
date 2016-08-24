import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ChampionSummary from './ChampionSummary.jsx';


export default class ChampionGrid extends React.Component {
  render() {
    if (!this.props.champion) { return null; }
    return (
      <Grid>
        <Row>
        {
          Object.keys(this.props.champion).map((name) =>
            <Col xs={12} md={4} key={this.props.champion[name].id}>
              <ChampionSummary data={this.props.champion[name]} />
            </Col>
          )
        }
        </Row>
      </Grid>
    );
  }
}

ChampionGrid.propTypes = {
  champion: React.PropTypes.object.isRequired,
};
