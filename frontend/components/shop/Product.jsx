"use client";
import React from "react";
import { easeInOut, motion, scale } from "framer-motion";
import { Poppins } from "next/font/google";
import { useState } from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Product = (props) => {
    const obj=props.obj;
    const [buy,setBuy]=useState(obj.status)
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className={`${poppins.className} product-box flex  gap-[14px] flex-col text-black overflow-hidden`}
    >
        <div className="h-[200px] rounded-2xl  rounded-b-none overflow-hidden">
            <img className="h-[100%] w-[100%] object-cover "src={obj.img_url}></img>
        </div>
      
      <div className="flex justify-between pl-1 pr-1"><h1 className="text-blue-700 font-bold text-2xl pb-1 ">{obj.name}</h1>
      <p>{obj.category}</p></div>
      
      <div className="pl-1">
        <p className="font-">
          <span className="font-semibold text-[16px]">Brand: </span> {obj.model}
        </p>
        <p className="">
          <span className="font-semibold text-[16px]">price: </span> {obj.price}₹
        </p>
        <p className="">
          {" "}
          <span className="font-semibold text-[16px]">location: </span> {obj.location}
        </p>
            <motion.button
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    className={`h-[40px] rounded-2xl text-[18px] text-white w-70 relative left-5 mt-1.5 shadow-xl/20 
        ${buy ? "bg-green-600" : "bg-black"}`}
    onClick={() => setBuy(!buy)}
    >
    {buy ? "Added to Cart ✅" : "Request"}
    </motion.button>
      </div>
    </motion.div>
  );
};

export default Product;
