const SmallInfo = ({ avatar, name, official, time }: any) => {
    return (
        <div className="info-horizontal">
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
    )
}
export default SmallInfo