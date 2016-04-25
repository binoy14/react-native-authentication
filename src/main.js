import React from 'react-native';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Tweets from './components/tweets/tweets';
import Parse from 'parse/react-native';
import config from './config';
const {
	StyleSheet,
	Component,
	Navigator,
} = React;

const ROUTES = {
	signin: Signin,
	signup: Signup,
	tweets: Tweets,
};

export default class Main extends Component {
	componentWillMount() {
		Parse.initialize(config.appId, config.javascriptId);
	}

	renderScene(route, navigator) {
		const Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator}/>
	}

	render() {
		return (
			<Navigator
				style={styles.container}
				initialRoute={{name: 'signin'}}
				renderScene={this.renderScene}
				configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});