import Header from "../../pages/Header";
import "../../styles/main.scss";
import Nav from "../../components/Home/Nav";
const Match2: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Nav />
            <main style={{ background: "#fff", paddingTop: '65px' }}>
                <div className="match2">
                    <div className="match2__background">
                        <div className="match2__title">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="white" fill-opacity="0.2" />
                                <path d="M6.16699 12H17.8337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.3337 7.83334L6.16699 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.3337 16.1667L6.16699 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Trận đấu
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2971 15.538C16.3771 17.37 14.8991 18.92 12.9951 18.998C12.8551 19.003 6.01514 18.99 6.01514 18.99C4.12014 19.133 2.46114 17.77 2.31214 15.946C2.30014 15.81 2.30314 8.47201 2.30314 8.47201C2.22014 6.63801 3.69614 5.08501 5.60214 5.00401C5.74414 4.99701 12.5741 5.01001 12.5741 5.01001C14.4781 4.86801 16.1421 6.24001 16.2901 8.07401C16.3001 8.20601 16.2971 15.538 16.2971 15.538V15.538Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.2998 9.98002L19.5928 7.28502C20.4088 6.61702 21.6328 7.19902 21.6318 8.25202L21.6198 15.6C21.6188 16.653 20.3938 17.23 19.5798 16.562L16.2998 13.868" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className="match2__match">
                            <div className="title">
                                Old Trafford
                            </div>
                            <div className="team">
                                <div className="item">
                                    <div className="logo">
                                        <img src="" alt="" />
                                    </div>
                                    Real Madrid
                                </div>
                                <div className="date">
                                    <div className="date">23:30 <br></br>
                                        Th 5, 23 thg 10</div>
                                    <div className="location">Mike Dean</div>
                                </div>
                                <div className="item">
                                    <div className="logo">
                                        <img src="" alt="" />
                                    </div>
                                    Real Madrid
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="match2__cat">
                        <div className="btn active">Dự báo</div>
                        <div className="btn">Đội hình</div>
                        <div className="btn">Tin tức</div>
                    </div>
                    <div className="match2__predictionTab">
                        <div className="match2__predictionTabItem">
                            <div className="match2__heading">
                                So sánh tỷ lệ
                            </div>
                            <div className="match2__compare">
                                <div className="item blue"><div className="title">Chấp</div><div className="point">-0.5</div><div className="ratio"><div className="text">1.95</div><div className="text">1.95</div></div></div>
                                <div className="item purple"><div className="title">Tài/Xỉu</div><div className="point purple">2.5</div><div className="ratio"><div className="text">1.95</div><div className="text">1.95</div></div></div>
                                <div className="item green"><div className="title">1X2</div>
                                    <div className="result">
                                        <div className="text">Thắng: 1.75</div>
                                        <div className="text">Hòa: 1.95</div>
                                        <div className="text">Thua: 1.95</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="match2__phongdo">
                            <div className="match2__heading">
                                Phong độ gần đây (5 trận)                            </div>

                            <div className="name">Man City</div>                            <div className="history">

                                <div className="history--item win"><div className="text">W</div></div>
                                <div className="history--item draw"><div className="text">D</div></div>
                                <div className="history--item lose"><div className="text">L</div></div>
                            </div>

                            <div className="name">Arsenal</div>                            <div className="history">

                                <div className="history--item win"><div className="text">W</div></div>
                                <div className="history--item draw"><div className="text">D</div></div>
                                <div className="history--item lose"><div className="text">L</div></div>
                            </div>
                        </div>
                        <div className="match2__history">
                            <div className="match2__heading">
                                Lịch sử đối đàu

                            </div>
                            <div className="match2__history-result">
                                <div className="item">
                                    <div className="score win">12</div>
                                    <div className="text">Tháng</div>
                                </div>
                                <div className="item">
                                    <div className="score draw">8</div>
                                    <div className="text">Hòa</div>
                                </div>
                                <div className="item">
                                    <div className="score lose">15</div>
                                    <div className="text">Tháng</div>
                                </div>
                            </div>
                        </div>
                        <div className="match2__average">
                            <div className="match2__heading">
                                Trung bình bàn thắng</div>
                            <div className="match2__average--inner">
                                <div className="item">
                                    Man City
                                    <div className="result">
                                        <div className="text">Ghi: <div className="text bold">2.4</div>
                                        </div>

                                        <div className="text">Thủng lưới: <div className="text bold">2.4</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="item red">
                                    Arsenal
                                    <div className="result">
                                        <div className="text">Ghi: <div className="text bold">2.4</div>
                                        </div>

                                        <div className="text">Thủng lưới: <div className="text bold">2.4</div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="match2__ai">
                            <div className="match2__heading">
                                Phân tích AI
                            </div>
                            <div className="content">
                                <div className="text">
                                    Man City đang có phong độ ổn định với 4 trận thắng trong 5 trận gần nhất. Tỷ lệ ghi bàn trung bình 2.4 bàn/trận.
                                </div>
                                <div className="text">
                                    Arsenal có phong độ không ổn định với 2 trận thua gần đây. Hàng thủ để thủng lưới trung bình 1.2 bàn/trận.
                                </div>
                            </div>
                            <div className="trustfulness">
                                <div className="text">
                                    Độ tin cậy dự đoán
                                </div>
                                <div className="score">
                                    80%
                                </div>
                            </div>
                        </div>
                        <div className="match2__heading">
                            Gợi ý
                        </div>
                        <div className="match2__sugesstion-container">
                            <div className="match2__suggestion green">
                                <div className="title">
                                    Tài 2.5
                                    <div className="justification green">
                                        Khuyến nghị
                                    </div>
                                </div>
                                Cả hai đội đều có xu hướng ghi bàn cao

                            </div>
                            <div className="match2__suggestion blue">
                                <div className="title">
                                    Man City -0.5                                    <div className="justification blue">
                                        Giá trị tốt                                    </div>
                                </div>
                                Lợi thế sân nhà và phong độ tốt

                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
export default Match2;