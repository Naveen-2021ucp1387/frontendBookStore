import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export const About = () => {
  // Function to generate a random address
  const generateRandomAddress = () => {
    const addresses = [
      "123 Booklover's Lane, Fiction City, Imagination State, 45678",
      "456 Storyteller's Avenue, Adventure Town, Creativity State, 56789",
      "789 Reader's Road, Mystery Village, Wonder State, 67890",
    ];
    const randomIndex = Math.floor(Math.random() * addresses.length);
    return addresses[randomIndex];
  };

  // Random address
  const randomAddress = generateRandomAddress();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto max-w-screen-2xl md:px-20 px-4">
        <div className="mt-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <h2 className="text-2xl font-bold mb-4">The Power of Books</h2>
            <p className="text-lg mb-4">
              Books are not just objects; they are gateways to knowledge,
              imagination, and empathy. They have the power to transport us to
              distant lands, challenge our perspectives, and inspire us to
              pursue our dreams.
            </p>
            <p className="text-lg mb-4">
              We believe in the transformative potential of books to shape lives
              and communities. That's why we're dedicated to curating a diverse
              selection of titles that celebrate the richness of human
              experience and foster a love of reading in people of all ages.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is simple: to connect people through stories. We
              strive to be more than just a bookstore; we aim to be a gathering
              place where ideas are exchanged, friendships are formed, and
              imaginations are sparked.
            </p>
            <p className="text-lg mb-4">
              We believe in the power of community and the joy of shared
              experiences. That's why we host author events, book clubs, and
              other activities that bring people together to celebrate the
              written word.
            </p>
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg mb-4">
              At our store, you'll find a wide range of books catering to
              various interests and age groups. From bestsellers to hidden gems,
              we're committed to offering something for everyone.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <h2 className="text-lg font-bold mb-2">Visit Us</h2>
              <p className="text-base mb-1">{randomAddress}</p>
              <iframe
                title="Bookstore Location"
                className="w-full h-48 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8772189508444!2d-73.98509938459884!3d40.748817979327694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599dd047fd03%3A0xb4b4b7f89ad290b!2sNew%20York%20Public%20Library!5e0!3m2!1sen!2sus!4v1635778368887!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Bookstore"
              className="w-auto h-auto rounded-lg shadow-lg mb-6"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
