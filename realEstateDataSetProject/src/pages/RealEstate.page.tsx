//mantine UI
import { Box, em, Table } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const boxStyle: React.CSSProperties = {
    overflowX: isMobile ? "auto" : "unset"
  };

  const { data: realEstates, isLoading } = useFetchData();
  const realEstatesJsx = realEstates?.map((property: PropertyData) => (
    <TableRowComponent point={property} key={property.id} displayIndex={false} />
  ));

  if (isLoading) return <LoadingComponent />;
  return (
    <>
      {notify && <SuccessNotificationComponent msg={notify} />}
      <Box style={boxStyle}>
        {realEstates &&
          <Table verticalSpacing="md" highlightOnHover withTableBorder withColumnBorders stickyHeader stickyHeaderOffset={0} px={4}>
            <TableHeadComponent displayIndex={false} />
            <Table.Tbody>{realEstatesJsx}</Table.Tbody>
          </Table>
        }
      </Box>
    </>
  )
}