import React from 'react';
import { View } from 'react-native';
import { Button, Grid, Col, Row, Icon } from 'react-native-elements';


const AllButton = () => {
return (

  <Grid>
   <Col>
   <Row>
   <Button
     raised
     icon={{ name: 'power-plug', type: 'entypo', size: 50 }}
     buttonStyle={{ backgroundColor: 'blue', borderRadius: 100 }}
     textStyle={{ textAlign: 'center' }}
     title={'SMART \nMETER'}
   />
   </Row>
   <Row>
   <Button
     raised
     icon={{ name: 'md-speedometer', type: 'ionicon', size: 50 }}
     buttonStyle={{ backgroundColor: 'red', borderRadius: 30 }}
     textStyle={{ textAlign: 'center' }}
     title={'SMART \nMETER'}
   />
   </Row>
   <Row>
   <Button
     raised
     icon={{ name: 'sc-telegram', type: 'evilicon', size: 50 }}
     buttonStyle={{ backgroundColor: 'red', borderRadius: 30 }}
     textStyle={{ textAlign: 'center' }}
     title={'SMART \nMETER'}
   />
   </Row>

   </Col>
   <Col>
     <Row></Row>
     <Row></Row>
     <Row></Row>

   </Col>

  </Grid>


  );
};

export default AllButton;
