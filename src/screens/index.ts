import React from 'react';
import { 
    createStackNavigator, 
    createBottomTabNavigator, 
    createAppContainer 
} from 'react-navigation';

import EditorScreen from './EditorScreen';

const HomeStack = createStackNavigator(
    {
        EditorScreen,
    },
    {
        initialRouteName: "EditorScreen",
    }
);

export default createAppContainer(HomeStack);