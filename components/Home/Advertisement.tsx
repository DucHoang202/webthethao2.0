const Advertisement = ({ image }: { image: string }) => {


    return (
        <div className="adv">
            {image ? (
                <img src={image} alt="" />
            ) : (
                <span className="adv__text">ADVERTISEMENT</span>
            )}
        </div>
    );
};

export default Advertisement;
