const Advertisement = () => {
    const advertisement = [
        { image: "" }
    ];

    return (
        <div className="advertisement">
            {advertisement.map((item, index) =>
                item.image ? (
                    <img key={index} src={item.image} alt="" />
                ) : (
                    <span key={index}>ADVERTISEMENT</span>
                )
            )}
        </div>
    );
};

export default Advertisement;
