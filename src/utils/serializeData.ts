export type GridRowData = {
  node: {
    __typename: string;
    id: string;
    name: string;
    birthYear: string;
    eyeColor: string;
    hairColor: string;
    homeworld: {id: string; name: string};
  };
};

type GridRowsProp = Array<GridRowData>;

export interface SerializedData {
  eyeColor: any;
  birthYear: any;
  __typename: string;
  name: any;
  id: string;
  hairColor: any;
  homeworldName: any;
  homeworldId: any;
}

export interface ArrayOfSerializedData extends Array<SerializedData> {}

export function serializeData(rows: GridRowsProp | undefined): ArrayOfSerializedData {
  const edges = rows?.map(row => {
    return {
      __typename: 'Person',
      id: `${row.node.id}`,
      name: row.node.name,
      birthYear: row.node.birthYear,
      eyeColor: row.node.eyeColor,
      hairColor: row.node.hairColor,
      homeworldId: row.node.homeworld.id,
      homeworldName: row.node.homeworld.name,
    };
  });

  return edges as ArrayOfSerializedData;
}
