import React from "react";

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
    style?: React.CSSProperties | null;
    border?: React.CSSProperties | null;
}


const SmallCard: React.FC<CardProps> = ({ avatar, name, time, image, title, content, category, official, link, style }) => {
    return (
        <div className="card--article" >
            <div className={`card--article__container `} style={style || {}}>

                <a href={link || "#"} className="image">
                    <img src={image || "/assets/image.webp"} alt="" className="image" /></a>
                <div className="body" >
                    <a href={link || "#"} className="title" >
                        {title}
                    </a>

                    <div className="footer">
                        <div className="card--article__info">
                            <div className="card--article__name">{name}</div>
                            <div className="card--article__time">{time}</div>

                        </div>
                        <div className="right">
                            <div className="item" onClick={() => window.location.href = link || "#"}>
                                <img src="/assets/message.webp" alt="" className="icon" />

                            </div>

                            <div className="item">
                                <img src="/assets/export.webp" alt="" className="icon" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SmallCard;