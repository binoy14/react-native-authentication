import React from 'react-native';
import Button from '../common/button';
import Parse from 'parse/react-native';

const {
	Text,
	View,
	TextInput,
	StyleSheet,
	Component,
} = React;

export default class Signup extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			passwordConfirmation: '',
			errorMessage: '',
		};

		this.onSigninPress = this.onSigninPress.bind(this);
		this.onSignupPress = this.onSignupPress.bind(this);
	}

	onSigninPress() {
		this.props.navigator.pop();
	}

	onSignupPress() {
		if(!this.state.password || !this.state.username || !this.state.passwordConfirmation) {
			return this.setState({
				errorMessage: 'All Fields are required'
			});
		}

		if(this.state.password !== this.state.passwordConfirmation) {
			return this.setState({
				errorMessage: 'Your password do not match'
			});
		}

		let user = new Parse.User();
		user.set('username', this.state.username);
		user.set('password', this.state.password);

		user.signUp(null, {
			success: (user) => {
				this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]);
			},
			error: (user, error) => {
				this.setState({
					errorMessage: error.message
				});
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Sign Up</Text>

				<TextInput
					placeholder={'Username'}
					autocorrect={false}
					autoCapitalize={'none'}
					value={this.state.username}
					onChangeText={(text) => this.setState({username: text})}
					style={styles.input}
				/>
				<TextInput
					placeholder={'Password'}
					value={this.state.password}
					secureTextEntry={true}
					onChangeText={(text) => this.setState({password: text})}
					style={styles.input}
				/>
				<TextInput
					placeholder={'Confirm Password'}
					value={this.state.passwordConfirmation}
					secureTextEntry={true}
					onChangeText={(text) => this.setState({passwordConfirmation: text})}
					style={styles.input}
				/>
				
				<Text style={styles.label}>{this.state.errorMessage}</Text>
				<Button text={'Sign Up'} onPress={this.onSignupPress} />
				<Button text={'I have an account...'} onPress={this.onSigninPress} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
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
