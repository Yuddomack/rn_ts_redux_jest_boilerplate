/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Fragment, Component} from 'react';
import {
  View,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/store/modules';
import RootStack from './src/screens';
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const store = createStore(rootReducer);

export default class App extends Component{

  render(){
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  };
}
