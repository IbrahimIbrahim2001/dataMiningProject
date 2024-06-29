import { Grid, Title } from "@mantine/core";

import KmeanFormComponent from "../components/KmeansForm.component";


export default function KmeansFormPage() {
    return (
        <>
            <Grid justify="center" align="center" w={{ sm: '50%', md: "40%" }} p="lg" mx="auto">
                <Grid.Col span={{ xs: 10, sm: 12 }}>
                    <Title mt="xl">Kmeans form:</Title>
                    <KmeanFormComponent />
                </Grid.Col>
            </Grid>
        </>
    )
}
