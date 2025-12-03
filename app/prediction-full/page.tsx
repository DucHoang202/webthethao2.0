import Header from "../../pages/Header";
import Nav from "../../components/Home/Nav";
import Search from "../../components/Home/Search";
import Cat from "../../components/Schedule/Cat";
import Sched from "../../components/Schedule/Sched";
import "../../styles/main.scss";
import Match from "@/components/Prediction/Match";

const Prediction: React.FC = () => {
    const cat = ["Bóng đá", "Bóng chuyền", "Bóng rổ", "Bóng volley", "Bóng bầu dục"]
    // const Prediction = [
    //     league: "UEFA Champions league"
    //     location: "UEFA"
    //     match: [{
    //         time: "12:00"
    //         left: {
    //             logo: ""
    //             name: "Real Madrid"
    //             score: "7"
    //         }
    //         right: {
    //             logo: ""
    //             name: "Barcelona"
    //             score: "2"
    //         }
    //     }]
    //     {

    // }]
    return (
        <div className="App">

            <div className="schedule-page">
                <div className="schedule-page__container l-16">
                    <div className="schedule-page__title">
                        <div className="schedule-page__duration">
                            <div className="live"></div>
                            <div className="text">Live</div>
                        </div>
                        Dự đoán tỉ số
                        <div className="right flex gap-12px">
                            <div className="bell">
                                <svg width="28" height="28" viewBox="0 2 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2079_3017)">
                                        <path d="M12.5469 21.4879C12.6931 21.7412 12.9035 21.9516 13.1568 22.0978C13.4101 22.244 13.6974 22.321 13.9899 22.321C14.2823 22.321 14.5697 22.244 14.823 22.0978C15.0763 21.9516 15.2866 21.7412 15.4329 21.4879" stroke="#717182" stroke-width="1.66627" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.70986 16.7607C6.60102 16.88 6.5292 17.0283 6.50312 17.1877C6.47705 17.3471 6.49784 17.5106 6.56298 17.6583C6.62812 17.8061 6.7348 17.9317 6.87004 18.02C7.00527 18.1082 7.16324 18.1553 7.32472 18.1554H20.6549C20.8164 18.1554 20.9744 18.1086 21.1097 18.0205C21.245 17.9324 21.3518 17.8069 21.4171 17.6593C21.4824 17.5116 21.5034 17.3481 21.4776 17.1888C21.4517 17.0294 21.3801 16.881 21.2714 16.7615C20.1634 15.6193 18.9886 14.4054 18.9886 10.6571C18.9886 9.33138 18.462 8.05991 17.5245 7.12245C16.5871 6.18499 15.3156 5.65833 13.9898 5.65833C12.664 5.65833 11.3926 6.18499 10.4551 7.12245C9.51765 8.05991 8.99099 9.33138 8.99099 10.6571C8.99099 14.4054 7.81543 15.6193 6.70986 16.7607Z" stroke="#717182" stroke-width="1.66627" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2079_3017">
                                            <rect width="19.9953" height="19.9953" fill="white" transform="translate(3.99219 3.99207)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className="magnifier">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.4957 17.4959L13.8799 13.8801" stroke="#717182" stroke-width="1.66627" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.16412 15.8296C12.8451 15.8296 15.8292 12.8455 15.8292 9.16452C15.8292 5.48348 12.8451 2.49942 9.16412 2.49942C5.48309 2.49942 2.49902 5.48348 2.49902 9.16452C2.49902 12.8455 5.48309 15.8296 9.16412 15.8296Z" stroke="#717182" stroke-width="1.66627" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-page__sort">
                        <Cat items={cat} />

                    </div>
                    <Sched items={cat} />
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
                            <div className="item">Sắp diễn ra</div>
                        </div>
                        <Match />
                        <Match />
                        <Match />
                    </div>
                    <div className="" style={{ marginBottom: '104px' }}></div>
                </div>
            </div>
            <Nav />
        </div >
    )
}
export default Prediction