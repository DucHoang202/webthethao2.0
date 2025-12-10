import Header from "../../pages/Header";
import Nav from "../../components/Home/Nav";
import "../../styles/main.scss"
import Search from "../../components/Home/Search";
import BlogPage from "../../components/Blog/BlogPage";
import Card from "../../components/ui/card/NewsCard";

const Blog: React.FC = () => {
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
        <div className='App'>
            <Header />
            <main>
                <div className="no-gap">
                    <Search />
                    <BlogPage />
                </div>
                <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title={card1.title} content={card1.content} category={card1.category} official={card1.official} link="/blog" />
                <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title={card1.title} content={card1.content} category={card1.category} official={card1.official} link="/blog" />
            </main>
            <Nav />

        </div>

    )
}
export default Blog;
