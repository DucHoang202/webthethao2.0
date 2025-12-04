'use client'
import { useState } from "react";
interface MatchData {
    title: string;
    location: string;
    category: string;
    board: MatchBoardItem[];
}

interface MatchBoardItem {
    time: string;
    leftTeam: TeamProps;
    rightTeam: TeamProps;
}

interface TeamProps {
    name: string;
    logo: string;
    score: string; // data mẫu dùng string
    handicap: {
        point: string;
        calc: string;
    };
    taixiu: {
        point: string;
        calc: string;
    };
    oneTwo: {
        point: string;
        calc: string;
    };
    forecastPercent: number;
}

const Match: React.FC<MatchData> = ({ title, location, category, board }) => {
    const [genre, setGenre] = useState(0);
    const currentField =
        genre === 0 ? "handicap" :
            genre === 1 ? "taixiu" :
                "oneTwo";

    return (

        <div className="league" >
            <div className="league__title">
                {title}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.3335 13.3333L11.6668 10L8.3335 6.66667"
                        stroke="#808797"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className="league__location">{location} • {board.length} trận </div>
            {board.map((item, index) => (
                <div className="prediction">

                    <div className="flex justify-between w-full">

                        <div className="league__location prediction__time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_2009_5492)">
                                    <path d="M8 4V8L10.6667 9.33333" stroke="#808797" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8C14.6668 4.3181 11.6821 1.33333 8.00016 1.33333C4.31826 1.33333 1.3335 4.3181 1.3335 8C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#808797" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2009_5492">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {item.time}

                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.9977 6.49606C12.61 5.79093 13.6695 4.99919 15.2825 4.99919C18.1043 4.99919 19.9964 7.60626 19.9964 10.034C19.9964 15.109 13.5779 18.9969 11.9977 18.9969C10.4176 18.9969 3.99902 15.109 3.99902 10.034C3.99902 7.60626 5.89116 4.99919 8.71293 4.99919C10.326 4.99919 11.3854 5.79093 11.9977 6.49606Z" stroke="#808797" stroke-width="1.49976" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="prediction__score border-bottom">
                        <div className="team">
                            <div className="logo">
                                {item.leftTeam.logo}
                            </div>
                            <div className="name">{item.leftTeam.name}</div>
                        </div>
                        <div className="middle league__location">
                            Dự báo
                            <div className="ai_score-container">
                                <div className="ai-score">
                                    {item.leftTeam.score}
                                </div>
                                <div className="ai-score">
                                    :
                                </div>
                                <div className="ai-score">
                                    {item.rightTeam.score}
                                </div>
                            </div>
                        </div>
                        <div className="team">
                            <div className="logo">
                                {item.rightTeam.logo}                        </div>
                            <div className="name">{item.rightTeam.name}</div>
                        </div>
                    </div>
                    <div className="gap-8px">
                        <div className="prediction__score  ">
                            <div className="category">
                                <div className={`category__title ${genre === 0 ? 'active' : ''}`} onClick={() => setGenre(0)}>
                                    Handicap
                                </div>
                                <div className={`category__title ${genre === 1 ? 'active' : ''}`} onClick={() => setGenre(1)}>
                                    Tài/Xỉu
                                </div>
                                <div className={`category__title ${genre === 2 ? 'active' : ''}`} onClick={() => setGenre(2)}>
                                    1X2                        </div>
                            </div>
                        </div>
                        <div className="prediction__score">
                            <div className="factor">
                                {item.leftTeam.name} ({item.leftTeam[currentField].calc})
                                <div className="number">
                                    {item.leftTeam[currentField].point}
                                </div>
                            </div>

                            <div className="factor w-[auto]">VS</div>

                            <div className="factor">
                                {item.rightTeam.name} ({item.rightTeam[currentField].calc})
                                <div className="number">
                                    {item.rightTeam[currentField].point}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="prediction__forecast">
                        <div className="title">
                            <div className="">
                                AI dự báo
                            </div>
                            <div className="flex gap-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_2009_5549)">
                                        <path d="M10.667 4.66666H14.667V8.66666" stroke="#1F2022" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.6663 4.66666L8.99967 10.3333L5.66634 6.99999L1.33301 11.3333" stroke="#1F2022" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2009_5549">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {
                                    Number(item.leftTeam.forecastPercent) > Number(item.rightTeam.forecastPercent)
                                        ? `${item.leftTeam.name} ${item.leftTeam.forecastPercent}%`
                                        : `${item.rightTeam.name} ${item.rightTeam.forecastPercent}%`
                                }

                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="segment blue" style={{ width: `${item.leftTeam.forecastPercent}%` }}></div>
                            <div className="segment gray" style={{ width: `${100 - item.leftTeam.forecastPercent - item.rightTeam.forecastPercent}%` }}></div>
                            <div className="segment red" style={{ width: `${item.rightTeam.forecastPercent}%` }}></div>
                        </div>
                        <div className="title percent">
                            <div >{item.leftTeam.forecastPercent}%</div>
                            <div >{100 - item.leftTeam.forecastPercent - item.rightTeam.forecastPercent}%</div>
                            <div >{item.rightTeam.forecastPercent}%</div>

                        </div>


                    </div>
                    <div className="prediction__genre orange">
                        BIẾN ĐỘNG
                    </div>
                </div>
            ))}
        </div>


    )
}
export default Match