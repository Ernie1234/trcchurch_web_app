"use client";

import MasonryGrid from "../components/masonry/Masonry";

import Header from "../components/header/Header";
import { gallery } from "../libs/data";

const Gallery = () => {
  return (
    <div>
      <Header
        main1="welcome to our"
        main2="gallery"
        sub="hello,"
        url="/images/Village.jpg"
      />
      <MasonryGrid data={gallery} morePage={false} />
    </div>
  );
};

export default Gallery;
