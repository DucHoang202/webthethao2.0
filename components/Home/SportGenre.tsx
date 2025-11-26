import CategoryNav from "./CategoryNav";
import SimpleCard from "./SimpleCard";
import SmallCard from "./SmallCard";
const SportGenre: React.FC<{ sport: string }> = ({ sport }) => {


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
        <div className="sport-genre">
            <CategoryNav genre={sport} />
            <SimpleCard avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title={card1.title} content={card1.content} category={card1.category} official={card1.official} />
            <SmallCard avatar={card1.avatar} name={card1.name} time={card1.time} image="/assets/hal.webp" title="Trực tiếp vòng Last 64 Hanoi Open Pool 2025" content={card1.content} category={card1.category} official={card1.official} />
            <SmallCard avatar={card1.avatar} name={card1.name} time={card1.time} image="/assets/hal.webp" title="Trực tiếp vòng Last 64 Hanoi Open Pool 2025 64 Hanoi Open Pool 2025 64 Hanoi Open Pool 2025" content={card1.content} category={card1.category} official={card1.official} />
            <SmallCard avatar={card1.avatar} name={card1.name} time={card1.time} image="/assets/hal.webp" title="Trực tiếp vòng Last 64 Hanoi Open Pool 2025 64 Hanoi Open Pool 2025 Hanoi Open Pool 2025 Hanoi Open Pool 2025 Hanoi Open Pool 2025" content={card1.content} category={card1.category} official={card1.official} />
        </div>
    )
}

export default SportGenre;
