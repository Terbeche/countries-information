export const INITIAL_DATA = [
  {
    name: {
      common: 'Algeria',
    },
    population: 44700000,
    area: 2381741,
    capital: 'Algiers',
    continents: ['Africa'],
    flags: {
      svg: 'https://flagcdn.com/dz.svg',
    },
    show: false,
  },
  {
    name: {
      common: 'Algeria',
    },
    population: 44700000,
    area: 2381741,
    capital: 'Algiers',
    continents: ['Africa'],
    flags: {
      svg: 'https://flagcdn.com/dz.svg',
    },
    show: false,
  },
  {
    name: {
      common: 'Algeria',
    },
    population: 44700000,
    area: 2381741,
    capital: 'Algiers',
    continents: ['Africa'],
    flags: {
      svg: 'https://flagcdn.com/dz.svg',
    },
    show: false,
  },
];

const mokedDATA = INITIAL_DATA.map((item) => ({
  name: item.name.common,
  population: item.population,
  area: item.area,
  capital: item.capital,
  continent: item.continents[0],
  flag: item.flags.svg,
  show: false,
}));

export default mokedDATA;
