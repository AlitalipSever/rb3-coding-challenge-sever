import {FC, useEffect, useState} from 'react';
import useGetData from '../../hooks/useGetData';
import {ArrayOfSerializedData, serializeData} from '../../utils/serializeData';

type Props = {};

const Table: FC<Props> = ({}) => {
  const {fetchPage, data, loading} = useGetData();
  const [serializedData, setSerializedData] = useState<ArrayOfSerializedData>([]);

  useEffect(() => {
    fetchPage();
    if (data) {
      const serialized = serializeData(data.allPeople.edges);
      setSerializedData(serialized);
    }
  }, [data]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <table>
            <tbody>
              {serializedData.map((n: any) => (
                <tr>
                  <td>{n.name}</td>
                  <td>{n.birthYear}</td>
                  <td>{n.eyeColor}</td>
                  <td>{n.homeworldId}</td>
                  <td>{n.homeworldName}</td>
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
