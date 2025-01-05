import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/layout/general/Header";
import { Widgets } from "./Widgets";

import { Banner, BannerWithImage, News } from "./Banner";
import Gallery from "./Gallery";
import Footer from "./Footer";
import UserPublications from "../../publication/UserPublications";
export const PublicLayout = () => {


  return (
    <>
      <Header />
      <Widgets />
      <Banner />
      <BannerWithImage />
      <Gallery />
       <UserPublications  limit={6}/>
      <Footer />

      <section className="layout_content">
        <Outlet />
      </section>
    </>
  );
};

export default PublicLayout;

