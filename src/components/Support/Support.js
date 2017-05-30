import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FormBasic from './../Forms/FormBasic';
import FormComplements from './../Forms/FormComplements';
import { Route } from 'react-router-dom'

 const Support = () => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={4} md={3}>
          <Route path="/" component={FormBasic}/>
        </Col>
        <Col xs={12} sm={8} md={9}>
          <FormComplements />
        </Col>
      </Row>
    </Grid>
  );
}

export default Support
