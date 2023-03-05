import {FC, useEffect, useState} from 'react';
import {Pagination, Stack, Typography} from '@mui/material';
import useGetData from '../../hooks/useGetData';
import {ArrayOfSerializedData, serializeData} from '../../utils/serializeData';
import AwesomeTable from '../../components/AwesomeTable';
import Box from '@mui/material/Box';

const ITEMS_PER_PAGE = 10;
type Props = {};
const ManualPage: FC<Props> = () => {
  const {fetchPage, data, loading} = useGetData();
  const [serializedData, setSerializedData] = useState<ArrayOfSerializedData>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetchPage();
    if (data) {
      const serialized = serializeData(data.allPeople.edges);
      setSerializedData(serialized);
      setTotalPages(Math.ceil(serialized.length / ITEMS_PER_PAGE));
    }
  }, [data, fetchPage]);

  return (
    <Box sx={{backgroundColor: 'white', alignItems: 'center'}}>
      <Typography color={'black'}>Page: {currentPage}</Typography>
      <Stack spacing={2}>
        <Box>{loading && <div>Loading...</div>}</Box>
        <AwesomeTable
          serializedData={serializedData}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
        />
        <Stack spacing={2} sx={{alignItems: 'center'}}>
          <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ManualPage;
