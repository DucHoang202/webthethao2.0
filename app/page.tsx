import HomePage from "@/components/Home/HomePage";
import { changeThumbSize, getSlugFromLink, translateSlug } from "@/utils/extractArticlePath";
import categoryArticle from "../types/categories_tree.json";

export const revalidate = 30; // ISR 30s

async function fetchCategory(slug: string) {
  const res = await fetch(
    `https://webthethao.wepro.io.vn/api/category-article/load/${slug}`,
    { cache: "force-cache" }
  )

  const result = await res.json()

  result.data = result.data?.map((item: any) => ({
    ...item,
    author: "Phan Kiet",
    official: true,
    avatar: "/assets/Rectangle 1.webp",
  }))

  return result
}

async function fetchHomeFeed() {
  const res = await fetch(
    "https://webthethao.wepro.io.vn/api/newfeed?page=1",
    { cache: "force-cache" }
  )

  const result = await res.json()

  return result.items.map((item: any) => ({
    ...item,
    author: "Phan Kiet",
    official: true,
    avatar: "/assets/Rectangle 1.webp",
    thumbnail: changeThumbSize(item.thumbnail, "564-376"),
  }))
}
async function Home() {
  const slug = "sea-games"
  const slug1 = "nhan-dinh-bong-da"
  const slug2 = "pickle-ball" //Đọc nhiều 
  const slug3 = "bong-da-viet-nam"
  const slug4 = "mma-boxing"
  const slug5 = "videos"
  const allSlug = categoryArticle.flatMap(item => [
    item.slug,
    ...(item.children?.map(child => child.slug) || [])
  ]);
  //const allSlug = categoryArticle.map((item) => item.slug);
  const categoryRequests = allSlug.map(slug => fetchCategory(slug));



  const [
    filteredData,
    filteredData1,
    filteredData2,
    filteredData3,
    filteredData4,
    filteredData5,
    data,
    ...categoryData
  ] = await Promise.all([
    fetchCategory(slug),
    fetchCategory(slug1),
    fetchCategory(slug2),
    fetchCategory(slug3),
    fetchCategory(slug4),
    fetchCategory(slug5),
    fetchHomeFeed(),
    ...categoryRequests
  ])
  const titleImage = "assets/logo-sea-game 1.webp"
  //Get individual data
  const hotTopic = [{ link: "#", title: "Chủ đề nóng 1" }, { link: "#", title: "Chủ đề nóng 2" }, { link: "#", title: "Chủ đề nóng 3" }]

  const card2 = [{ img: "/assets/image 20-10.webp", name: "SEA Games 33" }, { img: "/assets/image 20.webp", name: "V-League" }, { img: "/assets/image 20-1.webp", name: "League 1" }, { img: "/assets/image 20-2.webp", name: "Seria A" }, { img: "/assets/image 20-3.webp", name: "Bundesliga" }, { img: "/assets/image 20-4.webp", name: "Premier League" }, { img: "/assets/image 20-5.webp", name: "Laliga" }, { img: "/assets/image 20-6.webp", name: "UEFA Europa League" }, { img: "/assets/image 20-7.webp", name: "UEFA Champions League" }]
  return (
    <HomePage
      allCategory={categoryData}
      titleImage={titleImage}
      hotTopic={hotTopic}
      card2={card2}
      filteredData={filteredData}
      filteredData1={filteredData1}
      filteredData2={filteredData2}
      filteredData3={filteredData3}
      filteredData4={filteredData4}
      filteredData5={filteredData5}
      data={data}
    />
  )
}



export default Home;