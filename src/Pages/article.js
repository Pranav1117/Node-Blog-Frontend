import React from "react";
import axios from "axios";
//import { data } from "../Utilities/ContextApi/ContextData";
import { useState, useEffect } from "react";
import { setLoggedInStatus } from "../Features/Slice";

import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./article.css";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Components/Footer";

const Article = () => {
  const [data, setData] = useState([]);
  //const [userdata, setUserData] = useState("");
  const [value] = useState("value");
  const dispatch = useDispatch();

  const nav = useNavigate();
  const fetchData = async () => {
    try {
      let res = await axios.get(
        "https://node-project-backend.onrender.com/data"
      );
      // console.log(res);
      const response = res.data;
      console.log("res", response);
      setData(response);
      console.log(data, "data");
    } catch (err) {
      console.log(err, "errs");
    }
  };

  const checkLoggedIn = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    let res = await axios.get(
      "https://node-project-backend.onrender.com/checkloggedin"
      // "http://localhost:8000/checkloggedin"
    );
    console.log(res.data, "checkinngg");
    dispatch(setLoggedInStatus(res.data.isLoggedIn));
  };

  useEffect(() => {
    fetchData();
    checkLoggedIn();
    // eslint-disable-next-line
  }, [value]);

  var params = useParams();
  var path = parseInt(params.Id);

  const location = useLocation();
  const status = useSelector((state) => state.slice.loggedIn);
  console.log(status, "in article");
  //const [detail] = useContext(data);
  var categor;

  for (var i = 0; i < data.length; i++) {
    if (data[i].id === path) {
      categor = data[i].category;
      break;
    }
  }

  const handleClick = () => {
    nav("user/login");
  };

  return (
    <>
      <div>
        <Logo className="article-logo" />
        {status ? (
          <div>
            {data ? (
              data
                .filter((item) => item.id === path)
                .map((i, index) => {
                  return (
                    <>
                      <div className="article-above-container" key={index}>
                        <h2 className="article-heading">{i.name}</h2>
                        <div className="articlers-info-container">
                          <img src={i.avatar} className="avatar" alt="logo" />
                          <div className="articlers-info">
                            <div className="articlers-name">{i.articleby}</div>
                            <div className="articlers-postdate">
                              {i.postdate}
                            </div>
                          </div>
                          <div className="socials-icons-container">
                            <img
                              className="fb-icon"
                              src="https://png.pngitem.com/pimgs/s/33-336495_pic-of-facebook-icon-white-facebook-vector-png.png"
                              alt="logo"
                              style={{
                                width: 26,
                                height: 26,
                                borderRadius: 10,
                              }}
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpzTy2HGrI-pCt83LgXsh2JYbw4Ldl4laEayERq4mBg&usqp=CAU&ec=48600113"
                              className="twitter-icon"
                              alt="logo"
                              style={{
                                width: 26,
                                height: 26,
                                borderRadius: 10,
                              }}
                            />
                            <img
                              src="https://thumbs.dreamstime.com/b/basic-rgb-146064713.jpg"
                              className="insta-icon"
                              alt="logo"
                              style={{
                                width: 26,
                                height: 26,
                                borderRadius: 10,
                              }}
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNAfb1NqAwiLlWgaSpwNti50Rpm926fm5wuMbyXye7A&usqp=CAU&ec=48600113"
                              alt="logo"
                              className="yt-icon"
                              style={{
                                width: 26,
                                height: 26,
                                borderRadius: 10,
                              }}
                            />
                          </div>
                        </div>
                        <img
                          alt="logo"
                          className="article-main-image"
                          src={i.image}
                        />
                        <p className="article-main-para">{i.details}</p>
                        <br />
                        <div className="genre-likes-container">
                          <div className="genre-container">
                            <div className="genre1">{i.genre1}</div>

                            <div className="genre2">{i.genre2}</div>
                            <div className="genre3">{i.genre3}</div>
                          </div>
                          <div className="likes-container">
                            <img
                              className="claps-icon"
                              src="https://cdn-icons-png.flaticon.com/512/5976/5976435.png"
                              alt="logo"
                            />
                            <span className="claps-txt">{i.likes}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
            ) : (
              <h2>Loadinggg</h2>
            )}
          </div>
        ) : (
          <h2 className="asking-login-text">
            Please{" "}
            <Link to="user/login" className="login-text-ask">
              Login{" "}
            </Link>{" "}
            first
          </h2>
        )}

        <h2 className="more">More from Siren </h2>
        <hr className="article-lower-line" />
        <div className="article-lower-conatiner">
          {data ? (
            data
              .filter((item) => item.category === categor && item.id !== path)
              .map((i, index) => {
                return (
                  <>
                    <div className="upper">
                      <div className="article-lower-wrapper">
                        <Link
                          className="article-bottom-name"
                          to={`/article/${i.id}`}
                        >
                          <img
                            alt="logo"
                            className="article-bottom-images"
                            src={i.image}
                          />
                          <h4 className=" article-bottom">{i.name}</h4>
                        </Link>
                        <h5 className="article-bottom-date article-bottom">
                          {i.release}
                        </h5>
                      </div>
                    </div>
                  </>
                );
              })
          ) : (
            <h2>Loadinggg</h2>
          )}
        </div>
      </div>{" "}
      <Footer />
    </>
  );
};

export default Article;
