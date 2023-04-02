//Weather Android App
import React,{Component} from 'react';
import 
	{
	View,
	Text,
	TextInput,
	Image,
	StyleSheet
	} 
from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map';

class WeatherApp extends Component
	{
	constructor(props)
		{
		super(props);
		this.state={zip: ' ',forecast:null};
		}
	_handleTextChange=event=>
				{
				let zip=event.nativeEvent.text;
				OpenWeatherMap.fetchForecast(zip).then(forecast=>		
										{
										this.setState({forecast:forecast});	
										});
				};
	render()	
		{
		let content=null;
		if (this.state.forecast!==null)
			{
			content=(
				<Forecast 
					main={this.state.forecast.main}
					description={this.state.forecast.description}
					temp={this.state.forecast.temp}
				/>);
			}
		return 	
			(
			<View style={styles.container}>
				<Image 
					source={require('./Sunset.jpg')}
					resizeMode='cover'
					style={styles.backdrop}>
					<View style={styles.overlay}>
						<View style={styles.row}>
								<Text style={styles.mainText}>
									Current weather for
								</Text>
									<View style={style.zipContainer}>
										<TextInput
											style={[styles.zipCode,styles.mainText]}
											onSubmitEditing={this._handleTextChange}
											underlineColorAndroid='transparent'/>
									</View>
						</View>
						{content}
					<View>
				</Image>
			</View>
			); 
		}
	}
const baseFontSize=16;
const styles=StyleSheet.create(
			{
			container:{flex:1,alignItems:'center',paddingTop:30},
			backdrop:{flex:1,flexDirection:'column'},
			overlay:
				{
				paddingTop:5,
				backgroundColor:'white',
				opacity:0.5,
				flexDirection:'column',
				alignItems:'center'
				},
			row:
				{
				flexDirection:'row',
				flexWrap:'nowrap',
				alignItems:'flex-start',
				padding:30
				},
			zipContainer:
				{
				height:baseFontSize+10,
				borderBottomColor:'red',
				marginLeft:5,
				marginTop:3
				},
			zipCode:{flex:1,flexBasis:1,width:50,height:baseFontSize},
			mainText:{fontSize:baseFontSize,color:'blue'}
			});
export default WeatherApp;