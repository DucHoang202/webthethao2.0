'use client'
import Header from "../../pages/Header";
import Nav from "../../components/Home/Nav";
import Search from "../../components/Home/Search";
import SchedulePage from "../../components/Schedule/SchedulePage";
import "../../styles/main.scss";
const Schedule: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main style={{ background: "#fff", gap: "0px" }}>
                <Search />
                <SchedulePage />

            </main>
            <Nav />
        </div >
    )
}
export default Schedule