//mantine UI
import { Table } from "@mantine/core";

//types
import { PropertyData } from "../types/PropertData"

export default function TableRowComponent({ point, index, children, displayIndex = true }: { point: PropertyData, index?: number, children?: React.ReactNode, displayIndex?: boolean }) {
    return (
        <Table.Tr key={point.id}>
            {displayIndex && <Table.Td>{index}</Table.Td>}
            <Table.Td>{point.id}</Table.Td>
            <Table.Td>{point.type}</Table.Td>
            <Table.Td>{point.beds}</Table.Td>
            <Table.Td>{point.baths}</Table.Td>
            <Table.Td>{point.garage}</Table.Td>
            <Table.Td>{point.sqft}</Table.Td>
            <Table.Td>{point.stories}</Table.Td>
            <Table.Td>{point.year_built}</Table.Td>
            <Table.Td>{point.listPrice}</Table.Td>
            <Table.Td>{point.status}</Table.Td>
            {children}
        </Table.Tr>
    )
}
