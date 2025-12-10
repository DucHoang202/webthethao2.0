'use client'
import Header from "../../pages/Header";
import Nav from "../../components/Home/Nav";
import Search from "../../components/Home/Search";
import Cat from "../../components/Schedule/Cat";
import Sched from "../../components/Schedule/Sched";
import "../../styles/main.scss";
import Match from "@/components/Prediction/Match";
import { useState } from "react";

const Prediction: React.FC = () => {
    const [nearDate, setNearDate] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedCat, setSelectedCat] = useState<string | null>(null);
    const handleDateChange = (date: string) => {
        setSelectedDate(date);
        console.log("ngay dc chon", date)
    }
    const handleCatChange = (cat: string) => {
        setSelectedCat(cat);
        console.log("loai dc chon", cat)
    }
    const cat = ["Bóng đá", "Bóng chuyền", "Bóng rổ", "Bóng volley", "Bóng bầu dục"]
    const data = [
        ...generateLeague("Bóng đá", "UEFA", [
            ["Man City", "MC"],
            ["Liverpool", "L"],
            ["Real Madrid", "RM"],
            ["Barcelona", "FCB"],
            ["Bayern", "FCB"],
            ["PSG", "PSG"],
        ]),
        ...generateLeague("Bóng chuyền", "FIVB", [
            ["Japan", "JP"],
            ["Brazil", "BR"],
            ["USA", "US"],
            ["Italy", "IT"],
            ["France", "FR"],
            ["Poland", "PL"],
        ]),
    ];

    // --- Generator --- //
    function generateLeague(category: any, location: any, teams: any) {
        const result = [];
        const start = new Date("2025-12-06");
        const end = new Date("2025-12-15");

        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const day = d.toISOString().slice(0, 10);

            // tạo 2 trận/ngày
            for (let i = 0; i < 2; i++) {
                const [leftName, leftLogo] = teams[(i * 2) % teams.length];
                const [rightName, rightLogo] = teams[(i * 2 + 1) % teams.length];

                result.push({
                    title: `${category} League`,
                    location,
                    category,
                    board: [
                        {
                            date: day,
                            time: "20:00",
                            leftTeam: {
                                name: leftName,
                                logo: leftLogo,
                                score: `${Math.floor(Math.random() * 5)}`,
                                handicap: { point: "1.5", calc: "-0.5" },
                                taixiu: { point: "1", calc: "1" },
                                oneTwo: { point: "1", calc: "1" },
                                forecastPercent: randomPercent(),
                            },
                            rightTeam: {
                                name: rightName,
                                logo: rightLogo,
                                score: `${Math.floor(Math.random() * 5)}`,
                                handicap: { point: "1.5", calc: "-0.5" },
                                taixiu: { point: "1", calc: "1" },
                                oneTwo: { point: "1", calc: "1" },
                                forecastPercent: randomPercent(),
                            },
                        },
                    ],
                });
            }
        }

        return result;
    }

    function randomPercent() {
        return Math.floor(Math.random() * 50) + 25; // 25–75%
    }

    const isWithinNext3Days = (dateString: string) => {
        const today = new Date();
        const target = new Date(dateString);

        const diffTime = target.getTime() - today.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        return diffDays >= 0 && diffDays <= 3;
    };
    let result = [];
    if (nearDate) {
        result = data
            .filter(item => item.category === selectedCat)
            .map(item => ({
                ...item,
                board: item.board.filter(boardItem =>
                    isWithinNext3Days(boardItem.date)
                )
            }))
            .filter(item => item.board.length > 0);

    } else {
        result = data
            .filter(item => item.category === selectedCat)
            .map(item => ({
                ...item,
                board: item.board.filter(boardItem => boardItem.date === selectedDate)
            }))
            .filter(item => item.board.length > 0);
    }



    return (
        <div className="App">
            <Header />
            <main style={{ background: "#fff", gap: "0px" }}>
                <Search />
                <div className="schedule-page">
                    <div className="schedule-page__container">
                        <div className="schedule-page__title">
                            Lịch thi đấu
                            <div className="right">
                                <div className="magnifier">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.61133 0C14.9196 0 19.2227 4.20835 19.2227 9.39941C19.2226 11.8486 18.2637 14.0781 16.6943 15.751L19.7822 18.7637C20.0716 19.0459 20.0726 19.504 19.7842 19.7871C19.5217 20.0444 19.1104 20.0683 18.8203 19.8584L18.7373 19.7891L15.6104 16.7393C13.9658 18.0264 11.8816 18.7988 9.61133 18.7988C4.30317 18.7987 8.4852e-05 14.5903 0 9.39941C0 4.20842 4.30312 0.000112395 9.61133 0ZM9.61133 1.44727C5.12074 1.44738 1.48047 5.00798 1.48047 9.39941C1.48055 13.7908 5.12079 17.3505 9.61133 17.3506C14.102 17.3506 17.7421 13.7908 17.7422 9.39941C17.7422 5.00791 14.102 1.44727 9.61133 1.44727Z" fill="#1F2022" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-page__sort">
                            <Cat items={cat} onCatChange={handleCatChange} />

                        </div>
                        <Sched items={cat} onChangeDate={handleDateChange} />
                        <div className="gap-[24px] flex-col flex w-full">
                            <div className="schedule-page__search">
                                <div className="item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_2079_2404)">
                                            <path d="M6.66426 13.3287C6.6642 13.4526 6.69866 13.574 6.76375 13.6794C6.82885 13.7847 6.92202 13.8698 7.0328 13.9252L8.36567 14.5916C8.4673 14.6424 8.58023 14.6664 8.69372 14.6612C8.80722 14.6561 8.91752 14.622 9.01414 14.5623C9.11076 14.5025 9.1905 14.419 9.24578 14.3198C9.30107 14.2205 9.33006 14.1088 9.33001 13.9952V9.33012C9.33016 8.99982 9.45294 8.68134 9.67456 8.43643L14.4882 3.11226C14.5745 3.01667 14.6312 2.89813 14.6516 2.77097C14.6719 2.64381 14.655 2.51349 14.6028 2.39576C14.5506 2.27803 14.4655 2.17793 14.3576 2.10758C14.2498 2.03722 14.1238 1.99962 13.9951 1.99931H1.9992C1.87032 1.99936 1.74421 2.03678 1.63616 2.10703C1.52811 2.17729 1.44275 2.27737 1.39042 2.39515C1.33809 2.51293 1.32103 2.64336 1.34131 2.77064C1.3616 2.89792 1.41836 3.01658 1.50471 3.11226L6.31971 8.43643C6.54133 8.68134 6.66411 8.99982 6.66426 9.33012V13.3287Z" stroke="#141414" stroke-width="1.33287" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2079_2404">
                                                <rect width="15.9945" height="15.9945" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Bộ lọc
                                </div>
                                <div className="item">Hot</div>
                                <div className="item">Live</div>
                                <div className={`item ${nearDate ? 'active' : ''}`} onClick={() => setNearDate(!nearDate)}>Sắp diễn ra</div>
                            </div>
                            {result.length === 0 ? (
                                <div className="no-data">
                                    <img src="/assets/image 9.webp" alt="" />
                                    <p>Không có dữ liệu</p>
                                </div>
                            ) : (
                                result.map((item, index) => (
                                    <Match key={index} title={item.title} location={item.location} category={item.category} board={item.board} />
                                ))
                            )}

                        </div>
                        <div className="" style={{ marginBottom: '104px' }}></div>
                    </div>
                </div>
            </main>
            <Nav />
        </div >
    )
}
export default Prediction