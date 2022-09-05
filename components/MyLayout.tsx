import { cls } from "@libs/utils";

interface LayoutProps {
    children: React.ReactNode;
}

export default function MyLayout({ children }: LayoutProps) {
    return <div className={cls("")}>{children}</div>;
}
