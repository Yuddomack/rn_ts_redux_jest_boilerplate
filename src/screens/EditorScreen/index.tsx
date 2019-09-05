// Container

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    View,
    TextInput,
    Text,
} from 'react-native';
import EditorScreen from './EditorScreen';
import { IProps, actionCreators } from '../../store/modules/EditorScreen';

interface Props extends IProps {

}

interface States {

}

class EditorScreenContainer extends Component<Props, States>{ // props, state에 대한 redux -> ts로 인터페이스를 받아와야할듯

    constructor(props: Props){
        super(props);
    }

    _changeText = (text: string) => {
        this.props.onChangeText(text);
    }

    render(){
        const { text } = this.props;
        const { _changeText } = this;

        return (
            <EditorScreen 
                text={text}
                onChangeText={_changeText} />
        )
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    text: state.EditorScreen.text,
  });
  
  // props 로 넣어줄 액션 생성함수
  const mapDispatchToProps = dispatch => ({
    changeText: (text: string) => dispatch(actionCreators.onChangeText(text)),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditorScreen);