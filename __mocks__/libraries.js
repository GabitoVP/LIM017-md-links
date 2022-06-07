/* eslint-disable import/prefer-default-export */
export const fetch = jest.fn((urls) => Promise.resolve({ status: 200, ok: 'ok' }));
