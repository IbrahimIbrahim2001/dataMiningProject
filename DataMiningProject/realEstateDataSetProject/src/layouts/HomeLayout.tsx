//react router
import { Outlet } from "react-router-dom";

//components
import MainNavbarComponent from "../components/MainNavbar.component";

//mantine UI
import { Box } from '@mantine/core';


export default function HomeLayout() {
    return (
        <>
            <MainNavbarComponent />
            <Box my="xl" p='lg'>
                <Outlet />
            </Box>
        </>
    )
}
