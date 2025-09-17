import { FaKaaba, FaHotel, FaUsers } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { GiPrayerBeads } from "react-icons/gi";

const categories = [
  { id: 1, name: "All Packages", icon: <GiPrayerBeads size={40} className="text-green-600" /> },
  { id: 2, name: "Hajj Packages", icon: <FaKaaba size={40} className="text-yellow-500" /> },
  { id: 3, name: "Umrah Packages", icon: <MdFlight size={40} className="text-green-700" /> },
  { id: 4, name: "Family Packages", icon: <FaUsers size={40} className="text-blue-500" /> },
  { id: 5, name: "Hotel + Flight Combo", icon: <FaHotel size={40} className="text-orange-500" /> },
];

export default function ChooseYourJourney() {
  return (
    <section className="py-12 px-6 md:px-16">
      <h2 className="text-2xl md:text-4xl font-extralight font-poppins text-gray-800 mb-8">
        Choose Your Journey
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition cursor-pointer"
          >
            <div className="mb-3">{cat.icon}</div>
            <p className="text-sm md:text-base font-medium font-poppins text-gray-700">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
