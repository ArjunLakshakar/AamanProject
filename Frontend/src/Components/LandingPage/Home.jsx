function Home() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="Image/Kaaba.png"
        alt="Kaaba"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-yellow-500/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  justify-center h-full ">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl pl-20 text-yellow-50/80 font-bold max-w-6xl leading-snug text-white drop-shadow-lg">
          Bringing All Hajj & Umrah Packages to Your Fingertips.
        </h1>

        {/* Booking Form */}
        <div className="mt-10 w-2/3 flex flex-row justify-between rounded-r-3xl overflow-hidden shadow-lg bg-[#FFF6D5]">
          {/* Destination */}
          <div className="flex flex-col text-left p-4 border-b  border-gray-300">
            <label className="text-sm text-gray-700">Destination</label>
            <select className="bg-transparent focus:outline-none text-lg">
              <option>Mecca</option>
              <option>Medina</option>
            </select>
          </div>

          {/* Person */}
          <div className="flex flex-col text-left p-4  border-b  border-gray-300">
            <label className="text-sm text-gray-700">Person</label>
            <select className="bg-transparent focus:outline-none text-lg">
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>

          {/* Check-in */}
          <div className="flex flex-col text-left p-4 border-b  border-gray-300">
            <label className="text-sm text-gray-700">Check in</label>
            <input
              type="date"
              className="bg-transparent focus:outline-none text-lg"
              defaultValue="2025-09-17"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col text-left p-4 border-b md:border-b-0 md:border-r border-gray-300">
            <label className="text-sm text-gray-700">Price</label>
            <select className="bg-transparent focus:outline-none text-lg">
              <option>Low to high</option>
              <option>High to low</option>
            </select>
          </div>

          {/* Button */}
          <button className="bg-green-700 text-white px-8 py-6 text-lg font-semibold hover:bg-green-800 transition rounded-r-lg">
            BOOK NOW →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;