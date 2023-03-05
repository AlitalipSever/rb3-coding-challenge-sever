import {FC, useState} from 'react';
import {Container} from '@mui/material';
import useGetData from '../../hooks/useGetData';
import {ArrayOfSerializedData} from '../../utils/serializeData';
import AwesomeTable from '../../components/AwesomeTable';

type Props = {};
const ManualPage: FC<Props> = ({}) => {
  const {fetchPage, data, loading} = useGetData();
  const [serializedData, setSerializedData] = useState<ArrayOfSerializedData>([]);
  return (
    <Container>
      <AwesomeTable />
    </Container>
  );
};

export default ManualPage;
