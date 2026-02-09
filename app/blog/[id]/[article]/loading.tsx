import React from 'react';
import { Skeleton, ArticleCardSkeleton, BlogContentSkeleton, HotTopicCardSkeleton, NewsCardSkeleton } from '@/components/ui/Skeleton';

export default function Loading() {
    return (
        <div className="App">
            <div className="skeleton-header"></div>
            <main className="skeleton-main">
                <div className="skeleton-layout">
                    {/* Left sidebar - Share icons */}
                    <div className="skeleton-share-vertical">
                        {[...Array(5)].map((_, i) => (
                            <Skeleton key={i} circle width={24} height={24} />
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="skeleton-layout__category-main" style={{ gap: '30px' }}>
                        <BlogContentSkeleton />

                        {/* Advertisement placeholder */}
                        <div style={{ width: '100%', height: '250px', borderRadius: '12px' }}></div>

                        {/* Same category/Featured sections */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Skeleton width={200} height={24} />
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                                {[...Array(3)].map((_, i) => (
                                    <NewsCardSkeleton key={i} />
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Skeleton width={200} height={24} />
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                                {[...Array(3)].map((_, i) => (
                                    <NewsCardSkeleton key={i} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="skeleton-layout__right">
                        <div className="skeleton-right-sidebar-item">
                            <div className="header-box">
                                <Skeleton width={120} height={20} />
                            </div>
                            {[...Array(3)].map((_, i) => (
                                <ArticleCardSkeleton key={i} />
                            ))}
                        </div>

                        <HotTopicCardSkeleton />

                        <div style={{ height: '300px', borderRadius: '14px' }}></div>

                        <div className="skeleton-right-sidebar-item">
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
