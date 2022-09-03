import useAuth from "@libs/auth";
import { cls } from "@libs/utils";

interface HeaderProps {
    text: string;
}

export default function MyHeader({ text, ...rest }: HeaderProps) {
    const user = useAuth(false);
    console.log(user);
    return (
        <div {...rest} className={cls("w-full bg-purple-300 text-white")}>
            {text}
        </div>
    );
}
