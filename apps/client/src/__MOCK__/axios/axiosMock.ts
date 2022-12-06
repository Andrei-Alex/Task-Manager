/**
 * Mock Axios
 * @return {Promise}
 */
export const axiosMock = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
