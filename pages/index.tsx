import React from "react";
import Image from "next/image";
import Navbar from "../components/molecols/Navbar";
import SliderOne from "../components/organism/slideHome/SliderOne";
import Who from "../components/organism/slideHome/Who";
import Biography from "../components/organism/slideHome/Biography";
import PoesieList from "../components/molecols/PoesieList";
import Footer from "../components/molecols/Footer";

export default function Home() {
  return (
    <div className="font-MontSerrat">
      <Navbar />
      <SliderOne />
      <Who />
      <Biography />
      <PoesieList />
      <Footer />
    </div>
  );
}
