import React from "react";
import { useEffect, useState } from "react";
//import { data } from "../Utilities/ContextApi/ContextData";
//import { useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HeaderCompo from "../Components/HeaderCompo";
import "./Pages.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Components/Footer";
function Hollywood() {
  const status = useSelector((state) => state.slice.loggedIn);
  const [data, setData] = useState(null);

  const [value] = useState("value");

  const fetchData = async () => {
    try {
      let res = await axios.get(
        "https://node-project-backend.onrender.com/data"
      );
      const response = res.data;
      setData(response);
      
    } catch (err) {
      console.log(err, "errs");
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [value]);

  return (
    <>
      <HeaderCompo />
      {data ? (
        <>
          {" "}
          <h2 className="page-titles-right">Hollywood Movies</h2>
          <div className="section-container">
            <div className="left-section">
              {" "}
              {data ? (
                data
                  .filter((item) => item.category === "Hollywood")
                  .map((i, index) => {
                    //console.log(i, index);
                    return (
                      <div key={index} className="left-section-info-container">
                        <div className="left-section-avatar">
                          <Link to={`/article/${i.id}`} state={status}>
                            <img
                              className="pages-topics-images"
                              alt="logo"
                              src={i.image}
                            ></img>
                          </Link>
                        </div>
                        <div className="info">
                          <h2 className="left-section-name">{i.name}</h2>
                          <h3 className="left-section-date">
                            Release Date :{i.release}
                          </h3>
                          <h3 className="left-section-imdb">IMD'b:{i.IMDb}</h3>
                          <p className="left-section-para">{i.desc}</p>
                          <div className="left-sec-slash-wrapper">
                            <span className="left-sec-cat">
                              {i.category + " "} /
                            </span>
                            <span className="left-sec-postdate">
                              {" " + i.postdate}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <h2>Loading</h2>
              )}
            </div>

            <div className="right-section">
              <h2 className="page-titles-left">Top Post</h2>

              <div className="right-sec-big-post">
                {data
                  ? data
                      .filter(
                        (item) =>
                          item.category === "Hollywood" && item.id === 11
                      )
                      .map((item, index) => {
                        return (
                          <>
                            <Link to={`/article/${item.id}`}>
                              <img
                                className="right-sec-big-avatar"
                                src={item.image}
                                alt="logo"
                              />
                            </Link>
                            <div className="">
                              <span className="right-sec-big-name">
                                {item.name}
                              </span>
                            </div>
                          </>
                        );
                      })
                  : "Loading..."}
              </div>
              <hr />

              <div className="right-sec-small-post">
                {data
                  ? data
                      .filter((item) => item.category === "Hollywood")
                      .map((i, index) => {
                        return (
                          <div
                            key={index}
                            className="right-section-info-container"
                          >
                            <div className="right-section-avatar">
                              <Link to={`/article/${i.id}`}>
                                <img
                                  alt="logo"
                                  src={i.image}
                                  className="right-sec-avatar-first"
                                  /*style={{
                          width: 500,
                          height: 150,
                          borderRadius: 10,
                          marginRight: 40,
                        }}*/
                                ></img>
                              </Link>
                            </div>
                            <div className="right-section-info">
                              <h3 className="right-section-name"> {i.name}</h3>
                              <h4>IMDb:{i.IMDb}</h4>
                              <h4>{i.release}</h4>
                            </div>
                          </div>
                        );
                      })
                  : "Loading"}
              </div>
            </div>
            <div className="advertisement-container">Advertisement</div>
          </div>
          <Footer />
        </>
      ) : (
        <div class="loader">Loading...</div>
      )}
    </>
  );
}
export default Hollywood;
