import "../../styles/main.scss"
import SmallInfoHorizontal from "../Home/SmallInfo-horizontal"
import BlogTitle from "./BlogTitle"
import BlogSapo from "./BlogSapo"
import BlogHeading from "./BlogHeading"
import BlogContent from "./BlogContent"
import BlogQuote from "./BlogQuote"
import SimpleCard from "../Home/SimpleCard"
import CommentInput from "./CommentInput"
import Comments from "./Comments"
import BlogButton from "./BlogButton"
const BlogPage = () => {
    const title = "Vì sao Zane Navratil được bổ nhiệm làm Chủ tịch Ủy ban VĐV chuyên nghiệp Pickleball?";
    const sapo = "Với kinh nghiệm thi đấu, khả năng kinh doanh và kỹ năng truyền thông hiếm có, Zane Navratil có thể mang đến cho các tay vợt chuyên nghiệp điều mà họ chưa từng có.";
    const content = "Một bước ngoặt quan trọng đối với làng pickleball chuyên nghiệp, Zane Navratil đã được bầu làm Chủ tịch Ủy ban Vận động viên Chuyên nghiệp (Pro Player Committee) của Hiệp hội Pickleball Thống nhất (UPA) – tổ chức chung của PPA Tour và Major League Pickleball (MLP). Đây được xem là nỗ lực lớn nhất từ trước đến nay nhằm thiết lập một cơ chế đại diện thống nhất cho các vận động viên chuyên nghiệp trong môn thể thao đang phát triển bùng nổ này.";
    const heading = "Bước tiến cho tiếng nói của vận động viên";
    const content1 = "Ủy ban Vận động viên của UPA được thành lập để mang lại một tiếng nói có tổ chức và chính thức cho giới vận động viên giữa bối cảnh pickleball chuyên nghiệp phát triển nhanh chóng.";
    const content2 = "Trong nhiều năm, pickleball đã tăng trưởng vượt xa nền tảng tổ chức của nó. Dù PPA hay MLP từng có hội đồng cố vấn, nhưng một tổ chức đại diện chung, có quyền lực thực tế, vẫn chưa từng tồn tại. Trong khi đó, nhu cầu về một cơ quan thống nhất ngày càng cấp thiết khi lịch thi đấu dày đặc, di chuyển tốn kém và quyền lợi thương mại của các giải đang ảnh hưởng trực tiếp đến sự nghiệp và sức khỏe của vận động viên.";
    const heading2 = "Vì sao lại là Zane Navratil?";
    const content3 = "Việc Zane được chọn làm Chủ tịch là điều dễ hiểu. Anh là một trong những tay vợt hàng đầu, vô địch ở cả PPA và MLP, đồng thời là đội trưởng của New Jersey 5s. Ngoài thành tích thi đấu, Zane còn là đối tác kinh doanh của Paddletek và ProXR Pickleball, người sáng lập chuỗi huấn luyện quốc tế, và người dẫn chương trình podcast “PicklePod” – kênh phân tích hàng đầu của The Dink.";
    const quote = {
        quote: "“Đã đến lúc có một tiếng nói mang tính hợp tác, định hướng giải pháp thay vì đối đầu.” ",
        name: "- Zane Navratil"
    }
    const content4 = "Bên cạnh thành tích thi đấu, nền tảng chuyên môn về kế toán của Zane cũng giúp anh có lợi thế trong các cuộc trao đổi với lãnh đạo giải đấu và nhà tài trợ."

    return (
        <div>
            <div className="blog">
                <div className="blog__container">
                    <img src="/assets/image.webp" alt="" className="blog__image" />
                    <div className="blog__user">

                        <div className="blog__user--inner">
                            <SmallInfoHorizontal avatar="/assets/Rectangle 1.webp" name="Kiet Phan" time="10 phút trước" official={true} />

                            <div className="blog__cat">
                                Pickleball
                            </div>
                        </div>

                    </div>
                </div>
                <div className="blog__body">
                    <BlogTitle title={title} />
                    <BlogSapo sapo={sapo} />
                    <BlogContent content={content} />
                    <BlogHeading heading={heading} />
                    <BlogContent content={content1} />
                    <BlogContent content={content2} />
                </div>

                <img src="/assets/image.webp" alt="" className="blog__image--inner" />
                <div className="blog__body">
                    <BlogHeading heading={heading2} />
                    <BlogContent content={content3} />
                    <BlogQuote quote={quote.quote} name={quote.name} />
                    <BlogContent content={content4} />
                    <div className="blog__btn-container">
                        <BlogButton number={2} text="Bình luận" />
                        <BlogButton number={10} text="Chia sẻ" />
                    </div>
                </div>
                <div className="blog__comment">
                    <CommentInput />
                    <Comments avatar="/assets/Image (3).webp" name="Huong Nguyen" content="Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng." time="10 phút trước" />
                </div>
            </div>
        </div>
    )
}
export default BlogPage