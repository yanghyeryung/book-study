import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './style';

class Mondrian extends Component {
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.topBlock}>
                    <View style={styles.leftCol}>
                        <View style={[styles.base, styles.cellOne]}></View>
                        <View style={[styles.base, styles.cellTwo]}></View>
                    </View>
                    <View style={[styles.base, styles.cellThree]}></View>
                </View>
                <View style={styles.bottomBlock}>
                    <View style={[styles.base, styles.cellFour]}></View>
                    <View style={[styles.base, styles.cellFive]}></View>
                    <View style={styles.bottomRight}>
                        <View style={[styles.base, styles.cellSix]}></View>
                        <View style={[styles.base, styles.cellSeven]}></View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Mondrian;