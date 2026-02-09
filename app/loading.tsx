import React from 'react';
import { Skeleton, NewsCardSkeleton, ArticleCardSkeleton, SportGenreSkeleton, VideoSkeleton, HotTopicCardSkeleton } from '@/components/ui/Skeleton';

export default function Loading() {
    return (
        <div className="App">
            <div className="skeleton-header"></div>
            <main className="skeleton-main">
                <div className="skeleton-layout">
                    {/* Left sidebar skeleton */}
                    <div className="skeleton-layout__left">
                        <div className="skeleton-card-container">
                            <Skeleton height={24} width="70%" style={{ marginBottom: '16px', marginTop: '10px' }} />
                            <div className="skeleton-schedule-list">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="item">
                                        <Skeleton width={24} height={24} borderRadius={4} />
                                        <Skeleton width="60%" height={16} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <HotTopicCardSkeleton />
                        <div style={{ height: '250px', borderRadius: '14px' }}></div>
                    </div>

                    {/* Middle content skeleton */}
                    <div className="skeleton-layout__middle">
                        <div className="skeleton-share-bar">
                            <Skeleton circle width={32} height={32} />
                            <Skeleton width="100%" height={20} />
                            <Skeleton width={32} height={32} borderRadius={16} />
                        </div>

                        <NewsCardSkeleton />
                        {[...Array(2)].map((_, i) => (
                            <NewsCardSkeleton key={i} />
                        ))}

                        <VideoSkeleton />

                        {[...Array(2)].map((_, i) => (
                            <SportGenreSkeleton key={i} />
                        ))}
                    </div>

                    {/* Right sidebar skeleton */}
                    <div className="skeleton-layout__right">
                        <div className="skeleton-right-sidebar-item">
                            <div className="header-box">
                                <Skeleton width={120} height={20} />
                            </div>
                            {[...Array(3)].map((_, i) => (
                                <ArticleCardSkeleton key={i} />
                            ))}
                            <div className="footer-box">
                                <Skeleton width="100%" height={36} borderRadius={4} />
                            </div>
                        </div>

                        <HotTopicCardSkeleton />

                        <div style={{ height: '300px', borderRadius: '14px' }}></div>

                        <div className="skeleton-right-sidebar-item">
                            <div className="header-box">
                                <Skeleton width={150} height={20} />
                            </div>
                            {[...Array(3)].map((_, i) => (
                                <ArticleCardSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

