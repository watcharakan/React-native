import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = () =>{
	const { buttonStyle, textStyles } = styles;
  return (
  	<TouchableOpacity onPress={() => console.log('pressed')} style = {buttonStyle }>
         <Text style ={textStyles}>
         Click me 
         </Text>
    </TouchableOpacity>

  	);

};



const styles = {
	textStyles:{
		alignSelf: 'center' ,
		color: '#007aff',
		fontSize: 16,
		fontWeight:   '600' ,
		paddingTop: 10,
		paddingBottom: 10 


	},
   buttonStyle:{
   	flex: 1,
   	alignSelf:  'stretch',
   	backgroundColor: '#fff',
   	borderColor: '#007aff',
   	borderRadius: 5,
   	borderWidth: 1,
   	marginLeft: 5,
   	marginRight: 5
 
  } 
};



export default Button;