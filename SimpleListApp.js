//Simple App with List
import React,{Component} from 'react';
import {StyleSheet,Text,View,Flatlist} from 'react-native';
class SimpleList extends Component
	{
	constructor(props)
		{
		super(props);
		this.state={
				data:	
					[
					{key:"Sarthak"},
					{key:"Aniket"},
					{key:"Swanand"},
					{key:"Ojas"}
					]
			  };
		}
		_renderItem=data=>
				{
				return 
					<Text style={styles.row}>
						{data.item.key}
					</Text>;
				};
		render()
			{
			return
				(	
				<Text style={{fontweight:'bold',textalign:'center'}}>
					Our Team
				</Text>
				<View style={styles.container}>
					<Flatlist data={this.state.data} renderItem={this._renderItem}/>
				</View>	
				);
			}
	}
const styles=StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'grey',
		},
	row:{
		fontSize:24,
		padding:42,
		borderWidth:1,
		borderColor:'red'
	       }	
			});
export default SimpleList;









