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
import BlogPage from "./blog/page";
import HomeMobile from "@/pages/HomeMobile";
import { useIsMobile } from "../hooks/useIsMobile";
import { useIsTablet } from "../hooks/useIsTablet";
import HomeDesktop from "@/pages/HomeDesktop";
import { useIsCustomView } from "../hooks/useIsCustomView";
import HomeTablet from "@/pages/HomeTablet";
import HeaderDesktop from "@/pages/HeaderDesktop";
function Home() {
  const isMobile = useIsCustomView(990);
  const isTablet = useIsCustomView(1250);
  const changeHeader = useIsCustomView(768);
  const changeNav = useIsCustomView(1024);
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
      {changeNav ? <Header /> : <HeaderDesktop />}
      {changeHeader ? <Nav /> : ""}
      <Search />
      {isMobile ? <HomeMobile /> : isTablet ? <HomeTablet /> : <HomeDesktop />}
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