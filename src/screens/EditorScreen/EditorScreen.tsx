// Presentational

import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
} from 'react-native';
import { IProps } from '../../store/modules/EditorScreen';

interface Props extends IProps {

}

const EditorScreen: React.SFC<Props> = ({
    text,
    changeText
}) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>에디터</Text>
            <Text>{text}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={changeText.bind(this)} value={this.props.text}/>
        </View>
    )
}

export default EditorScreen;