import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import nodejs from 'nodejs-mobile-react-native';

import HomeScreen from './screens/Home';
import AllCallsScreen from './screens/AllCalls';
import DetailScreen from './screens/Detail';
import WelcomeScreen from './screens/Welcome';

const AppNavigator = createStackNavigator({
	Welcome: {
		screen: WelcomeScreen
	},
	Home: {
		screen: HomeScreen
	},
	All: {
		screen: AllCallsScreen
	},
	Detail: {
		screen: DetailScreen
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	async componentWillMount() {
		nodejs.start('main.js');
	}

	render() {
		return <AppContainer />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});