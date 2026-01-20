import React from "react";
import SmallInfo from "../../Home/SmallInfo";
interface CardProps {
    avatar?: string | null;
    name?: string | null;
    time?: string | null;
    image?: string | null;
    title?: string | null;
    content?: string | null;
    category?: string | null;
    official?: boolean | null;
    link?: string | null;
    className?: string | null;
    hideText?: boolean | null;
}


const Card: React.FC<CardProps> = ({ avatar, name, time, image, title, content, category, official, link, className, hideText }) => {
    return (
        <div className={`card--news ${className}`} >
            <div className={`info ${className}`}>
                <img src={avatar || "/assets/Rectangle 1.webp"} alt="" className="avatar" />
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
            </div>            <a href={link || "#"}>
                <img src={image || "/assets/image.webp"} alt="" className="image" style={{ width: "100%" }} /></a>
            <div className="body">
                <a href={link || "#"} className="title">
                    {title}
                </a>
                <div className="content clamp-2">
                    {content}
                </div>
                <div className="footer">
                    <div className="category">
                        {category}
                    </div>
                    <div className="right">
                        <div className="item" onClick={() => window.location.href = link || "#"}>
                            <img src="/assets/message.webp" alt="" className="icon" />
                            <div className="text" style={{ display: hideText ? 'none' : 'block' }}>
                                Bình luận
                            </div>
                        </div>

                        <a className="item" href={link || "#"}>
                            <img src="/assets/export.webp" alt="" className="icon" />
                            <div className="text" style={{ display: hideText ? 'none' : 'block' }}>
                                Chia sẻ
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card