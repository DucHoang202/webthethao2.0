import React from "react";
import SmallInfo from "./SmallInfo";
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


const Card: React.FC<CardProps> = ({ avatar, name, time, image, title, content, category, official }) => {
    return (
        <div className="blog-card">
            <SmallInfo avatar={avatar} name={name} time={time} official={official} />
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
                            <div className="text">
                                Bình luận
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/export.webp" alt="" className="icon" />
                            <div className="text">
                                Chia sẻ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card