//Input Component
import React,{Component} from 'react';
import {StleSheet,TextInput,View} from 'react-native';
import colors from './../styles/colors';
import {fonts} from './../styles/fonts';
class Input extends Component	
	{
	construtor(props)
		{
		super(props);
		this.state={text:' '};
		}
	_create=()=>
		{
		this.props.onEntry(this.state.text);
		this.setState({text:' '});
		};
	_onSubmit=ev=>
		{
		this.props.onEntry(ev.nativeEvent.text);
		if(this.props.clearOnSubmit)
			{this.setState({text:' '})}
		};
	_onChange=text=>
		{
		this.setState({text:text});
		if(this.props.onChange)
			{this.props.onChange(text);}
		};
	render()
		{
		return 
			(
			<TextInput
				style={[
					styles.nameField,
					styles.wideButton,
					fonts.normal,
					this.props.style]}
				ref='newDeckInput'
				multiline={flase}
				autoCorrect={false}
				onChangeText={this._onChange}
				onSubmitEditing={this._onSubmit}/>
			);
		}
	}
Input.defaultProps={clearOnSubmit:true};
const styles=StyleSheet.create({
	nameField:{backgroundColor:colors.tan,height:60},
	wideButton:{justifyContent:'center',padding:10,margin:10}});
export default Input;

