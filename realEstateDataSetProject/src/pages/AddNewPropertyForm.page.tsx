import { Grid, Title } from "@mantine/core";
import AddNewPropertyFormComponent from "../components/AddNewPropertyForm.component";


export default function AddNewPropertyFormPage() {
    return (
        <Grid justify="center" align="center" w={{ sm: '50%', md: "40%" }} p="lg" mx="auto">
            <Grid.Col span={{ xs: 10, sm: 12 }}>
                <Title mt="xl">Add New Property form:</Title>
                <AddNewPropertyFormComponent />
            </Grid.Col>
        </Grid>
    )
}
