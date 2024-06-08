import { Accordion, Box } from '@mantine/core';
import { useAppSelector } from '../app/hooks';
import KmeansClusterPointsComponent from '../components/KmeansClusterPoints.component';


export default function KmeansResultsPage() {
    const { clusters, centroidsIds } = useAppSelector((state) => state.kmean);
    return (
        <Box my='sm'>
            <Accordion variant="separated" radius="lg">
                {(clusters.length !== 0) ? clusters.map((cluster, index) => (
                    <Accordion.Item key={index} value={(index).toString()}>
                        <KmeansClusterPointsComponent cluster={cluster} index={index} centroidId={centroidsIds[index]} />
                    </Accordion.Item>
                )) : <p>no data here, return to form please</p>}
            </Accordion>
        </Box>
    )
}
