import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Heading from "./Header";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";
import Logo from './Header/Logo';

class Flashcards extends Component {
  _renderScene() {
    // return <ReviewScreen />;
    // return <NewCardScreen />;
    return <DeckScreen />;
  }
  render() {
    return (
      <View style={styles.container}>
        <Heading />
        {this._renderScene()}
      </View>
    );
  }
}

let headerOptions = {
  headerStyle: { backgroundColor: '#FFF' },
  headerLeft: <Logo />
};

let navigator = createStackNavigator({
    Home: { screen: DeckScreen, navigationOptions: headerOptions },
    Review: { screen: ReviewScreen, navigationOptions: headerOptions },
    CardCreation: { screen: NewCardScreen, navigationOptions: headerOptions }
});
const styles = StyleSheet.create({ container: { flex: 1, marginTop: 30 } });

export default createAppContainer(navigator);
