import { Box, Notification, rem } from "@mantine/core";
import { IconCheck } from '@tabler/icons-react';
import { useSuccessNotification } from "../context/SuccessNotificationProvider";

export default function SuccessNotificationComponent({ msg }: { msg: string }) {
    const { handleNotify } = useSuccessNotification();
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

    return (
        <Box w={{ sm: '40%', md: '30%' }} pos='sticky' top='60px' left='100%' style={{ zIndex: 10000 }}>
            <Notification radius="md" icon={checkIcon} title={msg} withBorder bg='#eee' onClose={() => handleNotify(undefined)} />
        </Box>
    )
}
