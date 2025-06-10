import React from "react";
import "./../App.css";
import image from "./../assets/delivery.png";
import spinach from "./../assets/spinach.png";
import carrot from "./../assets/carrot.png";
import dairy from "./../assets/dairy.png";
import vegetables from "./../assets/vegetables.png";
import honey from "./../assets/honey.png";
import flour from "./../assets/flour.png";
import spices from "./../assets/spices.png";


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <div className="text-2xl font-bold text-orange-500">
          Finest<span className="text-yellow-300">Mart</span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="text-orange-500 border-b-2 border-orange-500">Home</a>
          <a href="#">Categories</a>
          <a href="#">Sales</a>
          <a href="#">FAQ</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
          <a href="#" className="text-orange-500 mt-2 font-medium">Sign In</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 py-10">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Let your <span className="text-orange-500">groceries</span> come to you
          </h1>
          <p className="text-gray-600">
            Get fresh groceries online without stepping out to make delicious food with the freshest ingredients
          </p>
          <div className="flex items-center justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Search here"
              className="w-full border rounded-l-md px-4 py-2"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
              🔍
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
            <span className="flex items-center gap-1">✅ Fresh Vegetables</span>
            <span className="flex items-center gap-1">✅ 100% Guarantee</span>
            <span className="flex items-center gap-1">✅ Cash on Delivery</span>
            <span className="flex items-center gap-1">✅ Fast Delivery</span>
          </div>
        </div>

        {/* person Image */}
        <div className="lg:w-1/2 w-full relative mb-10 lg:mb-0">
  <img
    src={image}
    alt="Delivery Hero"
    className="mx-auto w-[400px] " 
  />
</div>
<div className="flex flex-col items-center gap-4">
  <div className="text-center border rounded-xl p-4 shadow-md w-40">
    <img
      src={spinach}
      alt="Spinach"
      className="w-24 h-24 object-contain mx-auto mb-2"
    />
    <p className="font-medium">Fresh Spinach</p>
    <p className="text-orange-500 font-semibold">$12.00</p>
  </div>

  <div className="text-center border rounded-xl p-4 shadow-md w-40">
    <img
      src={carrot}
      alt="Carrot"
      className="w-24 h-24 object-contain mx-auto mb-2"
    />
    <p className="font-medium">Fresh Carrot</p>
    <p className="text-orange-500 font-semibold">$9.00</p>
  </div>
</div>


      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 py-10">
        {[
          "Dairy Products",
          "Vegetables & Fruits",
          "Spices & Seasonings",
          "Honey",
          "Flour",
        ].map((title, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src= {title=="Dairy Products"?dairy:title=="Vegetables & Fruits"?vegetables:title=="Spices & Seasonings"?spices:title=="Honey"?honey:flour}
              alt={title}
              className="w-12 h-12 mx-auto mb-3"
            />
            <h4 className="font-semibold text-sm">{title}</h4>
            <p className="text-xs text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
