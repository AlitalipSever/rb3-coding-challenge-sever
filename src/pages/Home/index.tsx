import {FC} from 'react';
import {Container} from '@mui/material';
import Table from '../../components/Table';

type Props = {};
const HomePage: FC<Props> = () => {
  return (
    <Container>
      <Table />
    </Container>
  );
};

export default HomePage;
