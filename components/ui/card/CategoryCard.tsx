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


const CategoryCard: React.FC<CardProps> = ({ avatar, name, time, image, title, content, category, official, link, style }) => {
    return (
        <div className="card--category" >
            <div className={`card--category__container `} style={style || {}}>

                <a href={link || "#"} className="image">
                    <img src={image || "/assets/image.webp"} alt="" className="image" /></a>
                <div className="body" >
                    <a href={link || "#"} className="title" >
                        {title}
                        <div className="content">{content}</div>
                    </a>

                    <div className="footer">
                        <div className="card--category__info">
                            <div className="card--category__name">{name}</div>
                            <div className="card--category__time">{time}</div>

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
export default CategoryCard;