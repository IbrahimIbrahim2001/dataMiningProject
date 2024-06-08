//mantine UI
import { Box, Table } from '@mantine/core';

import { useAppSelector } from "../app/hooks";
import TableHeadComponent from '../components/TableHead.component';
import TableRowComponent from '../components/TableRow.component';

export default function KnnResultsPage() {
  const res = useAppSelector((state) => state.knn.data);
  return (
    <Box my='sm'>
      {(res.length > 0) ?
        <Table verticalSpacing="md" highlightOnHover withTableBorder withColumnBorders stickyHeader stickyHeaderOffset={50} px={4}>
          <TableHeadComponent >
            <Table.Th>category</Table.Th>
            <Table.Th>distance</Table.Th>
          </TableHeadComponent>
          {res.map((property, index) => (
            <TableRowComponent key={property.id} point={property} index={index + 1}>
              <Table.Td>{property.category}</Table.Td>
              <Table.Td>{property.distance}</Table.Td>
            </TableRowComponent>
          ))}
        </Table> : <p>no data here, back to form..</p>}
    </Box>
  )
}
