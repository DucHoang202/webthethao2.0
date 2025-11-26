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


const SimpleCard: React.FC<CardProps> = ({ avatar, name, time, image, title, content, category, official }) => {
    return (
        <div className="simple-card">
            <div className="info">
                <img src={avatar} alt="" className="avatar" />
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
            <img src={image} alt="" className="image" />
            <div className="body">
                <div className="title">
                    {title}
                </div>
                <div className="content clamp-2">
                    {content}
                </div>
                <div className="footer">
                    <div className="category">
                        {category}
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
    )
}
export default SimpleCard;