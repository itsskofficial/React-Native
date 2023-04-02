//Sample app for android
import React,{Component} from 'react';
import 
	{
	AppRegistry,
	Stylesheet,
	Text,
	View
	} from 'react-native';
export default class FirstProject extends Component
	{
	render()
		{
		return
			{
			<View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to React Native
			</Text>
			<Text style={styles.instructions}>
				To get started, edit index.andoid.js
			</Text>
			<Text style={styles.instructions}>
				Press Cmd+R to reload,{'\n'}
				Cmd+D or shake for dev menu
			</Text>
			</View>
			};
		}
	}
const styles=Stylesheet.create(
				{
				container:{
					flex:1,
					justifyContent:'center',
					alignItems:'center',
					backgroundColor:'red',
					},
				welcome:{
					fontSize:14,
					textAlign:'center',
					margin:10,
					},
				instructions:{
					textAlign:'center',
					color:'red',
					marginBottom:5,	
					}
				}
			);
AppRegistry.registerComponent('FirstProject',()=>FirstProject);