import {getAllPeopleQuery} from '../graphql/getAllPeopleQuery';
import client from '../graphql/client';
import {useLazyQuery} from '@apollo/client';

export interface Person {
  __typename: string;
  id: string;
  birthYear: string;
  created: string;
  edited: string;
  name: string;
  eyeColor: string;
  hairColor: string;
  gender: string;
  height: number;
  homeworld: {
    id: string;
    name: string;
    climates: string[];
  };
}

interface PeopleEdge {
  cursor?: string;
  node: Person;
}

interface PageInfo {
  endCursor: string;
  startCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface PeopleConnection {
  edges: PeopleEdge[];
  pageInfo?: PageInfo;
  people: [Person];
  totalCount: number;
}

interface AllPeopleQuery {
  allPeople: PeopleConnection;
}

interface UseGetDataResult {
  data?: AllPeopleQuery;
  load: (params: {variables?: Record<string, any>}) => void;
  loading: boolean;
  fetchPage: (after?: string, before?: string, first?: number) => void;
}

const useGetData = (): UseGetDataResult => {
  const [load, {loading, data}] = useLazyQuery(getAllPeopleQuery, {client});

  const fetchPage = (after = '', before = '', first = 100) => {
    load({
      variables: {
        first: first,
        after: after,
        before: before,
      },
    });
  };

  return {load, loading, data, fetchPage};
};

export default useGetData;
