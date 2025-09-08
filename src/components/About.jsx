import { assets } from "../assets/assets";

const stats = [
  { value: "150+", label: "Single Rooms" },
  { value: "250+", label: "Bedsitters" },
  { value: "100+", label: "One-Bedroom Units" },
  { value: "50+", label: "Two-Bedroom Units" },
];

const About = () => (
  <div className="flex flex-col items-center justify-center py-20 bg-gray-100 min-h-screen">
    <h1 className="text-2xl sm:text-4xl font-bold mb-2">  </h1>
    <h1 className="text-2xl sm:text-4xl font-bold mb-2">Dream Apartments</h1>

    <p className="text-center max-w-3xl text-gray-700 mt-4 px-4 sm:px-0">
      Making apartment hunting simple and stress-free.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Brand Image */}
      <img
        src={assets.brand_img}
        alt="Brand"
        className="w-full sm:w-1/2 max-w-lg my-8"
      />

      {/* Stats + Info */}
      <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold text-blue-600">{value}</p>
              <p>{label}</p>
            </div>
          ))}
        </div>

        <p className="my-8 max-w-lg">
          “At Dream Apartments, we don’t just help you find a house — we help
          you discover a true home, a space filled with comfort, trust, and
          possibility. Your next chapter begins with ease and excitement.”
        </p>

        {/* Vision & Mission */}
        <div className="space-y-6 max-w-lg">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">Our Vision</h2>
            <p className="text-gray-700 mt-2">
              To become the most trusted partner in real estate by connecting
              tenants and landlords with seamless, innovative, and affordable
              housing solutions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600">Our Mission</h2>
            <p className="text-gray-700 mt-2">
              To simplify apartment hunting and property management through
              technology-driven solutions that provide comfort, transparency,
              and value for both tenants and landlords.
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <a
          href="/#Projects"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 
          transition text-center mt-6"
        >
          Back to Home
        </a>
      </div>
    </div>
  </div>
);

export default About;
