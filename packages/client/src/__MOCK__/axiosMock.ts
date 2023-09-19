/**
 * Mock Axios
 * @return {Promise}
 */
export const axiosMock = () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
};
