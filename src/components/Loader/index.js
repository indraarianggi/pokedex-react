import React from "react";
import Skeleton from "react-loading-skeleton";

const Loader = ({ type, ...props }) => {
    switch (type) {
        case "button":
            return (
                <Skeleton
                    height="40px"
                    width="100px"
                    style={{ margin: "0 0.5rem" }}
                />
            );
        case "card":
            return (
                <>
                    <article style={{ padding: "1rem", textAlign: "center" }}>
                        <Skeleton width={250} height={250} />
                    </article>
                    <article
                        className="pokemon--stats"
                        style={{ padding: "1rem" }}
                    >
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div className="pokemon-stat-item" key={index}>
                                <Skeleton width="100%" height={25} />
                                <Skeleton width="100%" height={25} />
                                <Skeleton width="100%" height={25} />
                            </div>
                        ))}
                    </article>
                </>
            );

        default:
            return <Skeleton {...props} />;
    }
};

export default Loader;
