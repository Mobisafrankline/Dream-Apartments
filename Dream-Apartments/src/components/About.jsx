import { assets } from '../assets/assets';

const stats = [
    { value: '150+', label: 'Single Rooms' },
    { value: '250+', label: 'Bedsitters' },
    { value: '100+', label: 'One-Bedroom Units' },
    { value: '50+', label: 'Two-Bedroom Units' },
];

const About = () => (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-100" id="About">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
            About <span className="underline underline-offset-4 decoration-1 font-light">Dream Apartments</span>
        </h1>
        <p className="text-center max-w-3xl text-gray-700 mt-4 px-4 sm:px-0">
            Making apartment hunting simple and stress-free.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
            <img src={assets.brand_img} alt="Brand" className="w-full sm:w-1/2 max-w-lg my-8" />
            <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                    {stats.map(({ value, label }) => (
                        <div key={label}>
                            <p className="text-4xl font-bold text-blue-600">{value}</p>
                            <p>{label}</p>
                        </div>
                    ))}
                </div>
                <p className='my-8 max-w-lg'>
                    “At Dream Apartments, we don’t just help you find a house — we help you discover a true home, 
                    a space filled with comfort, trust, and possibility, 
                     your next chapter begins with ease and excitement.”
                </p>
                <a
                    href="#Projects"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 
                    transition text-center mt-6"
                >
                    Learn More
                </a>
            </div>
        </div>
    </div>
);

export default About;
