'use client'
import Cat from "./Cat";
import League from "./League";
import Sched from "./Sched";
import { useEffect, useState } from "react";

const SchedulePage = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedCat, setSelectedCat] = useState<string | null>(null);
    const handleDateChange = (date: string) => {
        setSelectedDate(date);
    }
    const handleCatChange = (cat: string) => {
        setSelectedCat(cat);
    }

    const cat = ["Bóng đá", "Bóng chuyền", "Bóng rổ", "Bóng volley", "Bóng bầu dục"]
    const league = [
        {
            animationDuration: "50s",
            title: "Champion League",
            cat: "Bóng đá",
            location: "UEFA",
            board: [
                {
                    date: "2025-12-06",
                    isActive: true,
                    time: "55'",
                    left: { name: "Man City", logo: "", score: "2" },
                    right: { name: "Liverpool", logo: "", score: "1" }
                },
                {
                    date: "2025-12-07",
                    isActive: false,
                    time: "FT",
                    left: { name: "Real Madrid", logo: "", score: "3" },
                    right: { name: "Barcelona", logo: "", score: "2" }
                },
                {
                    date: "2025-12-08",
                    isActive: true,
                    time: "72'",
                    left: { name: "Bayern", logo: "", score: "1" },
                    right: { name: "PSG", logo: "", score: "1" }
                },
                {
                    date: "2025-12-09",
                    isActive: false,
                    time: "FT",
                    left: { name: "Arsenal", logo: "", score: "0" },
                    right: { name: "Chelsea", logo: "", score: "2" }
                },
                {
                    date: "2025-12-10",
                    isActive: true,
                    time: "68'",
                    left: { name: "Inter Milan", logo: "", score: "2" },
                    right: { name: "AC Milan", logo: "", score: "2" }
                },
                {
                    date: "2025-12-11",
                    isActive: false,
                    time: "FT",
                    left: { name: "Juventus", logo: "", score: "1" },
                    right: { name: "Roma", logo: "", score: "1" }
                },
                {
                    date: "2025-12-12",
                    isActive: true,
                    time: "74'",
                    left: { name: "Atletico", logo: "", score: "0" },
                    right: { name: "Valencia", logo: "", score: "1" }
                },
                {
                    date: "2025-12-13",
                    isActive: false,
                    time: "FT",
                    left: { name: "Tottenham", logo: "", score: "2" },
                    right: { name: "Newcastle", logo: "", score: "2" }
                },
                {
                    date: "2025-12-14",
                    isActive: true,
                    time: "59'",
                    left: { name: "Benfica", logo: "", score: "1" },
                    right: { name: "Porto", logo: "", score: "0" }
                },
                {
                    date: "2025-12-15",
                    isActive: false,
                    time: "FT",
                    left: { name: "Ajax", logo: "", score: "0" },
                    right: { name: "PSV", logo: "", score: "3" }
                }
            ]
        },

        {
            animationDuration: "50s",
            title: "Giải bóng chuyền U18",
            cat: "Bóng chuyền",
            location: "England",
            board: [
                {
                    date: "2025-12-06",
                    isActive: false,
                    time: "FT",
                    left: { name: "Japan U18", logo: "", score: "1" },
                    right: { name: "Brazil U18", logo: "", score: "3" }
                },
                {
                    date: "2025-12-07",
                    isActive: true,
                    time: "68'",
                    left: { name: "USA U18", logo: "", score: "2" },
                    right: { name: "Italy U18", logo: "", score: "2" }
                },
                {
                    date: "2025-12-08",
                    isActive: false,
                    time: "FT",
                    left: { name: "Poland U18", logo: "", score: "3" },
                    right: { name: "France U18", logo: "", score: "1" }
                },
                {
                    date: "2025-12-09",
                    isActive: true,
                    time: "71'",
                    left: { name: "Japan U18", logo: "", score: "1" },
                    right: { name: "USA U18", logo: "", score: "1" }
                },
                {
                    date: "2025-12-10",
                    isActive: false,
                    time: "FT",
                    left: { name: "Brazil U18", logo: "", score: "2" },
                    right: { name: "Poland U18", logo: "", score: "3" }
                },
                {
                    date: "2025-12-11",
                    isActive: true,
                    time: "54'",
                    left: { name: "France U18", logo: "", score: "0" },
                    right: { name: "Italy U18", logo: "", score: "1" }
                },
                {
                    date: "2025-12-12",
                    isActive: false,
                    time: "FT",
                    left: { name: "Japan U18", logo: "", score: "3" },
                    right: { name: "France U18", logo: "", score: "2" }
                },
                {
                    date: "2025-12-13",
                    isActive: true,
                    time: "66'",
                    left: { name: "USA U18", logo: "", score: "1" },
                    right: { name: "Brazil U18", logo: "", score: "1" }
                },
                {
                    date: "2025-12-14",
                    isActive: false,
                    time: "FT",
                    left: { name: "Italy U18", logo: "", score: "3" },
                    right: { name: "Poland U18", logo: "", score: "2" }
                },
                {
                    date: "2025-12-15",
                    isActive: true,
                    time: "62'",
                    left: { name: "France U18", logo: "", score: "0" },
                    right: { name: "USA U18", logo: "", score: "2" }
                }
            ]
        }
    ];

    const result = league
        .filter(item => item.cat === selectedCat)
        .map(item => ({
            ...item,
            board: item.board.filter(boardItem => boardItem.date === selectedDate)
        }))
        .filter(item => item.board.length > 0);


    return (
        <div className="schedule-page">
            <div className="schedule-page__container">
                <div className="schedule-page__title">
                    Lịch thi đấu
                    <div className="right">
                        <div className="live-duration live">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <circle opacity="0.2" cx="6" cy="6" r="5.5" stroke="#B72424" />
                                <circle className="pulse" cx="6" cy="6" r="3" fill="#B72424" />
                            </svg>
                            Live</div>
                        <div className="bell">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.56934 19.01L9.68834 19.355C10.1003 20.552 11.4043 21.188 12.6013 20.776C13.7983 20.364 14.4343 19.06 14.0223 17.863L13.9033 17.518" stroke="#1F2022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.9852 5.204L10.6862 4.336C10.3562 3.379 9.31321 2.87 8.35521 3.2C7.39821 3.53 6.88921 4.573 7.21821 5.53L7.51721 6.398" stroke="#1F2022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.55386 11.766C4.73886 9.40001 5.99686 6.82101 8.36286 6.00601L10.0769 5.41601C12.4429 4.60101 15.0219 5.85901 15.8369 8.22501L16.7469 10.869C16.9199 11.371 17.2849 11.783 17.7609 12.015L18.5759 12.412C19.0529 12.645 19.4179 13.057 19.5899 13.558C19.9299 14.545 19.4049 15.621 18.4179 15.961L8.28286 19.451C7.29586 19.791 6.21986 19.266 5.87986 18.279C5.70686 17.777 5.74086 17.228 5.97286 16.751L6.36986 15.936C6.60286 15.459 6.63586 14.91 6.46286 14.408L5.55386 11.766V11.766Z" stroke="#1F2022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="magnifier">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.61133 0C14.9196 0 19.2227 4.20835 19.2227 9.39941C19.2226 11.8486 18.2637 14.0781 16.6943 15.751L19.7822 18.7637C20.0716 19.0459 20.0726 19.504 19.7842 19.7871C19.5217 20.0444 19.1104 20.0683 18.8203 19.8584L18.7373 19.7891L15.6104 16.7393C13.9658 18.0264 11.8816 18.7988 9.61133 18.7988C4.30317 18.7987 8.4852e-05 14.5903 0 9.39941C0 4.20842 4.30312 0.000112395 9.61133 0ZM9.61133 1.44727C5.12074 1.44738 1.48047 5.00798 1.48047 9.39941C1.48055 13.7908 5.12079 17.3505 9.61133 17.3506C14.102 17.3506 17.7421 13.7908 17.7422 9.39941C17.7422 5.00791 14.102 1.44727 9.61133 1.44727Z" fill="#1F2022" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="schedule-page__sort">
                    <Cat items={cat} onCatChange={handleCatChange} style={{ paddingLeft: '0px' }} />

                </div>
                <Sched items={cat} onChangeDate={handleDateChange} style={{ paddingLeft: '0px' }} />
                <div className="current-match-container" style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>


                    <div className="current-match">
                        <div className="title">
                            UEFA Champion League
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 6.49712C12.6124 5.79188 13.672 5 15.2853 5C18.1076 5 20 7.6075 20 10.0356C20 15.1115 13.5804 19 12 19C10.4196 19 4 15.1115 4 10.0356C4 7.6075 5.89244 5 8.71467 5C10.328 5 11.3876 5.79188 12 6.49712Z" fill="url(#paint0_radial_2133_1072)" />
                                <defs>
                                    <radialGradient id="paint0_radial_2133_1072" cx="0" cy="0" r="1" gradientTransform="matrix(-17.6667 -16.3333 19.2162 -15.9135 22.1667 20.8958)" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F82476" />
                                        <stop offset="1" stop-color="#F33B00" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="body">
                            <div className="item">
                                <img src="" alt="" className="thumb" />
                                <div className="text">Club name</div>
                            </div>
                            <div className="item">
                                <div className="score">
                                    <div className="text">14</div>
                                    <div className="text">:</div>
                                    <div className="text">3</div>

                                </div>
                                <div className="live-duration">
                                    <div className="live-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <circle opacity="0.2" cx="6" cy="6" r="5.5" stroke="url(#paint0_radial_2133_1110)" />
                                            <circle className="pulse" cx="6" cy="6" r="3" fill="url(#paint1_radial_2133_1110)" />
                                            <defs>
                                                <radialGradient id="paint0_radial_2133_1110" cx="0" cy="0" r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(12.3542 12.3542) rotate(-133.423) scale(16.0633 16.5362)">
                                                    <stop stop-color="#F82476" />
                                                    <stop offset="1" stop-color="#F33B00" />
                                                </radialGradient>
                                                <radialGradient id="paint1_radial_2133_1110" cx="0" cy="0" r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(9.8125 9.8125) rotate(-133.423) scale(9.63798 9.92174)">
                                                    <stop stop-color="#F82476" />
                                                    <stop offset="1" stop-color="#F33B00" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div className="number">68'</div></div>
                            </div>
                            <div className="item">
                                <img src="" alt="" className="thumb" />
                                <div className="text">Club name</div>
                            </div>
                        </div>
                    </div>
                    <div className="current-match--bottom"></div>
                    <div className="current-match--bottom-smaller">

                    </div>
                </div>
                {result.length === 0 ? (
                    <div className="no-data">
                        <img src="/assets/image 9.webp" alt="" />
                        <p>Không có dữ liệu</p>
                    </div>
                ) : (
                    result.map((lg, leagueIndex) => (
                        <League key={leagueIndex} title={lg.title} location={lg.location} board={lg.board} animationDuration={lg.animationDuration} />
                    ))
                )}

            </div>
        </div>
    )
}
export default SchedulePage
