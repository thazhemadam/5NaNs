import authReducer from '../../src/reducers/auth';

test('Set UID for Login', () => {
    const action = {
        type:"LOGIN",
        uid:'69abc69'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('Clear UID for Logout', () => {
    const action = {
        type:'LOGOUT'
    };
    const state = authReducer({uid:'69abc69'}, action);
    expect(state).toEqual({});
});
