import React from "react";
import { testimonialsData } from "../assets/assets";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-10 w-full"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="decoration-1 font-light">Reviews</span>
      </h1>

      <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
        Real stories from those who found a home with us.
      </p>

      {/* Scrollable Testimonials */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] p-6 bg-white shadow-md rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition snap-start"
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-gray-200"
            />

            {/* Rating Stars */}
            <div className="flex justify-center mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>

            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
            <span className="text-sm text-gray-500">{testimonial.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
