import { FaStar, FaHeart, FaRegClock } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const offers = [
  {
    id: 1,
    title: "AL Jamshed Tours & Travels | Hajj Umrah Tour",
    duration: "15 days 16 nights",
    price: "₹88K",
    reviews: "4.96 (672 reviews)",
    image: "/Image/Recommended/RC1.png",
  },
  {
    id: 2,
    title: "Al Hijazi Tours & Travels | Pune",
    duration: "15 days 16 nights",
    price: "₹88K",
    reviews: "4.96 (672 reviews)",
    image: "/Image/Recommended/RC2.png",
  },
  {
    id: 3,
    title: "Al Khalid Tours & Travels : Hajj & Umrah Packages in Mumbai",
    duration: "15 days 16 nights",
    price: "₹88K",
    reviews: "4.96 (672 reviews)",
    image: "/Image/Recommended/RC3.png",
  },
];

export default function SpecialOffer() {
  return (
    <section className="py-12 px-6 md:px-16">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        {/* Arrows */}
        <div className="flex gap-3">
          <button className="p-2 rounded-full bg-[#EAF4E4] text-green-700 hover:bg-green-600 hover:text-white transition">
            <MdArrowBackIos size={18} />
          </button>
          <button className="p-2 rounded-full bg-[#F2F6D4] text-green-700 hover:bg-green-600 hover:text-white transition">
            <MdArrowForwardIos size={18} />
          </button>
        </div>

        {/* Title */}
        <div className="text-right">
          <h2 className="text-2xl md:text-4xl font-extralight font-poppins text-gray-800">
            Special Offer
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Don’t Miss Our Limited Pilgrimage Deals!
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden relative group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
              />

              {/* Rating */}
              <div className="absolute bottom-3 left-3 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow flex items-center">
                <FaStar className="text-yellow-500 mr-1" /> {offer.reviews}
              </div>

              {/* Heart */}
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-red-100">
                <FaHeart className="text-gray-500 hover:text-red-500" />
              </button>
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="font-poppins font-semibold text-gray-800 text-sm md:text-base mb-2">
                {offer.title}
              </h3>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FaRegClock className="mr-2" /> {offer.duration}
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-800">
                  {offer.price}{" "}
                  <span className="text-gray-500 text-sm">/ person</span>
                </p>
                <button className="bg-green-700 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-green-800 transition">
                  Book Now
                </button>
              </div>
            </div>
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
