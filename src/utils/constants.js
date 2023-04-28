import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At Lendert's Garage, our mission is to provide our customers with a hassle-free online shopping experience. We strive to deliver the best quality products on the market today.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "We desire to enable people to be creative and add flavour to their homes using one of our many items.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We have over 20 years of industry experience buying and selling all kinds of stuff.",
  },
];

// export const products_url = "https://course-api.com/react-store-products";
export const products_url = "/.netlify/functions/products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = `/.netlify/functions/single-product?id=`;
