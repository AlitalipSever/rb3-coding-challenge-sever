import {serializeData, GridRowData} from './serializeData';

describe('serializeData', () => {
  it('should return an array of serialized data', () => {
    const gridRows: GridRowData[] = [
      {
        node: {
          __typename: 'Person',
          id: '1',
          name: 'Luke Skywalker',
          birthYear: '19BBY',
          eyeColor: 'blue',
          hairColor: 'blond',
          homeworld: {id: '1', name: 'Tatooine'},
        },
      },
      {
        node: {
          __typename: 'Person',
          id: '2',
          name: 'C-3PO',
          birthYear: '112BBY',
          eyeColor: 'yellow',
          hairColor: 'n/a',
          homeworld: {id: '1', name: 'Tatooine'},
        },
      },
    ];

    const serializedData = serializeData(gridRows);

    expect(serializedData).toEqual([
      {
        __typename: 'Person',
        id: '1',
        name: 'Luke Skywalker',
        birthYear: '19BBY',
        eyeColor: 'blue',
        hairColor: 'blond',
        homeworldId: '1',
        homeworldName: 'Tatooine',
      },
      {
        __typename: 'Person',
        id: '2',
        name: 'C-3PO',
        birthYear: '112BBY',
        eyeColor: 'yellow',
        hairColor: 'n/a',
        homeworldId: '1',
        homeworldName: 'Tatooine',
      },
    ]);
  });

  it('should return an undefined if rows is undefined', () => {
    const serializedData = serializeData(undefined);

    expect(serializedData).toEqual(undefined);
  });
});
