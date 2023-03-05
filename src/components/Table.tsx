import {useCallback} from 'react';
import useGetData from '../hooks/useGetData';

function Table() {
  const {load, data} = useGetData();

  const onClick = useCallback(() => load(), [load]);

  return (
    <div>
      <button onClick={onClick}>Load Table Data</button>
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
}

export default Table;
