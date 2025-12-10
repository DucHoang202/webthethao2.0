import React from 'react';

const HotTopic: React.FC<{ isTitled?: boolean }> = ({ isTitled }) => {
    const hotTopic = [
        {
            link: "",
            text: "Đoàn Văn Hậu như trở lại tuổi thơ khi đi truyền cảm hứng bóng đá cho các cầu thủ nhí"
        },
        {
            link: "",
            text: "Đai vô địch WBC Muay Thai thế giới lần đầu được tranh tài tại Việt Nam"
        },
        {
            link: "",
            text: `CLB Hà Nội quyết "đòi lại" ngôi vương V.League 2023/24, xác định "nhì là thất bại"`
        },
        {
            link: "",
            text: `CLB Hà Nội quyết "đòi lại" ngôi vương V.League 2023/24, xác định "nhì là thất bại"`
        }
    ]
    return (
        <div className='card--trending'>
            {isTitled && <div className="title">
                Chủ đề nóng
            </div>}
            <div className="card--trending__body">

                {
                    hotTopic.map((item, index) => (
                        <a className="sentence" href={item.link}
                            key={index}
                        >
                            <div className="dot"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                <path d="M0 0H4V4H0V0Z" fill="black" />
                            </svg></div>
                            <div className="text">{item.text}</div>
                        </a>
                    ))
                }  </div>
        </div>
    );
};

export default HotTopic;