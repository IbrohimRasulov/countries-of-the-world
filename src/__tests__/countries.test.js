import { getCountries, getCountryInfo } from '../redux/countries-slice';

describe('Test Reducers', () => {
  test('Get Countries', () => {
    const obj = { payload: [1, 2, 3], type: 'country/getCountries' };

    expect(
      getCountries([1, 2, 3], { type: 'country/getCountries', payload: [] }),
    ).toEqual(obj);
  });

  test('Get Country information', () => {
    const obj = { payload: { country: 'EG' }, type: 'country/getCountryInfo' };

    expect(
      getCountryInfo(
        { country: 'EG' },
        { type: 'country/getCountryInfo', payload: [] },
      ),
    ).toEqual(obj);
  });
});
