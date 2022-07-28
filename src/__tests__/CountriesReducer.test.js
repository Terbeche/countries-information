import MOCKED, { INITIAL_DATA } from '../MockedData/MockedData';
import reducers from '../redux/countries/countries';

describe('Test for countries reducer', () => {
  it('reducer should return empty list in the begining and loading true', () => {
    // Arrange
    const expectedData = {
      loading: true,
      Countries: [],
    };

    // ACT
    const reducedData = reducers(undefined, { type: undefined, payload: undefined });

    // Assert
    expect(reducedData).toEqual(expectedData);
    expect(reducedData.loading).toBeTruthy();
  });

  it('reducer should return moked data', () => {
    // Arrange
    const expectedData = INITIAL_DATA;
    const initialState = {
      loading: false,
      Countries: [],
    };
    // ACT
    const reducedData = reducers(initialState, { type: 'countries/getCountries/fulfilled', payload: expectedData });

    // Assert
    expect(reducedData.Countries).toEqual(MOCKED);
    expect(reducedData.loading).toBeFalsy();
  });
});
