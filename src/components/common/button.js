import React from 'react-native';

const {
	TouchableHighlight,
	Text,
	Component,
	StyleSheet,
} = React;

export default class Button extends Component {
	render() {
		return (
			<TouchableHighlight 
				style={styles.button}
				underlayColor={'gray'}
				onPress={this.props.onPress}
			>
				<Text style={styles.text}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		borderColor: 'black',
		marginTop: 10
	},
	text: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 20,
	},
});

//export default Button;