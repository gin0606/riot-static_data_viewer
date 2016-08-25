import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ChampionSummary from './ChampionSummary.jsx';


export default class ChampionGrid extends React.Component {
  render() {
    if (!this.props.champions) { return null; }
    return (
      <Grid>
        <Row>
        {
          Object.keys(this.props.champions).map((name) =>
            <Col xs={12} md={4} key={this.props.champions[name].id}>
              <ChampionSummary champion={this.props.champions[name]} />
            </Col>
          )
        }
        </Row>
      </Grid>
    );
  }
}

ChampionGrid.propTypes = {
  champions: React.PropTypes.object.isRequired,
};
