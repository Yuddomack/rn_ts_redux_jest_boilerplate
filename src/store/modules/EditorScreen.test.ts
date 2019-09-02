// "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
//import counter, * as counterActions from './EditorScreen';

import EditorReducer, { initialState, changeText } from './EditorScreen';
// action creator로 묶기

describe('Store - EditorScreen',() => {
    describe('actions', () => {
        it('check create actions', () => {
            const expectedActions =[
                { type: 'editor/CHANGE_TEXT', text: "" },
            ];
            const actions = [
                changeText()
            ];
            expect(actions).toEqual(expectedActions);
        });
    });

    describe('reducer', () => {
        let state = EditorReducer(undefined, {});
        it('should return the initialState', () => {
            expect(state).toEqual(initialState);
        });
        
        it('change text to "qwer"', () => {
            state = EditorReducer(state, changeText("qwer"));
            expect(state).toHaveProperty('text', "qwer");
        });

        it('change text to "1000"', () => {
            state = EditorReducer(state, changeText("1000"));
            expect(state).toHaveProperty('text', "1000");
        });
    })
});