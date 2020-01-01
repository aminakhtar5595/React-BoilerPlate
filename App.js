import React from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Routes from './app/Navigation';



console.disableYellowBox = true;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fontLoaded: false
    }
  }

  componentDidMount() {
    this._loadAssetsAsync()
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      'Montserrat-Regular': require('./app/Assets/Fonts/Montserrat/Montserrat-Regular.ttf'),
      'Montserrat-Light': require('./app/Assets/Fonts/Montserrat/Montserrat-Light.ttf'),
      'Montserrat-Bold': require('./app/Assets/Fonts/Montserrat/Montserrat-Bold.ttf'),
      'Montserrat-SemiBold': require('./app/Assets/Fonts/Montserrat/Montserrat-SemiBold.ttf'),
      'Montserrat-Medium': require('./app/Assets/Fonts/Montserrat/Montserrat-Medium.ttf'),
      'Roboto-Bold': require('./app/Assets/Fonts/Roboto/Roboto-Bold.ttf')
    });
    this.setState({ fontLoaded: true })

  }

  render() {

    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : StatusBar.currentHeight }}>
        <Routes />
      </SafeAreaView>
    );
  }
}

