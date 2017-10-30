import React from 'react';
import { View } from 'react-native';
import { Button, Grid, Col, Row } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllButton = () => {
return (

  <Grid>
   <Col>
   <Row>
   <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
      Login with Facebook
   </Icon.Button>
   </Row>
   <Row>
     <Icon name="home" size={30} color="#4F8EF7" />
   </Row>
   <Row>
   <Button
     raised
     icon={{ name: 'home', size: 32}}
     buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
     textStyle={{textAlign: 'center'}}
     title={`Welcome to\nReact Native Elements`}
   /></Row>

   </Col>
   <Col>
     <Row></Row>
     <Row></Row>
     <Row></Row>

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
