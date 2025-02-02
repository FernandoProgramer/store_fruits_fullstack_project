import DangerIcon from "../icons/DangerIcon"

interface AlerterrorProps {
    message: string
}
export default function AlertError({ message }: AlerterrorProps) {
    return (

        <>
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <DangerIcon />
                <span className="sr-only">Info</span>
                <div>
                    {message}
                </div>
            </div>
        </>

    )
}
