import Image from "next/image"
import { useState } from "react";
import "../../styles/blocks/home/_small-info.scss"
interface SmallInfoProps {
    avatar: any;
    name: any;
    official: any;
    time: any;
    className?: string;
}

const SmallInfo = ({ avatar, name, official, time, className }: SmallInfoProps) => {
    const [src, setSrc] = useState(avatar ?? "/assets/fallback.webp");
    return (
        <div className={`info-horizontal`}>
            <div >
                <Image
                    src={src}
                    alt="avatar"
                    width={24}
                    height={24}
                    onError={() => setSrc("/assets/fallback.webp")}
                    className={`w-[24px] h-[24px] display: block; ${className}`}
                />
            </div>
            <div className="col">
                <div className="row">
                    <div className={`name ${className}`} >
                        {name}
                    </div>
                    {
                        official && <img src="/assets/verify.webp" alt="" className="official" />
                    }
                </div>
                <div className={`time ${className}`}>
                    {time}
                </div>
            </div>
        </div>
    )
}
export default SmallInfo