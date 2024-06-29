//mantine UI
import { Grid, Title } from "@mantine/core";


//components
import KnnFormComponent from "../components/KnnForm.component";


export default function KnnFormPage() {
  return (
    <>
      <Grid justify="center" align="center" w={{ sm: '50%', md: "40%" }} p="lg" mx="auto" >
        <Grid.Col span={{ xs: 10, sm: 12 }}>
          <Title mt="xl">KNN form:</Title>
          <KnnFormComponent />
        </Grid.Col>
      </Grid>
    </>
  )
}
