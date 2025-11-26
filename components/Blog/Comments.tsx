const Comments = ({ avatar, name, content, time }: { avatar: string, name: string, content: string, time: string }) => {
    return (
        <div className="comments">
            <img className="avatar" src={avatar} alt="" />
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