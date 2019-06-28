/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map';

class WeatherProject extends Component {
    constructor(props) {
        super(props);
        this.state = {zip: "", forecast: null};
    }

    _handleTextChange = (event) => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            console.log(forecast);
            this.setState({
                zip: zip,
                forecast: forecast
            });
        });
    };

    render() {
        let content = null;

        if(this.state.forecast !== null) {
            content = (
              <Forecast
                main={this.state.forecast.main}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp}
              />
            );
        }

        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('./assets/flowers.png')}
                    style={styles.backdrop}
                >
                    <View style={styles.overlay}>
                        <View style={styles.row}>
                            <Text style={styles.mainText}>
                                Current weather for
                            </Text>
                            <View style={styles.zipContainer}>
                                <TextInput
                                    style={[styles.zipCode, styles.mainText]}
                                    onSubmitEditing={e => this._handleTextChange(e)}>
                                </TextInput>
                            </View>
                        </View>
                        {content}
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: '#000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30
    },
    zipContainer: {
       height: baseFontSize + 10,
       borderBottomColor: '#DDD',
       borderBottomWidth: 1,
       marginLeft: 5,
       marginTop: 3
    },
    zipCode: {
        flex: 1,
        flexBasis: 1,
        width: 50,
        height: baseFontSize
    },
    mainText: {
        fontSize: baseFontSize,
        color: '#FFF'
    }
});

export default WeatherProject;