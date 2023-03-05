import {FC, useEffect, useState} from 'react';
import {Container, Pagination, Typography} from '@mui/material';
import useGetData from '../../hooks/useGetData';
import {ArrayOfSerializedData, serializeData} from '../../utils/serializeData';
import AwesomeTable from '../../components/AwesomeTable';
import Box from '@mui/material/Box';

const ITEMS_PER_PAGE = 10;
type Props = {};
const ManualPage: FC<Props> = ({}) => {
  const {fetchPage, data, loading} = useGetData();
  const [serializedData, setSerializedData] = useState<ArrayOfSerializedData>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPage();
    if (data) {
      const serialized = serializeData(data.allPeople.edges);
      setSerializedData(serialized);
      setTotalPages(Math.ceil(serialized.length / ITEMS_PER_PAGE));
    }
  }, [data]);

  return (
    <Container>
      <Typography color={'black'}>Page: {currentPage}</Typography>
      <Box>{loading && <div>Loading...</div>}</Box>
      <AwesomeTable
        serializedData={serializedData}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={totalPages}
      />
      <Pagination count={totalPages} page={currentPage} />
    </Container>
  );
};

export default ManualPage;
