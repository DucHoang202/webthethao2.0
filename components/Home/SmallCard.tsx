import React from "react";

interface CardProps {
    avatar: string;
    name: string;
    time: string;
    image: string;
    title: string;
    content: string;
    category: string;
    official: boolean;
    link: string;
    style?: React.CSSProperties;
    border?: React.CSSProperties;
}


const SmallCard: React.FC<CardProps> = ({ avatar, name, time, image, title, content, category, official, link, style }) => {
    return (
        <div className="small-card" >
            <div className={`small-card__container `} style={style}>

                <a href={link} className="image">
                    <img src={image} alt="" className="image" /></a>
                <div className="body" >
                    <a href={link} className="title" >
                        {title}
                    </a>

                    <div className="footer">
                        <div className="small-card__info">
                            <div className="small-card__name">{name}</div>
                            <div className="small-card__time">{time}</div>

                        </div>
                        <div className="right">
                            <div className="item">
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