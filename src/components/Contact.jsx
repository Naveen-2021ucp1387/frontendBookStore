import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";
import toast from "react-hot-toast";

export const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      query: data.message,
      status: true,
    };
    await axios
      .post("http://localhost:4000/contact", userInfo)
      .then((res) => {
        toast.success("Message Sent Successfully");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Message not Sent");
        }
      });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto max-w-screen-xl md:px-20 px-4">
        <div className="mt-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-4">
              If you have any questions, feedback, or inquiries, please don't
              hesitate to reach out to us. We're here to help!
            </p>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Address</h2>
              <p>MNIT Jaipur, JLN Marg, Jaipur, Rajasthan, India - 302017</p>
            </div>
            <form onSubmit={handleSubmit} className="mb-6">
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="block w-full bg-gray-800 text-white rounded-md py-2 px-4 mb-2"
                onChange={handleChange}
                required
              />
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="block w-full bg-gray-800 text-white rounded-md py-2 px-4 mb-2"
                onChange={handleChange}
                required
              />
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="block w-full bg-gray-800 text-white rounded-md py-2 px-4 mb-2"
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 p-8">
            <img
              src="https://images.pexels.com/photos/70292/pexels-photo-70292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
