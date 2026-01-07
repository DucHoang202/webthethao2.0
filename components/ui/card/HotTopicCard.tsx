import React from 'react';
import { List } from '@/types/Types';
import extractArticlePath from '@/utils/extractArticlePath';
const HotTopic: React.FC<{ isTitled?: boolean, hotTopic?: List[] }> = ({ isTitled, hotTopic = [] }) => {
    return (
        <div className='card--trending'>
            {isTitled && <div className="title">
                Chủ đề nóng
            </div>}
            <div className="card--trending__body">

                {
                    hotTopic.map((item, index) => (
                        <a className="sentence" href={`/blog/${extractArticlePath(item.article_url)}`}
                            key={index}
                        >
                            <div className="dot"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                <path d="M0 0H4V4H0V0Z" fill="black" />
                            </svg></div>
                            <div className="text">{item.title}</div>
                        </a>
                    ))
                }  </div>
        </div>
    );
};

export default HotTopic;