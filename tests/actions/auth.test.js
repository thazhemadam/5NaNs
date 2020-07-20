import { login, logout } from '../../src/actions/auth';

test('Generate Login action', () => {
    const testUID = '42069';
    const action = login(testUID);
    expect(action).toEqual({
        type: "LOGIN",
        uid: testUID
    });
});

test('Generate Logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT",
    });
});