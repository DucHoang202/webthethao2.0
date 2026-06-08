'use client'
import Card from "../ui/card/NewsCard";
import CardTitle from "../ui/card/CardHeader";
import { useEffect, useState, useRef } from "react";
import { changeThumbSize } from "../../utils/extractArticlePath";
import { CategoryResponse } from "../../types/Types";
import { translateSlug } from "../../utils/extractArticlePath";
import { formatDate } from "../../utils/extractArticlePath";

const SportGenre: React.FC<{ slug: string }> = ({ slug }) => {
    const [sport, setSport] = useState<CategoryResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            {
                rootMargin: '100px', // Start fetching 100px before component enters viewport
                threshold: 0.01
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [isVisible]); // Added isVisible to dependency array to re-run observer setup if isVisible changes

    useEffect(() => {
        if (!isVisible) return;

        const fetchData = async () => {
            setIsLoading(true); // Set loading to true when fetching starts
            try {
                const res = await fetch(
                    `https://webthethao.wepro.io.vn/api/category-article/load/${slug}`,
                    { cache: "force-cache" }
                );
                const result = await res.json();

                // Add author metadata
                result.data = result.data?.map((item: any) => ({
                    ...item,
                    author: "Phan Kiet",
                    official: true,
                    avatar: "/assets/Rectangle 1.webp",
                }));

                setSport(result);
            } catch (error) {
                console.error(`Error fetching category ${slug}:`, error);
                setSport(null); // Ensure sport is null on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [isVisible, slug]);

    // Don't render if no data after loading
    if (!isLoading && (!sport || sport.data?.length === 0)) {
        return null;
    }

    return (
        <div ref={containerRef} className="sport-genre bg-white">
            {isLoading ? (
                // Loading skeleton
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="space-y-4">
                        <div className="h-48 bg-gray-200 rounded"></div>
                        <div className="h-24 bg-gray-200 rounded"></div>
                        <div className="h-24 bg-gray-200 rounded"></div>
                    </div>
                </div>
            ) : (
                <>
                    <a href={`/category/${sport!.slug}`}>
                        <CardTitle title={translateSlug(sport!.slug)} arrow={true} deco={true} />
                    </a>
                    {sport!.data?.slice(0, 4).map((item: any, index: number) =>
                        index === 0 ? (
                            <Card key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={sport!.slug} official={item.official} link={`/blog/${sport!.slug}/${item.slug}-${item.id}`} />
                        ) : (
                            <div key={item.id} className="card--article">
                                <div className="card--article__container">
                                    <a href={`/blog/${sport!.slug}/${item.slug}-${item.id}`} className="image cursor-pointer">
                                        <img src={item.thumbnail} alt="" className="image" />
                                    </a>

                                    <div className="body">
                                        <a href={`/blog/${sport!.slug}/${item.slug}-${item.id}`} className="title cursor-pointer">
                                            {item.title}
                                        </a>

                                        <div className="footer">
                                            <div className="card--article__info">
                                                <div className="card--article__name">{item.author}</div>
                                                <div className="card--article__time">{formatDate(item.updated_at)}</div>
                                            </div>

                                            <div className="right">
                                                <a className="item" href={`/blog/${sport!.slug}/${item.slug}-${item.id}`}>
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.95768 11.0833H4.66602C2.33268 11.0833 1.16602 10.5 1.16602 7.58333V4.66666C1.16602 2.33333 2.33268 1.16666 4.66602 1.16666H9.33268C11.666 1.16666 12.8327 2.33333 12.8327 4.66666V7.58333C12.8327 9.91666 11.666 11.0833 9.33268 11.0833H9.04102C8.86018 11.0833 8.68518 11.1708 8.57435 11.3167L7.69935 12.4833C7.31435 12.9967 6.68435 12.9967 6.29935 12.4833L5.42435 11.3167C5.33102 11.1883 5.11518 11.0833 4.95768 11.0833Z" stroke="#52524F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.33143 6.41667H9.33667" stroke="#52524F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.99745 6.41667H7.00269" stroke="#52524F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4.66346 6.41667H4.6687" stroke="#52524F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                </a>
                                                <a className="item" href={`/blog/${sport!.slug}/${item.slug}-${item.id}`}>
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.58398 6.41666L12.3673 1.63333" stroke="#52524F" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12.8332 3.96666V1.16666H10.0332" stroke="#52524F" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.41602 1.16666H5.24935C2.33268 1.16666 1.16602 2.33333 1.16602 5.25V8.75C1.16602 11.6667 2.33268 12.8333 5.24935 12.8333H8.74935C11.666 12.8333 12.8327 11.6667 12.8327 8.75V7.58333" stroke="#52524F" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )
                    )}
                    <a href={`/category/${sport!.slug}`} className="view-more--btn">
                        Xem thêm
                    </a>
                </>
            )}
        </div >
    )
}

export default SportGenre;
