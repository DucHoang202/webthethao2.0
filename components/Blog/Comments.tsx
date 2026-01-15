import { useState } from "react"
import { JSX } from "react/jsx-runtime"
import Image from "next/image"
const Comments = ({ avatar, name, content, time }: { avatar: string, name: string, content: string, time: string }) => {

    return (
        <div className="comments">
            <Image className="avatar"
                src={avatar}
                alt="thumb"
                onError={(e) => {
                    e.currentTarget.src = "/assets/fallback.webp";
                }}
            />
            <div className="right">
                <div className="comment-container">
                    <div className="comment">
                        <div className="name">{name}</div>
                        <div className="content">{content}</div>
                    </div>
                    <div className="time">
                        {time}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comments