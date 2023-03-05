import {FC, useEffect, useState} from 'react';
import useGetData from '../../hooks/useGetData';
import {ArrayOfSerializedData, serializeData} from '../../utils/serializeData';
import {Paper} from '@mui/material';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';

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

  const columns: GridColDef[] = [
    {field: 'name', headerName: 'name', width: 150},
    {field: 'birthYear', headerName: 'birth year', width: 150},
    {field: 'eyeColor', headerName: 'eye color', width: 150},
    {field: 'hairColor', headerName: 'hair color', width: 150},
    {field: 'homeworldName', headerName: 'home world', width: 150},
  ];

  return (
    <Paper>
      <Box>
        {loading && <div>Loading...</div>}
        {data && (
          <div style={{height: 700, width: '100%'}}>
            <DataGrid rows={serializedData} columns={columns} />
          </div>
        )}
      </Box>
    </Paper>
  );
};

export default Table;
