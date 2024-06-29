import { Table } from "@mantine/core"

export default function TableHeadComponent({ children, displayIndex = true }: { children?: React.ReactNode, displayIndex?: boolean }) {
    return (
        <Table.Thead bg='indigo.5'>
            <Table.Tr>
                {displayIndex && <Table.Th>index</Table.Th>}
                <Table.Th>property-id</Table.Th>
                <Table.Th>type</Table.Th>
                <Table.Th>beds</Table.Th>
                <Table.Th>baths</Table.Th>
                <Table.Th>garage</Table.Th>
                <Table.Th>sqft</Table.Th>
                <Table.Th>stories</Table.Th>
                <Table.Th>year_built</Table.Th>
                <Table.Th>listPrice</Table.Th>
                <Table.Th>status</Table.Th>
                {children}
            </Table.Tr>
        </Table.Thead>
    )
}
