//HeadingText Component
impor Reac,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {fonts,scalingFactors} from './../styles/fonts';
import Dimensions from 'Dimensions';
let {width} from Dimensions.get('window');
class HeadingText extends Component
	{
	static displayName='HeadingText';
	render()
		{
		return
			(	
			<Text style={[fonts.big,scaled.big,this.props.style]}>
				{this.props.children}
			</Text>
			);
		}
	}
const scaled=StyleSheet.create({
	big:{fontSize:width/scalingFactors.big}});
export default HeadingText;