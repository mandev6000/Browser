/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class AppScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "https://www.google.com/",
      showWebView: false
    };
  }

  onButtonPress() {
    if (this.state.text === "") {
      alert("Please enter valid URL")
      return
    }
    this.setState({ showWebView: true })
  }

  onPressClose() {
    this.setState({ showWebView: false })
  }

  render() {
    return (
      <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1}}>
        {
          this.state.showWebView ?  (
            <>
            <TouchableHighlight onPress={this.onPressClose.bind(this)}>
              <Text style={styles.footer}>❌</Text>
            </TouchableHighlight>
            <WebView
              source={{uri: this.state.text}}
            />
            </>
            )
           :
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                Enter the Google Drive url to browse
              </Text>
  
              <TextInput
                style={{height: 40, marginVertical: 10}}
                placeholder="Enter URL here"
                onChangeText={text => this.setState({text})}
                value={this.state.text}
              />
              <Button
                onPress={this.onButtonPress.bind(this)}
                title="Browse"
              />
            </View>
        }
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  footer: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: '600',
    paddingRight: 12,
    textAlign: 'right',
  },
});