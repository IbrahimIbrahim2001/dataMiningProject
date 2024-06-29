import { Accordion, Table } from '@mantine/core';


//types
import { PropertyData } from '../types/PropertData';

//components
import TableHeadComponent from './TableHead.component';
import TableRowComponent from './TableRow.component';
import AccordionControlComponent from './AccordionControl.component';

export default function KmeansClusterPointsComponent({ cluster, index, centroidId }: { cluster: PropertyData[], index: number, centroidId: number }) {

    return (
        <>
            <AccordionControlComponent index={index + 1} length={cluster.length} centroidId={centroidId} />
            <Accordion.Panel>
                <Table verticalSpacing="md" highlightOnHover withTableBorder withColumnBorders stickyHeader stickyHeaderOffset={50} px={4}>
                    <TableHeadComponent />
                    <Table.Tbody>
                        {
                            cluster.map((point, pointIndex) => (
                                <TableRowComponent key={point.id} point={point} index={pointIndex + 1} />
                            ))
                        }
                    </Table.Tbody>
                </Table>
            </Accordion.Panel>

        </>
    )
}
