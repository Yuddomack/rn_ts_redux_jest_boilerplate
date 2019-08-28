// 액션 타입 정의
const CHANGE_TEXT = 'editor/CHANGE_TEXT'; // 나중에 포지션도 생각해야지(width height x y)

// **** 액션 생섬함수 정의
export const changeText = text => ({ type: CHANGE_TEXT, text }); // onChange니까 edit보단 change가 나을듯
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });

// **** 초기상태 정의
const initialState = {
    text: "asdf",
}; // state는 되도록 얕은 객체로

// **** 리듀서 작성
export default function EditorScreen(state = initialState, action) {
    switch (action.type) {
        // case CHANGE_COLOR:
        //     return {
        //         ...state,
        //         color: action.color,
        //     };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            }; 
        default:
            return state;
    }
}