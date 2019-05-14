import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import ajax from '../services/GetData';

class AllCallsScreen extends React.Component {
    static navigationOptions = {
        title: "All Calls",
    };

    state = {
        calls: [],
    }
    
    async componentDidMount() {
        const calls = await ajax.fetchCalls();
        this.setState({calls});
	}

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.calls} showsVerticalScrollIndicator={false} renderItem={({item}) =>
                    <ListItem onPress={() => this.props.navigation.navigate('Detail', {itemNumber: item.number, itemCallType: item.type, itemDate: item.date, itemName: item.name, itemExtension: item.extension, itemRecipient: item.recipient, itemDuration: item.duration,})} title={item.number == '' ? 'Unknown Number':item.number} subtitle={item.duration} />
                }
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default AllCallsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    }
  });