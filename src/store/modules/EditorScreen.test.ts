// "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
//import counter, * as counterActions from './EditorScreen';

import EditorReducer, { changeText } from './EditorScreen';

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
    })
})