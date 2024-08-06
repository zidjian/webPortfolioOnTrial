import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { auth } from "@/auth.conf";

export async function Header() {
    const session: any = await auth();

    return (
        <div className="flex justify-end py-4 items-center gap-4 w-full max-w-7xl m-auto absolute left-1/2 -translate-x-1/2">
            <Link href={"/"} className="text-[#B86EF0]">
                Entrar a una sala
            </Link>
            <figure className="border border-[#5E5B5F] rounded-full p-1">
                <Image
                    src={session.user.image}
                    alt={"Avatar"}
                    width={42}
                    height={42}
                    className="rounded-full"
                />
            </figure>
        </div>
    );
}
