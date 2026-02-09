import React from 'react';
import { Skeleton, ArticleCardSkeleton, CategoryCardSkeleton, HotTopicCardSkeleton } from '@/components/ui/Skeleton';

export default function Loading() {
    return (
        <div className="App">
            <div className="skeleton-header"></div>
            <main className="skeleton-main">
                <div className="skeleton-layout">
                    <div className="skeleton-layout__category-main">
                        <div className="skeleton-share-bar">
                            <Skeleton circle width={32} height={32} />
                            <Skeleton width="100%" height={20} />
                            <Skeleton width={32} height={32} borderRadius={16} />
                        </div>

                        <div className="skeleton-card-container">
                            <Skeleton width={200} height={26} style={{ marginBottom: '20px' }} />
                            {[...Array(6)].map((_, i) => (
                                <CategoryCardSkeleton key={i} />
                            ))}
                            <div style={{ padding: '20px 0 0 0' }}>
                                <Skeleton width="100%" height={40} borderRadius={10} />
                            </div>
                        </div>
                    </div>

                    <div className="skeleton-layout__right">
                        <div className="skeleton-right-sidebar-item">
                            <div className="header-box">
                                <Skeleton width={120} height={20} />
                            </div>
                            {[...Array(3)].map((_, i) => (
                                <ArticleCardSkeleton key={i} />
                            ))}
                        </div>

                        <div className="skeleton-right-sidebar-item">
                            <div className="header-box">
                                <Skeleton width={150} height={20} />
                            </div>
                            {[...Array(3)].map((_, i) => (
                                <ArticleCardSkeleton key={i} />
                            ))}
                        </div>

                        <HotTopicCardSkeleton />
                        <div style={{ height: '300px', borderRadius: '14px' }}></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
