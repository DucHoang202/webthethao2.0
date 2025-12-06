interface LeagueProps {
    title: string;
    location: string;
    board: BoardProps[];
    animationDuration: string;

}
interface BoardProps {
    isActive: boolean;
    time: string;
    left: any;
    right: any;
}
const League = ({ title, location, animationDuration, board }: LeagueProps) => {

    return (
        <>
            {board.map((lg, leagueIndex) => (
                <div className="league" key={leagueIndex}>
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

                    <div className="league__location">{location}</div>

                    {board.map((bd, boardIndex) => (
                        <div className="league__board" key={boardIndex}>
                            <div className="league__item">
                                <div className={`time ${bd.isActive ? "active" : ""}`}>{bd.time}</div>

                                <div className="right">
                                    <div className="item">
                                        <div className="name">
                                            <img src={bd.left.logo} alt="" className="logo" />
                                            {bd.left.name}
                                        </div>
                                        <div className={`score ${bd.isActive ? "active" : ""}`}>{bd.left.score}</div>
                                    </div>

                                    <div className="progress-wrapper">
                                        <div
                                            className={`progress-line ${bd.isActive ? "active" : ""}`}
                                            style={{ animationDuration: animationDuration }}
                                        ></div>
                                    </div>

                                    <div className="item">
                                        <div className="name">
                                            <img src={bd.right.logo} alt="" className="logo" />
                                            {bd.right.name}
                                        </div>
                                        <div className={`score ${bd.isActive ? "active" : ""}`}>{bd.right.score}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
};
export default League