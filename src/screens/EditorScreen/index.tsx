import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    View,
    TextInput,
    Text,
} from 'react-native';
import { IProps, changeText } from '../../store/modules/EditorScreen';

interface Props extends IProps {

}
interface States {

}

class EditorScreen extends Component<Props, States>{ // props, state에 대한 redux -> ts로 인터페이스를 받아와야할듯

    constructor(props: Props){
        super(props);
    }

    _changeText = (text: string) => {
        this.props.changeText(text);
    }

    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>에디터</Text>
                <Text>{this.props.text}</Text>
                <TextInput onChangeText={this._changeText.bind(this)} value={this.props.text}/>
            </View>
        )
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    text: state.EditorScreen.text,
  });
  
  // props 로 넣어줄 액션 생성함수
  const mapDispatchToProps = dispatch => ({
    changeText: text => dispatch(changeText(text)),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditorScreen);