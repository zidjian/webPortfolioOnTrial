import { Header } from "@/components/ui";
import styles from "./Component.module.css";

interface Props {
    children: React.ReactNode;
}

export default function UserLayout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
