import React from "react";
import SmallInfo from "../../Home/SmallInfo";
import { translateSlug } from "@/utils/extractArticlePath";
interface CardProps {
    avatar?: string | null;
    name?: string | null;
    time?: string | null;
    image?: string | null;
    title?: string | null;
    content?: string | null;
    category: string;
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
                    <a className="category cursor-pointer" href={`/category/${category}`}>
                        {translateSlug(category)}
                    </a>
                    <div className="right">
                        <div className="item" onClick={() => window.location.href = link || "#"}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.95768 11.0833H4.66602C2.33268 11.0833 1.16602 10.5 1.16602 7.58333V4.66666C1.16602 2.33333 2.33268 1.16666 4.66602 1.16666H9.33268C11.666 1.16666 12.8327 2.33333 12.8327 4.66666V7.58333C12.8327 9.91666 11.666 11.0833 9.33268 11.0833H9.04102C8.86018 11.0833 8.68518 11.1708 8.57435 11.3167L7.69935 12.4833C7.31435 12.9967 6.68435 12.9967 6.29935 12.4833L5.42435 11.3167C5.33102 11.1883 5.11518 11.0833 4.95768 11.0833Z" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.33143 6.41667H9.33667" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.99745 6.41667H7.00269" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.66346 6.41667H4.6687" stroke="#52524F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="text" style={{ display: hideText ? 'none' : 'block' }}>
                                Bình luận
                            </div>
                        </div>

                        <a className="item" href={link || "#"}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.58398 6.41666L12.3673 1.63333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.8332 3.96666V1.16666H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.41602 1.16666H5.24935C2.33268 1.16666 1.16602 2.33333 1.16602 5.25V8.75C1.16602 11.6667 2.33268 12.8333 5.24935 12.8333H8.74935C11.666 12.8333 12.8327 11.6667 12.8327 8.75V7.58333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
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