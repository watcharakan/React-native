import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'


const AlbumDetail = ({album}) => {

    const { title, artist, thumbnail_image, image} = album;
    const {thumbnailStyle,
             headerContentstyle,
               thumbnailContainerStyle,
               headrTextStyle,
               imageStyle  } = styles

return(

  <Card>
  <CardSection>
  <View>
      <Image 
          style = {thumbnailStyle}
          source = {{uri : thumbnail_image}}/>

  </View>
 
          <View style = {headerContentstyle }>
                        <Text style = {headrTextStyle}>{title}</Text>
                        <Text>{artist}</Text>

          </View>
  

  </CardSection>
  <CardSection>

       <Image 
       style = {imageStyle}
       source = {{uri : image}}/>

  </CardSection>

  <CardSection>
      
        <Button/>

  </CardSection>
  </Card>

    );


} ;
const styles = {
      headerContentstyle: {
            flexDirection: 'column' ,
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
