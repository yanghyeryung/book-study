import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
    },
    topBlock: {
        flex: 5,
        flexDirection: 'row',
    },
    bottomBlock: {
        flex: 2,
        flexDirection: 'row',
    },
    leftCol: {
        flex: 2,
        flexDirection: 'column'
    },
    bottomRight: {
        flex: 2,
        flexDirection: 'column'
    },
    base: {
        borderColor: '#000',
        borderWidth: 5,
    },
    cellOne: {
        flex: 1,
        borderBottomWidth: 15,
    },
    cellTwo: {
        flex: 3,
    },
    cellThree: {
        flex: 5,
        backgroundColor: '#FF0000',
    },
    cellFour: {
        flex: 3,
        backgroundColor: '#0000FF',
    },
    cellFive: {
        flex: 6,
    },
    cellSix: {
        flex: 1,
    },
    cellSeven: {
        flex: 1,
        backgroundColor: '#FFFF00'
    }
});

export default styles;