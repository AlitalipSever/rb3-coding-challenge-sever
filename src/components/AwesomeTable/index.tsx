import {FC} from 'react';
import {ArrayOfSerializedData, SerializedData} from '../../utils/serializeData';
import {Container, Paper, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

type Props = {
  serializedData: ArrayOfSerializedData;
  currentPage: number;
  itemsPerPage: number;
};

const AwesomeTable: FC<Props> = ({serializedData, itemsPerPage, currentPage}) => {
  const AvesomeTableBody = () => {
    return serializedData.map((n: SerializedData) => (
      <TableRow key={n.id}>
        <TableCell>{n.name}</TableCell>
        <TableCell>{n.birthYear}</TableCell>
        <TableCell>{n.eyeColor}</TableCell>
        <TableCell>{n.homeworldName}</TableCell>
      </TableRow>
    ));
  };

  const headers = [
    {key: 'name', label: 'Name'},
    {key: 'birthYear', label: 'Birth Year'},
    {key: 'eyeColor', label: 'Eye Color'},
    {key: 'homeworldName', label: 'Homeworld'},
  ];

  return (
    <Container>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map(n => (
                <TableCell key={n.key}>{n.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody> {AvesomeTableBody()}</TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default AwesomeTable;
