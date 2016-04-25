import React from 'react-native';
import Button from '../common/button';
import Parse from 'parse/react-native';
const {
	View,
	Text,
	StyleSheet,
	TextInput,
	Component,
} = React;

class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			errorMessage: '',
		};
		this.onPress = this.onPress.bind(this);
		this.onSignupPress = this.onSignupPress.bind(this);
	}

	onPress() {
		Parse.User.logIn(this.state.username, this.state.password, {
			success: (user) => {this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]);},
			error: (data, error) => { this.setState({errorMessage: error.message});}
		});
	}

	onSignupPress() {
		this.props.navigator.push({name: 'signup'});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Sign In</Text>
				
				<TextInput
					placeholder={'Username'}
					autocorrect={false}
					autoCapitalize={'none'}
					style={styles.input}
					value={this.state.username}
					onChangeText={(text) => this.setState({username: text})}
				/>

				<TextInput
					placeholder={'Password'}
					secureTextEntry={true} 
					style={styles.input}
					value={this.state.password}
					onChangeText={(text) => this.setState({password: text})}
				/>
				
				<Text style={styles.label}>{this.state.errorMessage}</Text>
				<Button text={'Sign In'} onPress={this.onPress} />
				<Button text={'I need an account...'} onPress={this.onSignupPress} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center',
	},
	label: {
		fontSize: 20,
	},
});

export default SignIn;