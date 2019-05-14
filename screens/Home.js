import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import ajax from '../services/GetData';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "All Calls",
    };

    state = {
        calls: [],
        items: 5,
    }

    async componentDidMount() {
        try {
            const calls = await ajax.fetchCalls();
            this.setState({calls});
            calls.length = this.state.items;
        } catch (e) {
            console.error("[FritzCalls] Data error: " + e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 24, marginLeft: 20}}>Recent Calls</Text>

                <View style={{marginBottom: 20}}>
                    <FlatList style={styles.listItem} data={this.state.calls} extraData={this.state} showsVerticalScrollIndicator={false} renderItem={({item}) =>
                        <ListItem onPress={() => this.props.navigation.navigate('Detail', {itemNumber: item.number, itemCallType: item.type, itemDate: item.date, itemName: item.name, itemExtension: item.extension, itemRecipient: item.recipient, itemDuration: item.duration,})} style={styles.listItem} title={item.number == '' ? 'Unknown Number':item.number} subtitle={item.duration} />
                    }
                    keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <Button icon={{name: 'phone', type: 'MaterialCommunityIcons'}} backgroundColor="#2657BA" title="View full call list" onPress={() => this.props.navigation.navigate("All")} />
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    listItem: {
        marginTop: 20,
       backgroundColor: '#ffffff',
    }
  });