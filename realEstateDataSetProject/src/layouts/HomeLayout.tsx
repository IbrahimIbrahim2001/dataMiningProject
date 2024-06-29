//react router
import { Outlet } from "react-router-dom";

//components
import MainNavbarComponent from "../components/MainNavbar.component";

//mantine UI
import { Box } from '@mantine/core';

//context
import { SuccessNotificationProvider } from "../context/SuccessNotificationProvider";


export default function HomeLayout() {
    return (
        <SuccessNotificationProvider>
            <MainNavbarComponent />
            <Box my="xl" p='lg'>
                <Outlet />
            </Box>
        </SuccessNotificationProvider>
    )
}
