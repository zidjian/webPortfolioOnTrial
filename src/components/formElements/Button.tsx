// "use client"

import Image from "next/image";

interface Props {
    icon?: string;
    text: string;
    bgColor?: string;
    border?: string;
    variant?: "bordered" | "solid";
    onClick?: () => void;
}

export function Button({
    icon,
    text,
    bgColor = "#5E5B5F",
    variant = "solid",
    onClick,
}: Props) {
    switch (variant) {
        case "solid":
            return (
                <button
                    className="flex items-center gap-3 py-3 px-14 w-full justify-center rounded-lg"
                    style={{
                        background: bgColor,
                        border: bgColor,
                    }}
                    onClick={onClick}
                >
                    {icon && (
                        <Image src={icon} alt={""} width={20} height={20} />
                    )}
                    {text}
                </button>
            );
        case "bordered":
            return (
                <button
                    className="flex items-center gap-3 py-3 px-14 w-full justify-center rounded-lg"
                    style={{
                        background: "transparent",
                        border: `solid 1px ${bgColor}`,
                    }}
                    onClick={onClick}
                >
                    {icon && (
                        <Image src={icon} alt={""} width={20} height={20} />
                    )}
                    {text}
                </button>
            );
    }
}
