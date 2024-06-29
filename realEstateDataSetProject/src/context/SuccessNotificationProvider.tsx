import { createContext, useContext, useState } from "react";


interface SuccessNotificationContextType {
    notify?: string,
    handleNotify: (msg: string | undefined) => void
}


const SuccessNotificationContext = createContext<SuccessNotificationContextType | undefined>(undefined);


export function useSuccessNotification() {
    const context = useContext(SuccessNotificationContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}


export function SuccessNotificationProvider({ children }: { children: React.ReactNode }) {
    const [notify, setNotify] = useState<string | undefined>();
    const handleNotify = (msg: string | undefined) => {
        setNotify(msg);
    };
    return (
        <SuccessNotificationContext.Provider value={{ notify, handleNotify }}>
            {children}
        </SuccessNotificationContext.Provider>
    );
}

