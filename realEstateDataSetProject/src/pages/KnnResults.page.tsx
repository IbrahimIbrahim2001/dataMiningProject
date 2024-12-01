//mantine UI
import { Box, em, Table, Text } from '@mantine/core';

import { useAppSelector } from "../app/hooks";
import TableHeadComponent from '../components/TableHead.component';
import TableRowComponent from '../components/TableRow.component';
import { getCountOfTheMostFrequentCategory } from '../utils/getCountOfTheMostFrequentCategory';
import { useMemo } from 'react';
import { useMediaQuery } from '@mantine/hooks';

export default function KnnResultsPage() {
  const res = useAppSelector((state) => state.knn.data);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const boxStyle: React.CSSProperties = {
    overflowX: isMobile ? "auto" : "unset"
  };

  const mostRepeatedCategory = useMemo(() => {
    return res.map((ele) => ele.category);
  }, [res])
  const myCategory: string = getCountOfTheMostFrequentCategory(mostRepeatedCategory);
  return (
    <Box my='sm' style={boxStyle}>
      <Text size='xl' mb='sm' fw='700'>most Frequent Category: {myCategory.toUpperCase()}</Text>
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
