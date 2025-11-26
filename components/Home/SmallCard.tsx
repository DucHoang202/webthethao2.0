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
}


const SmallCard: React.FC<CardProps> = ({ avatar, name, time, image, title, content, category, official }) => {
    return (
        <div className="small-card">
            <div className="small-card__container">


                <img src={image} alt="" className="image" />
                <div className="body">
                    <div className="title">
                        {title}
                    </div>

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