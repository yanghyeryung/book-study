import React from 'react';
import { StyleSheet, Text, View, Alert, Platform } from 'react-native';

export default class App extends React.Component {
    componentDidMount() {
        Alert.alert('Hey', 'Ios');
    }

    render() {
        return (
          <View style={styles.container}>
              <Text>{Platform.OS} : {Platform.Version}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});