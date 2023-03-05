import {FC, useCallback, useState} from 'react';
import {ArrayOfSerializedData, SerializedData} from '../../utils/serializeData';
import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

type Props = {
  serializedData: ArrayOfSerializedData;
  currentPage: number;
  itemsPerPage: number;
};

type SortKeys = 'name' | 'birthYear' | 'eyeColor' | 'homeworldName';
type SortOrder = 'asc' | 'desc';

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: ArrayOfSerializedData;
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (!sortKey) return tableData;
  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) sortedData.reverse();
  return sortedData;
}

const AwesomeTable: FC<Props> = ({serializedData, itemsPerPage, currentPage}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const tableData = serializedData.slice(startIndex, endIndex);
  const [sortKey, setSortKey] = useState<SortKeys>('birthYear');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortedData = useCallback(
    () => sortData({tableData, sortKey, reverse: sortOrder === 'desc'}),
    [tableData, sortKey, sortOrder],
  );

  const handleSortClick = (key: SortKeys) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const AvesomeTableBody = () => {
    return sortedData().map((n: SerializedData) => (
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
                <TableCell
                  key={n.key}
                  onClick={() =>
                    handleSortClick(n.key as 'name' | 'birthYear' | 'eyeColor' | 'homeworldName')
                  }>
                  {n.label}
                  {sortKey === n.key && (
                    <IconButton size="small">
                      {sortOrder === 'asc' ? (
                        <Typography>foo</Typography>
                      ) : (
                        <Typography>zoo</Typography>
                      )}
                    </IconButton>
                  )}
                </TableCell>
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
