import React,{Component} from 'react';
import {STyleSheet,View} from 'react-native';
import Heading from './Header';
import DeckScreen from './DeckScreen';
import NewCardScreen from './NewCardScreen';
import ReviewScreen from './ReviewScreen';
let headerOptions=
	{
	headerStyle={backgroundColor:'#FFFFFF'},
	headerLeft:<Logo/>
	};
let navigator=StackNavigator({
	Home:{screen:DeckScreen,navigationOptions:headerOptions},
	Review:{screen:ReviewScreen,navigationOptions:headerOptions},
	CardCreation:{screen:NewCardScreen,navigationOptions:headerOptions}
	});
class Flashcards extends Component
	{
	_renderScene()
		{
		return <DeckScreen/>;
		}
	render()
		{
		return 
			(
			<View style={styles.container}>
				<Heading/>
				{this._renderScene()}
			</View>
			);
		}
	}
cosnt styles=StyleSheet.create({container:{flex:1,marginTop:30}});
export default Flashcards;
export default navigator;
