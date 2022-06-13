/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
const fetch = jest.fn((urls) => Promise.resolve({ status: 200, ok: 'ok' }));
export default fetch;
