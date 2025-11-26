import React from "react";

const Search: React.FC = () => {
    const search = [
        {
            name: "TRENDING NOW",
            nav: "",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                    <path d="M2 11.7888L5.72414 7.59914L8.2069 10.3922L14 3.875" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.8623 3.875H14.0002V8.53017" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        { name: "Hanoi Open Pool", nav: "", icon: null },
        { name: "PPA MB Vietnam Cup", nav: "", icon: null },
        { name: "PPA MB Vietnam Cup", nav: "", icon: null },
        { name: "PPA MB Vietnam Cup", nav: "", icon: null },
        { name: "PPA MB Vietnam Cup", nav: "", icon: null }
    ];

    return (
        <section>
            <div className="search">
                <div className="search-container">
                    {search.map((item, index) => (
                        <div className="item" key={index}>
                            {item.icon && <div className="icon">{item.icon}</div>}
                            <a className="name" href={item.nav}>
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Search;
