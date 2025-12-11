
import Search from "../components/Home/Search";
import Card from "../components/ui/card/NewsCard";
import Video from "../components/Home/Video";
import HotTopic from "../components/ui/card/HotTopicCard";
import Advertisement from "../components/Home/Advertisement";
import SportGenre from "../components/Home/SportGenre";

export default function HomeMobile() {
    const card1 =
    {
        avatar: "/assets/Rectangle 1.webp",
        name: "Kiet Phan",
        time: "2 giờ trước",
        image: "/assets/image.webp",
        title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
        content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
        category: "Pickleball",
        official: true
    }
    return (
        <main>
            <div className="home--mobile">
                <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title={card1.title} content={card1.content} category={card1.category} official={card1.official} link="/blog" />
                <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title="Trực tiếp vòng Last 64 Hanoi Open Pool 2025 ngày 10/10: Dương Quốc Hoàng vs Ngô Quang Trung" content={card1.content} category={card1.category} official={card1.official} link="/blog" />
                <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title="Tại sao Hà Lan chỉ cần thêm 2 chiến thắng nữa là có vé dự World Cup?" content={card1.content} category={card1.category} official={card1.official} link="/blog" />
                <Video />
                <HotTopic />
                <Advertisement image="" />
                <SportGenre sport="Bóng đá" />
                <SportGenre sport="Pickleball" />
                <Advertisement image="" />
                <SportGenre sport="Billiards" />
                <div className="advertisement-section" style={{ width: "100%" }}>
                    <Advertisement image="" />
                    <Advertisement image="" />
                    <Advertisement image="" />

                    <Advertisement image="" />
                    <div className="class" style={{ height: "300px", backgroundColor: "white" }}></div>
                </div>
            </div>
        </main>
    )
}
