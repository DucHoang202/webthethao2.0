'use client'

import useMediaQuery from "react-responsive";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Header from "../pages/Header";
import Search from "../components/Home/Search";
import Footer from "../pages/Footer";
import "../styles/main.scss";
import Card from "../components/Home/Card";
import Video from "../components/Home/Video";
import HotTopic from "../components/Home/HotTopic";
import Advertisement from "../components/Home/Advertisement";
import SportGenre from "../components/Home/SportGenre";
import Nav from "../components/Home/Nav";
import BlogPage from "./blog/page";
function getWidthExcludesScrollbar(): number {
  return document.documentElement.clientWidth;
}

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  const displayUnlock = useMediaQuery({ maxWidth: 1262 });
  const formatHeader = useMediaQuery({ maxWidth: 1250 });

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

  useEffect(() => {
    const setAppWidth = () => {
      const width = getWidthExcludesScrollbar();
      document.documentElement.style.setProperty('--app-width', `${width}px`);
    };

    // Set initial width
    setAppWidth();

    // Update on resize
    window.addEventListener('resize', setAppWidth);

    return () => {
      window.removeEventListener('resize', setAppWidth);
    };
  }, []);
  return (
    <div className='App'>
      <Header />
      <Nav />
      <main>
        <Search />
        <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title={card1.title} content={card1.content} category={card1.category} official={card1.official} link="/blog" />
        <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title="Trực tiếp vòng Last 64 Hanoi Open Pool 2025 ngày 10/10: Dương Quốc Hoàng vs Ngô Quang Trung" content={card1.content} category={card1.category} official={card1.official} link="/blog" />
        <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title="Tại sao Hà Lan chỉ cần thêm 2 chiến thắng nữa là có vé dự World Cup?" content={card1.content} category={card1.category} official={card1.official} link="/blog" />
        <Video />
        <HotTopic />
        <Advertisement />
        <SportGenre sport="Bóng đá" />
        <SportGenre sport="Pickleball" />
        <Advertisement />
        <SportGenre sport="Billiards" />
        <div className="advertisement-section" style={{ width: "100%" }}>
          <Advertisement />
          <Advertisement />
          <Advertisement />

          <Advertisement />
          <div className="class" style={{ height: "300px", backgroundColor: "white" }}></div>
        </div>
      </main>
      <Footer />
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;