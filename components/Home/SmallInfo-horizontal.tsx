import Image from "next/image"
import Avatar from "../Blog/Avatar"
interface SmallInfoProps {
    avatar: any;
    name: any;
    official: any;
    time: any;
}

const SmallInfo = ({ avatar, name, official, time }: SmallInfoProps) => {
    return (
        <div className="info-horizontal">
            <Avatar avatar={avatar} />
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