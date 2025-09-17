import { FaStar, FaHeart } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const tours = [
  {
    id: 1,
    title: "Al Jamshed Tours & Travels | Hajj Umrah Tour",
    reviews: "4.96 (672 reviews)",
    image: "/Image/Recommended/RC1.png",
  },
  {
    id: 2,
    title: "Al Hijazi Tours & Travels | Pune",
    reviews: "4.96 (672 reviews)",
    image: "/Image/Recommended/RC2.png",
  },
  {
    id: 3,
    title: "Al Khalid Tours & Travels | Hajj & Umrah Packages in Mumbai",
    reviews: "4.96 (672 reviews)",
    image: "/Image/Recommended/RC3.png",
  },
];

export default function RecommendedForYou() {
  return (
    <section className="py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extralight font-poppins text-gray-800">
            Recommended For You
          </h2>
          <p className="text-gray-500 mt-2">
            Discover the most recommended tour providers, trusted by thousands for their service, guidance, and care
            throughout your pilgrimage.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button className="p-2 rounded-full bg-[#EAF4E4] text-green-700 hover:bg-green-600 hover:text-white transition">
            <MdArrowBackIos size={18} />
          </button>
          <button className="p-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition">
            <MdArrowForwardIos size={18} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="relative h-96 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
          >
            {/* Image */}
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}

            {/* Top info */}
            <div className="absolute top-3 left-3 flex items-center bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded-full shadow">
              <FaStar className="text-yellow-500 mr-1" /> {tour.reviews}
            </div>
            <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-red-100">
              <FaHeart className="text-gray-500 hover:text-red-500" />
            </button>

            {/* Title */}
            <div className="absolute bottom-3 left-3 right-3 text-white font-poppins font-medium text-sm md:text-base">
              {tour.title}
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
