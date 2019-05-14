import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

class WelcomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        setTimeout(() => {
            this.props.navigation.replace('Home');
        }, 4000);

        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#2567AB" />
            </View>
        );
    }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});