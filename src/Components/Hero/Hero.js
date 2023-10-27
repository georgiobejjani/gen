import React from "react";

export default function Hero (props) {
    return (
        <div className="heroContainer" style = {{backgroundImage:`url(${props.bg})`}}>
            <div className="heroContainer__textSection">
                <h1 className="heroContainer__title">{props.title}</h1>
                <span className="heroContainer__subTitle">{props.subTitle}</span>
            </div>
        </div>
    );
} 