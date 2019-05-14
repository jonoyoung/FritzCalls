import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {List, ListItem, Card, Divider} from 'react-native-elements';

class DetailScreen extends React.Component {
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const {navigation} = this.props;
        const itemNumber = navigation.getParam('itemNumber', 'No number');
        const itemType = navigation.getParam('itemCallType', 'No call type');
        const itemDate = navigation.getParam('itemDate', 'No call date');
        const itemName = navigation.getParam('itemName', 'No name');
        const itemExtension = navigation.getParam('itemExtension', 'No extension');
        const itemRecipient = navigation.getParam('itemRecipient', 'No recipient');
        const itemDuration = navigation.getParam('itemDuration', 'No duration');

        return (
            <View style={styles.container}>
                <Card title="Call">
                    <Text style={styles.itemBox}>{itemNumber == '' ? 'Unknown Number':itemNumber}</Text>
                    <Text style={styles.itemBox}>{this.Capitalize(itemType)}</Text>
                    <Text style={styles.itemBox}>{itemDate}</Text>
                    <Text style={styles.itemBox}>{itemName == '' ? 'Unknown Name':itemName}</Text>
                    <Text style={styles.itemBox}>{itemExtension == '' ? 'Unknown Extension':itemExtension}</Text>
                    <Text style={styles.itemBox}>{itemDuration}</Text>
                    <Text style={styles.itemBox}>{itemRecipient == '' ? 'Unknown Recipient':itemRecipient}</Text>
                </Card>
            </View>
        );
    }
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    title: {
        fontSize: 20,
    },
    itemBox: {
        fontSize: 18,
    },
});