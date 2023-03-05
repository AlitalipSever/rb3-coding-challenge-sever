import {gql} from '@apollo/client';

export const getAllPeopleQuery = gql`
  query AllPeople($first: Int, $after: String, $before: String) {
    allPeople(first: $first, after: $after, before: $before) {
      totalCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          __typename
          id
          name
          birthYear
          eyeColor
          hairColor
          homeworld {
            id
            name
          }
          filmConnection {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;
