const Advertisement = ({ image, isCollapsed }: { image: string; isCollapsed?: boolean }) => (
    <div className={`adv ${isCollapsed ? "padding-0" : "padding-62"}`}>
        {image ? (
            <img src={image} alt="" />
        ) : (
            <span className={`adv__text `}>
                ADVERTISEMENT
            </span>
        )}
    </div>
);

export default Advertisement;
