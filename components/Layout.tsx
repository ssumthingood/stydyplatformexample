import { cls } from "@libs/utils";

interface LayoutProps {
    children: React.ReactNode;
}

export default function MyLayout({ children }: LayoutProps) {
    return <div className={cls("w-full bg-purple-300 text-white")}>{children}</div>;
}
