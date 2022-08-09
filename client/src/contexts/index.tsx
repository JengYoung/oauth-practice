import { ReactNode } from "react";
import UserProvider from "./UserContext";

interface Props {
    children: ReactNode
}
const ContextStore = ({ children }: Props) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default ContextStore;