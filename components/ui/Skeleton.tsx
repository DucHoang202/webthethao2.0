import React from 'react';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    circle?: boolean;
    style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    className = '',
    width,
    height,
    borderRadius,
    circle,
    style
}) => {
    const combinedStyle: React.CSSProperties = {
        width: width,
        height: height,
        borderRadius: circle ? '50%' : borderRadius,
        ...style
    };

    return (
        <div
            className={`skeleton ${circle ? 'skeleton--circle' : ''} ${className}`}
            style={combinedStyle}
        />
    );
};

export const NewsCardSkeleton: React.FC = () => {
    return (
        <div className="card--news-skeleton">
            <div className="info">
                <Skeleton circle width={40} height={40} className="avatar" />
                <div className="col">
                    <Skeleton width={120} height={14} />
                    <Skeleton width={80} height={11} />
                </div>
            </div>
            <Skeleton className="skeleton--image" />
            <div className="body">
                <Skeleton width="100%" height={22} style={{ marginBottom: '8px' }} />
                <Skeleton width="100%" height={16} style={{ marginBottom: '4px' }} />
                <Skeleton width="80%" height={16} style={{ marginBottom: '14px' }} />
                <div className="footer">
                    <Skeleton width={80} height={14} style={{ marginRight: 'auto' }} />
                    <div className="right">
                        <Skeleton width={60} height={12} />
                        <Skeleton width={60} height={12} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ArticleCardSkeleton: React.FC = () => {
    return (
        <div className="card--article-skeleton">
            <div className="card--article-skeleton__container">
                <Skeleton width={88} height={88} borderRadius={4} />
                <div className="body">
                    <div>
                        <Skeleton width="100%" height={14} style={{ marginBottom: '6px' }} />
                        <Skeleton width="70%" height={14} />
                    </div>
                    <div className="footer">
                        <div className="info">
                            <Skeleton width={60} height={12} style={{ marginBottom: '4px' }} />
                            <Skeleton width={40} height={11} />
                        </div>
                        <div className="right">
                            <Skeleton circle width={14} height={14} />
                            <Skeleton circle width={14} height={14} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CategoryCardSkeleton: React.FC = () => {
    return (
        <div className="card--category-skeleton">
            <div className="card--category-skeleton__container">
                <Skeleton width={88} height={88} borderRadius={4} />
                <div className="body">
                    <div>
                        <Skeleton width="100%" height={18} style={{ marginBottom: '8px' }} />
                        <Skeleton width="100%" height={14} style={{ marginBottom: '4px' }} />
                        <Skeleton width="100%" height={14} />
                    </div>
                    <div className="footer">
                        <div className="info">
                            <Skeleton width={80} height={12} style={{ marginBottom: '4px' }} />
                            <Skeleton width={50} height={11} />
                        </div>
                        <div className="right">
                            <Skeleton circle width={14} height={14} />
                            <Skeleton circle width={14} height={14} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SportGenreSkeleton: React.FC = () => {
    return (
        <div className="sport-genre-skeleton">
            <div className="card--header">
                <Skeleton width={4} height={24} style={{ marginRight: '10px', borderRadius: '0 6px 6px 0' }} />
                <Skeleton width={150} height={18} />
            </div>
            <NewsCardSkeleton />
            {[...Array(3)].map((_, i) => (
                <ArticleCardSkeleton key={i} />
            ))}
            <div className="view-more-wrapper">
                <Skeleton width="100%" height={40} borderRadius={10} />
            </div>
        </div>
    );
};

export const VideoSkeleton: React.FC = () => {
    return (
        <div className="video-skeleton">
            <div className="title">
                <Skeleton width={24} height={24} borderRadius={4} />
                <Skeleton width={100} height={24} />
            </div>
            <div className="carousel-track">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="video-item">
                        <Skeleton width={184} height={250} borderRadius={12} />
                        <Skeleton width="100%" height={16} style={{ marginTop: '10px' }} />
                    </div>
                ))}
            </div>
            <Skeleton width="100%" height={40} borderRadius={10} />
        </div>
    );
};

export const HotTopicCardSkeleton: React.FC = () => {
    return (
        <div className="card--trending-skeleton">
            <Skeleton width={120} height={26} style={{ marginBottom: '16px' }} />
            {[...Array(3)].map((_, i) => (
                <div key={i} className="item">
                    <Skeleton circle width={4} height={4} style={{ marginTop: '7px' }} />
                    <Skeleton width="90%" height={16} />
                </div>
            ))}
        </div>
    );
};

export const BlogContentSkeleton: React.FC = () => {
    return (
        <div className="blog-content-skeleton">
            {/* Breadcrumbs/Meta */}
            <div className="meta">
                <Skeleton width={100} height={14} />
                <Skeleton circle width={4} height={4} />
                <Skeleton width={80} height={14} />
            </div>

            {/* Title */}
            <Skeleton width="100%" height={32} />
            <Skeleton width="60%" height={32} />

            {/* Author info */}
            <div className="author-info">
                <Skeleton circle width={40} height={40} />
                <div className="col">
                    <Skeleton width={120} height={16} style={{ marginBottom: '4px' }} />
                    <Skeleton width={80} height={12} />
                </div>
                <Skeleton width={60} height={24} borderRadius={12} />
            </div>

            {/* Sapo */}
            <Skeleton width="100%" height={20} />
            <Skeleton width="100%" height={20} />
            <Skeleton width="40%" height={20} />

            {/* Featured Image */}
            <Skeleton width="100%" style={{ aspectRatio: '16/9', borderRadius: '12px' }} />

            {/* Body text blocks */}
            {[...Array(3)].map((_, i) => (
                <div key={i} className="text-block">
                    <Skeleton width="100%" height={16} />
                    <Skeleton width="100%" height={16} />
                    <Skeleton width="95%" height={16} />
                </div>
            ))}

            {/* Buttons (Comment/Share) */}
            <div className="action-buttons">
                <Skeleton width={130} height={40} borderRadius={20} />
                <Skeleton width={130} height={40} borderRadius={20} />
            </div>

            {/* Comment Section */}
            <div className="comment-section">
                <Skeleton width="100%" height={80} borderRadius={12} />
                <div className="comment-item">
                    <Skeleton circle width={40} height={40} />
                    <div className="col">
                        <Skeleton width={100} height={14} style={{ marginBottom: '8px' }} />
                        <Skeleton width="100%" height={40} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;




