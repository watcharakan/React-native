import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { Button, Grid, Col, Row } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const AlbumDetail = ({ album } ) =>{
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle,
           headerContentstyle,
               thumbnailContainerStyle,
               headrTextStyle,
               imageStyle } = styles
return (

  <Card>
  <CardSection>
  <View>
      <Image
          style={thumbnailContainerStyle}
          source={{ uri: thumbnail_image }}/>
  </View>

          <View style={headerContentstyle}>
                        <Text style={headrTextStyle}>{title}</Text>
                        <Text>{artist}</Text>

          </View>


  </CardSection>
  <CardSection>

       <Image
       style={imageStyle}
       source={{ uri: image }}/>

  </CardSection>

  <CardSection>




  </CardSection>
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

  </Card>

    );
};
const styles = {
      headerContentstyle: {
            flexDirection: 'column',
            justifyContent: 'space-around'


      },
      headrTextStyle:{
          fontSize: 18

      },
      imageStyle:{
             height: 300,
             flex: 1,
             width: null

      },
      thumbnailStyle: {
              height: 50,
              width: 50


      },
      thumbnailContainerStyle:{
           justifyContent:  'center',
           alignItems:  'center',
           marginLeft: 10,
           marginRight: 10

      }

};

export default AlbumDetail;
