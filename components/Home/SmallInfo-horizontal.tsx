import Image from "next/image"
const SmallInfo = ({ avatar, name, official, time }: any) => {
    return (
        <div className="info-horizontal">
            <Image className="avatar"
                src={avatar}
                alt="thumb"
                onError={(e) => {
                    e.currentTarget.src = "/assets/fallback.webp";
                }}
                width={24}
                height={24}
            />
            <div className="col">
                <div className="row">
                    <div className="name">
                        {name}
                    </div>
                    {
                        official && <img src="/assets/verify.webp" alt="" className="official" />
                    }
                </div>
                <div className="time">
                    {time}
                </div>
            </div>
        </div>
    )
}
export default SmallInfo