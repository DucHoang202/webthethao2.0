'use client'

import useMediaQuery from "react-responsive";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Header from "../pages/Header";
import Search from "../components/Home/Search";
import Footer from "../pages/Footer";
import "../styles/main.scss";
import Card from "../components/ui/card/NewsCard";
import Video from "../components/Home/Video";
import HotTopic from "../components/ui/card/HotTopicCard";
import Advertisement from "../components/Home/Advertisement";
import SportGenre from "../components/Home/SportGenre";
import Nav from "../components/Home/Nav";
import HomeMobile from "@/pages/HomeMobile";

import { useIsCustomView } from "../hooks/useIsCustomView";
import HomeTablet from "@/pages/HomeTablet";
import HeaderDesktop from "@/pages/HeaderDesktop";
import CardTitle from "@/components/ui/card/CardHeader";
import SmallCard from "@/components/ui/card/ArticleCard";
import { article } from "framer-motion/client";
import extractArticlePath from "@/utils/extractArticlePath";
import { List } from "@/types/Types"
function Home() {
  const isMobile = useIsCustomView(768);
  const isTablet = useIsCustomView(1250);
  const changeHeader = useIsCustomView(768);
  const changeNav = useIsCustomView(1024);
  const [filteredData, setFilteredData] = useState<List[]>([]);
  const [filteredData1, setFilteredData1] = useState<List[]>([]);
  const [filteredData2, setFilteredData2] = useState<List[]>([]);
  const [filteredData3, setFilteredData3] = useState<List[]>([]);
  const [filteredData4, setFilteredData4] = useState<List[]>([]);
  const [filteredData5, setFilteredData5] = useState<List[]>([]);
  const [data, setData] = useState<List[]>([]);
  const [hotTopic, setHotTopic] = useState<List[]>([]);
  const getData = async () => {
    try {
      const res = await fetch("https://webthethao.wepro.io.vn/api/newfeed?page=1");
      const data = await res.json();
      console.log("home", data.items);
      const updatedItems = data.items.map((item: any, index: number) => {
        if (index < data.items.length) {
          return {
            ...item,
            author: "Phan Kiet",
            official: true,
            avatar: "/assets/Rectangle 1.webp",
            category: "Bóng đá",
          };
        }
        return item;
      });
      setFilteredData(data.items.slice(0, 3));

      setData(updatedItems);
      console.log("updatedItems", updatedItems);
      setFilteredData1(updatedItems.slice(0, 3));
      setFilteredData2(updatedItems.slice(0, 3));
      setFilteredData3(updatedItems.slice(0, 3));
      setFilteredData4(updatedItems.slice(0, 3));
      setHotTopic(data.items.slice(0, 3));


    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();

  }, []);
  console.log("hotTopic", hotTopic)
  const [active, setActive] = useState(0);

  function expandData3() {
    setFilteredData3(data.slice(0, filteredData3.length + 4));
    console.log("exxpand", filteredData3)
  }
  const card2 = [{ img: "/assets/image 20-10.webp", name: "SEA Games 33" }, { img: "/assets/image 20.webp", name: "V-League" }, { img: "/assets/image 20-1.webp", name: "League 1" }, { img: "/assets/image 20-2.webp", name: "Seria A" }, { img: "/assets/image 20-3.webp", name: "Bundesliga" }, { img: "/assets/image 20-4.webp", name: "Premier League" }, { img: "/assets/image 20-5.webp", name: "Laliga" }, { img: "/assets/image 20-6.webp", name: "UEFA Europa League" }, { img: "/assets/image 20-7.webp", name: "UEFA Champions League" }]

  return (
    <div className='App'>
      {changeNav ? <Header /> : <HeaderDesktop />}
      {changeHeader ? <Nav /> : ""}
      <Search />
      {isMobile ? (
        <main>
          <div className="home--mobile">
            {data.map((item, index) => (
              <Card key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} />
            ))}
            <Video />
            <HotTopic isTitled={false} hotTopic={hotTopic} />
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
      ) : isTablet ? (<main>
        <div className="home--desktop">
          <div className="home--desktop__middle">
            <div className="home--desktop__radius">
              <div className="home--desktop__share">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#F3F2F2" />
                  <path d="M16.0003 16C17.8413 16 19.3337 14.5076 19.3337 12.6667C19.3337 10.8257 17.8413 9.33334 16.0003 9.33334C14.1594 9.33334 12.667 10.8257 12.667 12.6667C12.667 14.5076 14.1594 16 16.0003 16Z" fill="white" />
                  <path d="M16.0004 17.6667C12.6604 17.6667 9.94043 19.9067 9.94043 22.6667C9.94043 22.8533 10.0871 23 10.2738 23H21.7271C21.9138 23 22.0604 22.8533 22.0604 22.6667C22.0604 19.9067 19.3404 17.6667 16.0004 17.6667Z" fill="white" />
                </svg>

                <input className="text" placeholder="Chia sẻ chủ đề mới với chúng tôi..." />
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#F3F2F2" />
                  <path d="M11.6933 21.0133C11.2867 21.0133 10.9067 20.8733 10.6333 20.6133C10.2867 20.2867 10.12 19.7933 10.18 19.26L10.4267 17.1C10.4733 16.6933 10.72 16.1533 11.0067 15.86L16.48 10.0667C17.8467 8.61999 19.2733 8.57999 20.72 9.94666C22.1667 11.3133 22.2067 12.74 20.84 14.1867L15.3667 19.98C15.0867 20.28 14.5667 20.56 14.16 20.6267L12.0133 20.9933C11.9 21 11.8 21.0133 11.6933 21.0133ZM18.62 9.93999C18.1067 9.93999 17.66 10.26 17.2067 10.74L11.7333 16.54C11.6 16.68 11.4467 17.0133 11.42 17.2067L11.1733 19.3667C11.1467 19.5867 11.2 19.7667 11.32 19.88C11.44 19.9933 11.62 20.0333 11.84 20L13.9867 19.6333C14.18 19.6 14.5 19.4267 14.6333 19.2867L20.1067 13.4933C20.9333 12.6133 21.2333 11.8 20.0267 10.6667C19.4933 10.1533 19.0333 9.93999 18.62 9.93999Z" fill="#52524F" />
                  <path d="M19.56 15.3C19.5466 15.3 19.5266 15.3 19.5133 15.3C17.4333 15.0933 15.76 13.5133 15.44 11.4467C15.4 11.1733 15.5866 10.92 15.86 10.8733C16.1333 10.8333 16.3866 11.02 16.4333 11.2933C16.6866 12.9067 17.9933 14.1467 19.62 14.3067C19.8933 14.3333 20.0933 14.58 20.0666 14.8533C20.0333 15.1067 19.8133 15.3 19.56 15.3Z" fill="#52524F" />
                  <path d="M22 23.1667H10C9.72667 23.1667 9.5 22.94 9.5 22.6667C9.5 22.3933 9.72667 22.1667 10 22.1667H22C22.2733 22.1667 22.5 22.3933 22.5 22.6667C22.5 22.94 22.2733 23.1667 22 23.1667Z" fill="#52524F" />
                </svg>

              </div>
            </div>
            <div className="home--desktop__radius">
              <img src="/assets/image-16.webp" alt="" />
            </div>
            {filteredData4.map((item, index) => (
              <div className="home--desktop__radius">
                < Card key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} />
              </div>
            ))}
            <Video />

            <div className="card-container">
              <CardTitle title="Chủ đề nóng" style={{ borderBottom: 'none' }} deco={true} />
              <div className="card--header__content">
                <HotTopic isTitled={false} hotTopic={hotTopic} />

              </div>
            </div>
            <Advertisement image="/assets/image 19.webp" isCollapsed={true} />
            <div className="home--desktop__radius">
              <SportGenre sport="Bóng đá" />
            </div>
            <div className="home--desktop__radius">
              <SportGenre sport="Bóng đá" />
            </div>
          </div>
          <div className="home--desktop__right">
            <div className="card-container">
              <CardTitle logo="assets/logo-sea-game 1.webp" title="" deco={false} style={{ background: "#0056FF", color: "#fff", paddingLeft: "-14px" }} />
              <div className="card--header__content">
                {filteredData.map((item, index) => (
                  <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                ))}
                <div className="view-more--btn" onClick={() => { setFilteredData(data.slice(0, filteredData.length + 4)); }}>
                  <a href="#">Xem thêm</a>
                </div>
              </div>
            </div>
            <div className="card-container">
              <CardTitle title="Nhận định" deco={true} />
              <div className="card--header__content">
                {filteredData1.map((item, index) => (
                  <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                ))}
                <div className="view-more--btn" onClick={() => { setFilteredData1(data.slice(0, filteredData1.length + 4)); }}>
                  <a href="#">Xem thêm</a>
                </div>
              </div>
            </div>
            <Advertisement image="/assets/adv.webp" />
            <div className="card-container">
              <CardTitle title="Đọc nhiều" deco={true} />
              <div className="card--header__content">
                {filteredData2.map((item, index) => (
                  <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                ))}
                <div className="view-more--btn" onClick={() => { setFilteredData2(data.slice(0, filteredData2.length + 4)); }}>
                  <a href="#">Xem thêm</a>
                </div>
              </div>
            </div>
            <div className="empty-container">
              <CardTitle title="Lịch thi đấu bóng đá" style={{ borderBottom: 'none' }} deco={true} />
              <div className="card--header__content">
                {card2.map((item, index) => (
                  <div className="home--desktop__schedule">
                    <div className={`item ${index === 0 ? 'active' : ''}`} onClick={() => setActive(index)}>
                      <img src={item.img} alt="" className="logo" />
                      <span className="text ">{item.name}</span>
                    </div>
                  </div>
                ))}


              </div>
            </div>
            <Advertisement image="/assets/adv.webp" />
            <div className="card-container">
              <CardTitle title="Chủ đề nóng" style={{ borderBottom: 'none' }} deco={true} />
              <div className="card--header__content">
                <HotTopic isTitled={false} hotTopic={hotTopic} />

              </div>
            </div>
            <Advertisement image="/assets/image 22.webp" isCollapsed={false} />


          </div>
        </div>
      </main>) : <main>
        <div className="home--desktop">
          <div className="home--desktop__left">
            <div className="empty-container">
              <CardTitle title="Lịch thi đấu bóng đá" style={{ borderBottom: 'none' }} deco={true} />
              <div className="card--header__content">
                {card2.map((item: any, index: number) => (
                  <div className="home--desktop__schedule" key={index}>
                    <div className={`item ${index === 0 ? 'active' : ''}`}>
                      <img src={item.img} alt="" className="logo" />
                      <span className="text ">{item.name}</span>
                    </div>
                  </div>
                ))}


              </div>
            </div>
            <Advertisement image="/assets/adv.webp" />
            <div className="card-container">
              <CardTitle title="Chủ đề nóng" style={{ borderBottom: 'none' }} deco={true} />
              <div className="card--header__content">
                <HotTopic isTitled={false} hotTopic={hotTopic} />

              </div>
            </div>
            <Advertisement image="/assets/image 22.webp" isCollapsed={false} />

          </div>
          <div className="home--desktop__middle">
            <div className="home--desktop__radius">
              <div className="home--desktop__share">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#F3F2F2" />
                  <path d="M16.0003 16C17.8413 16 19.3337 14.5076 19.3337 12.6667C19.3337 10.8257 17.8413 9.33334 16.0003 9.33334C14.1594 9.33334 12.667 10.8257 12.667 12.6667C12.667 14.5076 14.1594 16 16.0003 16Z" fill="white" />
                  <path d="M16.0004 17.6667C12.6604 17.6667 9.94043 19.9067 9.94043 22.6667C9.94043 22.8533 10.0871 23 10.2738 23H21.7271C21.9138 23 22.0604 22.8533 22.0604 22.6667C22.0604 19.9067 19.3404 17.6667 16.0004 17.6667Z" fill="white" />
                </svg>

                <input className="text" placeholder="Chia sẻ chủ đề mới với chúng tôi..." />
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#F3F2F2" />
                  <path d="M11.6933 21.0133C11.2867 21.0133 10.9067 20.8733 10.6333 20.6133C10.2867 20.2867 10.12 19.7933 10.18 19.26L10.4267 17.1C10.4733 16.6933 10.72 16.1533 11.0067 15.86L16.48 10.0667C17.8467 8.61999 19.2733 8.57999 20.72 9.94666C22.1667 11.3133 22.2067 12.74 20.84 14.1867L15.3667 19.98C15.0867 20.28 14.5667 20.56 14.16 20.6267L12.0133 20.9933C11.9 21 11.8 21.0133 11.6933 21.0133ZM18.62 9.93999C18.1067 9.93999 17.66 10.26 17.2067 10.74L11.7333 16.54C11.6 16.68 11.4467 17.0133 11.42 17.2067L11.1733 19.3667C11.1467 19.5867 11.2 19.7667 11.32 19.88C11.44 19.9933 11.62 20.0333 11.84 20L13.9867 19.6333C14.18 19.6 14.5 19.4267 14.6333 19.2867L20.1067 13.4933C20.9333 12.6133 21.2333 11.8 20.0267 10.6667C19.4933 10.1533 19.0333 9.93999 18.62 9.93999Z" fill="#52524F" />
                  <path d="M19.56 15.3C19.5466 15.3 19.5266 15.3 19.5133 15.3C17.4333 15.0933 15.76 13.5133 15.44 11.4467C15.4 11.1733 15.5866 10.92 15.86 10.8733C16.1333 10.8333 16.3866 11.02 16.4333 11.2933C16.6866 12.9067 17.9933 14.1467 19.62 14.3067C19.8933 14.3333 20.0933 14.58 20.0666 14.8533C20.0333 15.1067 19.8133 15.3 19.56 15.3Z" fill="#52524F" />
                  <path d="M22 23.1667H10C9.72667 23.1667 9.5 22.94 9.5 22.6667C9.5 22.3933 9.72667 22.1667 10 22.1667H22C22.2733 22.1667 22.5 22.3933 22.5 22.6667C22.5 22.94 22.2733 23.1667 22 23.1667Z" fill="#52524F" />
                </svg>

              </div>
            </div>
            <div className="home--desktop__radius">
              <img src="/assets/image-16.webp" alt="" />
            </div>
            {filteredData4.map((item, index) => (
              <div className="home--desktop__radius" key={index}>
                < Card key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} />
              </div>
            ))}
            <Video />

            <div className="card-container">
              <CardTitle title="Chủ đề nóng" style={{ borderBottom: 'none' }} deco={true} />
              <div className="card--header__content">
                <HotTopic isTitled={false} hotTopic={hotTopic} />

              </div>
            </div>
            <Advertisement image="/assets/image 19.webp" isCollapsed={true} />
            <div className="home--desktop__radius">
              <SportGenre sport="Bóng đá" />
            </div>
            {/* <div className="home--desktop__radius">
                        <SportGenre sport="Bóng đá" />
                    </div> */}
          </div>
          <div className="home--desktop__right">
            <div className="card-container">
              <CardTitle logo="assets/logo-sea-game 1.webp" title="" deco={false} style={{ background: "#0056FF", color: "#fff", paddingLeft: "-14px" }} />
              <div className="card--header__content">
                {filteredData.map((item, index) => (
                  <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                ))}
                <div className="view-more--btn" onClick={() => { setFilteredData(data.slice(0, filteredData.length + 4)); }}>
                  <a href="#">Xem thêm</a>
                </div>
              </div>
            </div>
            <div className="card-container">
              <CardTitle title="Nhận định" deco={true} />
              <div className="card--header__content">
                {filteredData1.map((item, index) => (
                  <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                ))}
                <div className="view-more--btn" onClick={() => { setFilteredData1(data.slice(0, filteredData1.length + 4)); }}>
                  <a href="#">Xem thêm</a>
                </div>
              </div>
            </div>
            <Advertisement image="/assets/adv.webp" />
            <div className="card-container">
              <CardTitle title="Đọc nhiều" deco={true} />
              <div className="card--header__content">
                {filteredData2.map((item, index) => (
                  <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                ))}
                <div className="view-more--btn" onClick={() => { setFilteredData2(data.slice(0, filteredData2.length + 4)); }}>
                  <a href="#">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>}
    </div>
  )
}

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Home />
  );
}

export default App;