//react router
import { Outlet } from "react-router-dom";

//components
import MainNavbarComponent from "../components/MainNavbar.component";

//mantine UI
import { Box, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

//context
import { SuccessNotificationProvider } from "../context/SuccessNotificationProvider";

export default function HomeLayout() {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    return (
        <SuccessNotificationProvider>
            <MainNavbarComponent />
            <Box my={isMobile ? "md" : "xl"} p={isMobile ? "" : "lg"}>
                <Outlet />
            </Box>
        </SuccessNotificationProvider>
    )
}
