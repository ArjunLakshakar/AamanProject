import { FaStar } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const operators = [
  {
    id: 1,
    name: "Bushra Haj Sercice",
    packages: "2000+ Packages",
    reviews: "4.96 (672 reviews)",
    logo: "Image/PopularOperators/Bushra.png",
  },
  {
    id: 2,
    name: "Talbiya Umrah Pvt. Ltd.",
    packages: "2000+ Packages",
    reviews: "4.96 (672 reviews)",
    logo: "Image/PopularOperators/Talbiya.png",
  },
  {
    id: 3,
    name: "Classic Tours & Travels",
    packages: "2000+ Packages",
    reviews: "4.96 (672 reviews)",
    logo: "Image/PopularOperators/Classic.png",
  },
  {
    id: 4,
    name: "Atlas Tours & Travels",
    packages: "2000+ Packages",
    reviews: "4.96 (672 reviews)",
    logo: "Image/PopularOperators/Atlas.png",
  },
  {
    id: 5,
    name: "Bakhla Tours & Travels",
    packages: "2000+ Packages",
    reviews: "4.96 (672 reviews)",
    logo: "Image/PopularOperators/Bakhla.png",
  },
  {
    id: 6,
    name: "Al Khalid Tours & Travels",
    packages: "2000+ Packages",
    reviews: "4.96 (672 reviews)",
    logo: "Image/PopularOperators/Al Khalid.png",
  },
  {
    id: 7,
    name: "Superb Umrah Tour",
    packages: "2000+ Packages",
    reviews: "4.96 (672 reviews)",
    logo: "Image/PopularOperators/Superb.png",
  },
  {
    id: 8,
    name: "Rahat Travels of India",
    packages: "2000+ Packages",
    reviews: "4.96 (672 reviews)",
    logo: "Image/PopularOperators/Rahat.png",
  },
];

export default function PopularOperators() {
  return (
    <section className="py-12 px-6 md:px-16">
      {/* Header */}
      <h2 className="text-2xl md:text-4xl font-extralight font-poppins text-gray-800 mb-1">
        Popular Operators
      </h2>
      <div className="w-16 h-[2px] bg-green-600 mb-4"></div>
      <p className="text-gray-500 mb-8 text-sm md:text-base">
        Favourite Operators Based on Customer Reviews
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {operators.map((op) => (
          <div
            key={op.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center relative"
          >
            {/* Logo */}
            <img
              src={op.logo}
              alt={op.name}
              className="h-16 object-contain mb-4"
            />

            {/* Name */}
            <h3 className="font-poppins font-semibold text-gray-800 text-sm md:text-base mb-1">
              {op.name}
            </h3>

            {/* Packages */}
            <p className="text-gray-500 text-sm mb-2">{op.packages}</p>

            {/* Reviews */}
            <div className="flex items-center text-yellow-500 text-sm">
              <FaStar className="mr-1" />
              <span className="text-gray-700">{op.reviews}</span>
            </div>

            {/* Arrow Button */}
            <button className="absolute bottom-3 right-3 p-2 bg-[#F2F6D4] rounded-full text-green-700 hover:bg-green-600 hover:text-white transition">
              <MdArrowForwardIos size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* View all */}
      <div className="mt-6 text-right">
        <a href="#" className="text-green-600 font-medium hover:underline">
          View all...
        </a>
      </div>
    </section>
  );
}
