//mantine UI
import { Box, Table } from '@mantine/core';

//hooks
import { useFetchData } from "../hooks/useFetchData";

//types
import { PropertyData } from '../types/PropertData';

//components
import TableHeadComponent from '../components/TableHead.component';
import TableRowComponent from '../components/TableRow.component';
import LoadingComponent from '../components/Loading.component';
import SuccessNotificationComponent from '../components/SuccessNotification.component';

//context
import { useSuccessNotification } from '../context/SuccessNotificationProvider';


export default function RealEstatePage() {
  const { notify } = useSuccessNotification();
  const { data: realEstates, isLoading, isRefetching } = useFetchData();
  const realEstatesJsx = realEstates?.map((property: PropertyData) => (
    <TableRowComponent point={property} key={property.id} displayIndex={false} />
  ));

  if (isLoading || isRefetching) return <LoadingComponent />;
  return (
    <>
      {notify && <SuccessNotificationComponent msg={notify} />}
      <Box>
        {realEstates &&
          <Table verticalSpacing="md" highlightOnHover withTableBorder withColumnBorders stickyHeader stickyHeaderOffset={60} px={4}>
            <TableHeadComponent displayIndex={false} />
            <Table.Tbody>{realEstatesJsx}</Table.Tbody>
          </Table>}
      </Box>
    </>
  )
}
`2`