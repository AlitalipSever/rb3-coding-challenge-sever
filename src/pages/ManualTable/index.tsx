import {FC} from 'react';
import {Container} from '@mui/material';
import Table from '../../components/Table';

type Props = {};
const ManualTable: FC<Props> = ({}) => {
  return (
    <Container>
      <Table />
    </Container>
  );
};

export default ManualTable;
