import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class EditorScreen extends Component{
    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>에디터</Text>
            </View>
        )
    }
}