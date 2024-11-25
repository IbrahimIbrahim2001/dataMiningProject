import { Button } from "@mantine/core";

export default function SubmitButton({ status }: { status: string }) {
    return (
        <Button type="submit" mt="md" variant="filled" bg={status === 'idle' ? "indigo" : "#e2e2e2"}
            disabled={status !== 'idle'}
            c="#fff"
        >
            {status === 'idle' ? "Submit" : "Submiting..."}
        </Button>
    )
}
