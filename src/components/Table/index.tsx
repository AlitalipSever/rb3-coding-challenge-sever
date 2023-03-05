import {FC, useCallback} from 'react';
import useGetData from '../../hooks/useGetData';

type Props = {};

const Table: FC<Props> = ({}) => {
  const {fetchPage, data, loading} = useGetData();

  const onClick = useCallback(() => {
    fetchPage('', '', 100);
  }, [data]);

  return (
    <div>
      <button onClick={onClick}>Load Table Data</button>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <table>
            <tbody>
              {data.allPeople.edges.map((n: any) => (
                <tr>
                  <td>{n.node.name}</td>
                  <td>{n.node.birthYear}</td>
                  <td>{n.node.eyeColor}</td>
                  <td>{n.node.homeworld.id}</td>
                  <td>{n.node.filmConnection.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
