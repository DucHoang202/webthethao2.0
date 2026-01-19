import { useState } from "react";
import Image from "next/image";
export default function Avatar({ avatar }: { avatar: string }) {
    const [src, setSrc] = useState(avatar ?? "/assets/fallback.webp");

    return (
        <Image
            src={src}
            alt="avatar"
            width={24}
            height={24}
            onError={() => setSrc("/assets/fallback.webp")}
        />
    )
}