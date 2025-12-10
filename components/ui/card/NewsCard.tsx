import React from "react";
import SmallInfo from "../../Home/SmallInfo";
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
}


const Card: React.FC<CardProps> = ({ avatar, name, time, image, title, content, category, official, link }) => {
    return (
        <div className="card--news" >
            <SmallInfo avatar={avatar} name={name} time={time} official={official} />
            <a href={link}>
                <img src={image} alt="" className="image" style={{ width: "100%" }} /></a>
            <div className="body">
                <a href={link} className="title">
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