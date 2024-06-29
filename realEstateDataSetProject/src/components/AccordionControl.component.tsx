import { Accordion, Flex, Text } from '@mantine/core';

export default function AccordionControlComponent({ index, length, centroidId }: { index: number, length: number, centroidId: number }) {
    return (
        <Accordion.Control >
            <Flex gap={{ base: "lg", sm: "xl" }}
                px='xl'
                justify='space-between'
                align="center"
                direction="row">
                <Text fz="md" fw='bold'>
                    cluster index: {index}
                </Text>
                <Text fz="md" fw='bold'>
                    cluster centroid Id: {centroidId}
                </Text>
                <Text fz="md" fw='bold'>
                    cluster length: {length}
                </Text>
            </Flex>
        </Accordion.Control>
    )
}
