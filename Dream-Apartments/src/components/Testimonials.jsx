import React from "react";


const testimonials = [
  {
    name: "Calvin Lovi",
    date: "11 August 2025",
    text: "The services were good and efficient as well as very kind people who help. As for me Bahati has helped me get a couple of apartments and so far I'm happy with.",
  },
  {
    name: "Eeshwar Jagirdar",
    date: "11 August 2025",
    text: "We had a fantastic experience with Sarabi Realty Group, especially our agent Bahati. She was patient, attentive, and really took the time to understand.",
  },
  {
    name: "Patience M",
    date: "8 August 2025",
    text: "Great customer experience",
  },
];

// Container variant for staggering child animations
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Child variant for each element inside a testimonial
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans">
      {/* Heading animation */}
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        What Our Clients Say...
      </motion.h2>

      {/* Testimonials list */}
      <div className="space-y-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="p-5 rounded-2xl shadow-md bg-white"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex justify-between items-start mb-2"
              variants={childVariants}
            >
              <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
              <span className="text-gray-500 text-sm">{t.date}</span>
            </motion.div>

            <motion.div
              className="w-full h-px bg-gray-300 my-3"
              variants={childVariants}
            />

            <motion.p className="text-gray-700 mb-2" variants={childVariants}>
              {t.text}
            </motion.p>

            {/* Only first two testimonials have Read more */}
            {index !== 2 && (
              <motion.button
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Read more
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;