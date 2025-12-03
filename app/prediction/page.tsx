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
                            <Cat items={cat} />

                        </div>
                        <Sched items={cat} />
                        <Match />

                    </div>
                </div>
            </main>
            <Nav />
        </div >
    )
}
export default Prediction