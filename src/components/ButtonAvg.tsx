import { ReactNode } from "react";

interface BtnProps {
    label: string;
    iconRight?: ReactNode
}

const ButtonAvg = ({ label, iconRight }: BtnProps) => {
    return (
        <button className="button flex flex-cols-2">{label}
            {iconRight && (iconRight)}
        </button>
    )
}

export default ButtonAvg;