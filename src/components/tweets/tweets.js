import React from 'react-native';
import Parse from 'parse/react-native';

const {
	View,
	StyleSheet,
	Text,
	Component,
} = React;

export default class Tweets extends Component {
	constructor() {
		super();

		this.state = {
			user: null
		};
	}

	componentWillMount() {
		Parse.User.currentAsync()
			.then((user) => {this.setState({user: user})});
	}

	render() {
		if(!this.state.user) {
			return <Text>Loading...</Text>
		}

		const username = this.state.user.get('username');

		return (
			<View style={styles.container}>
				<Text>Welcome Back! {username}</Text>
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
});