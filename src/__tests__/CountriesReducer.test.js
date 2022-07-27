import { INITIAL_DATA } from '../MockedData/InitialData';
import { fetchCountries } from '../redux/countriEs/countriEs';

describe('Test for countries reducer', () => {
  it('countries reducer should return empty list in the begining and loading true', () => {
    const expectedData = {
      loading: false,
      Countries: [],
    };

    const reducedData = fetchCountries({});

    expect(reducedData).toEqual(expectedData);
    expect(reducedData.loading).toBeFalsy();
  });

  it('Test reducer if returns the mock API data', () => {
    const expectedData = INITIAL_DATA;
    const FETCH_ACTION = 'countries/getCountries';

    const reducedData = fetchCountries(undefined, {
      type: FETCH_ACTION, loading: false, payload: expectedData,
    });

    expect(reducedData.Countries).toEqual(expectedData);
    expect(reducedData.loading).toBeFalsy();
  });
});
