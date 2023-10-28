import React from "react";
import { Link } from "react-router-dom";
export default function News(props) {
  return (
    <div className="news-container">
      <div className="news-container__image-container">
        {props.images.map((value) => {
          return (
            <img src={value} alt="image1" className="news-container__image" />
          );
        })}
      </div>
      {props.source ? <h5>source: {props.source}</h5> : ""}
      <p className="news-container__paragraphe">
        {props.paragraphe}
        {props.link !== "" ? (
          <a href={props.link} target="_blank" rel="noreferrer">
            Read more...
          </a>
        ) : (
          ""
        )}
        {props.inPageLink === true ? (
          <Link to={`/news/${props.id}`} state={{ newsGen: props.id }}>
            Read more...
          </Link>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
