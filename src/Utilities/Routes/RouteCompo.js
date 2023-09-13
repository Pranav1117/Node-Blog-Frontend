import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bollywood from "../../Pages/Bollywood";
import Hollywood from "../../Pages/Hollywood";
import Fitness from "../../Pages/Fitness";
import Technology from "../../Pages/Technology";
import Gaming from "../../Pages/Gaming";
import Home from "../../Pages/Home";
import Article from "../../Pages/article";
import LoginPage from "../../Pages/LoginPage";
import RegisterPage from "../../Pages/RegisterPage";
import AuthStatusPage from "../../Pages/AuthStatusPage";
//import { data } from "../ContextApi/ContextData";

function RouteCompo() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bollywood" element={<Bollywood />} />
          <Route path="hollywood" element={<Hollywood />} />
          <Route path="fitness" element={<Fitness />} />
          <Route path="gaming" element={<Gaming />} />
          <Route path="technology" element={<Technology />} />
          <Route path="article/:Id" element={<Article />} />
          <Route path="user/login" element={<LoginPage />} />
          <Route path="user/register" element={<RegisterPage />} />
          <Route path="article/:Id/user/login" element={<LoginPage />} />
          <Route path="user/status" element={<AuthStatusPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default RouteCompo;
