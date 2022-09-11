import React, { FC } from "react";
import Image from "next/image";
// import "./Works.css";
import Upwork from "./Upwork.png";
import Fiverr from "./fiverr.png";
import Amazon from "./amazon.png";
import Shopify from "./Shopify.png";
import Facebook from "./Facebook.png";
import { motion } from "framer-motion";
const Works: FC = () => (
  <div className="works" id="works">
    {/* left side */}
    <div className="w-left">
      <div className="awesome">
        {/* dark Mode */}
        <span style={{ color: "white" }}>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printingLorem ispum is simpley dummy
          text
          <br />
          y dummy text of printingLorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <button className="btn btn-primary" style={{ marginTop: "20px" }}>
          Hire Me
        </button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
    </div>
    <div className="w-right">
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="w-mainCircle"
      >
        <div className="w-secCircle">
          <Image src={Upwork} alt="" />
        </div>
        <div className="w-secCircle">
          <Image src={Fiverr} alt="" />
        </div>
        <div className="w-secCircle">
          <Image src={Amazon} alt="" />
        </div>{" "}
        <div className="w-secCircle">
          <Image src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
          <Image src={Facebook} alt="" />
        </div>
      </motion.div>
      {/* background Circles */}
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    </div>
  </div>
);

export default Works;
