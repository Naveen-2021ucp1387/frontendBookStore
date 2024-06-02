import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ChatBot />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
