const Advertisement = ({ image, isCollapsed }: { image: string; isCollapsed?: boolean }) => (
    <div className={`adv`}>
        {image ? (isCollapsed ? (
            <div className="w-full">
                <div className={`adv__text padding-12`}>
                    ADVERTISEMENT
                </  div>
                <img src={image} alt="" />
            </div>
        ) : (
            <img src={image} alt="" />
        )) : (
            <span className={`adv__text`}>
                ADVERTISEMENT
            </span>
        )}
    </div>
);

export default Advertisement;
