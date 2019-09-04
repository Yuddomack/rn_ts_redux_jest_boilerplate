// 인터페이스
export interface IProps { // 컴포넌트에 주입되는
    text: string
    onChangeText: Function
}

export interface IState{ // reducer의 return
    text: string
}

// 액션 타입 정의
const CHANGE_TEXT = 'editor/CHANGE_TEXT'; // 나중에 포지션도 생각해야지(width height x y)

interface changeText {
    type: typeof CHANGE_TEXT
    text: string
}

interface changeColor {
    type: typeof CHANGE_TEXT
    color: string
}

type ActionTypes = 
    | changeText
    | changeColor

// 액션 생섬함수 정의
export const onChangeText = (text: string = ""): ActionTypes => ({ type: CHANGE_TEXT, text }); // onChange니까 edit보단 change가 나을듯

// 초기상태 정의
export const initialState: IState = {
    text: "",
}; // state는 되도록 얕은 객체로

// 리듀서 작성
// https://stackoverflow.com/questions/55636963/property-does-not-exist-on-type
export default function EditorScreen(
    state = initialState, 
    action: any | ActionTypes // any for empty
): IState {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            }; 
        default:
            return state;
    }
}