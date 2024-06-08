import { Loader, Flex } from '@mantine/core';


export default function LoadingComponent() {
    return (
        <Flex justify='center' align='center' h='70vh'>
            <Loader color="indigo" size={40} />
        </Flex>
    )
}
