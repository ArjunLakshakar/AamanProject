import { FaSearch, FaRegClipboard, FaBalanceScale } from "react-icons/fa";

export default function HowItWork() {
  return (
    <section className="bg-green-700 rounded-2xl py-12 px-6 md:px-16 text-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-2">
        How It Work
      </h2>
      <div className="w-20 h-[2px] bg-white mb-4"></div>
      <p className="text-gray-200 mb-8 text-sm md:text-base">
        Making Your Sacred Journey Easier, Step by Step.
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/Image/HowItWork/H1.png"
            alt="Hajj step 1"
            className="rounded-xl w-full h-48 object-cover"
          />
          <img
            src="/Image/HowItWork/H2.png"
            alt="Hajj step 2"
            className="rounded-xl w-full h-48 object-cover"
          />
          <img
            src="/Image/HowItWork/H3.png"
            alt="Hajj step 3"
            className="rounded-xl col-span-2 w-full h-56 object-cover"
          />
        </div>

        {/* Right Steps */}
        <div className="flex flex-col gap-6">
          {/* Step 1 */}
          <div className="bg-[#F2F6D4] text-gray-800 p-5 rounded-xl shadow-md flex items-start gap-4">
            <FaSearch className="text-green-700 text-xl mt-1" />
            <div>
              <h3 className="font-semibold font-poppins text-lg mb-1">
                Search the Package
              </h3>
              <p className="text-sm text-gray-600">
                Start by exploring a wide variety of Hajj and Umrah travel
                packages from verified tour operators.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F2F6D4] text-gray-800 p-5 rounded-xl shadow-md flex items-start gap-4">
            <FaRegClipboard className="text-green-700 text-xl mt-1" />
            <div>
              <h3 className="font-semibold font-poppins text-lg mb-1">
                Select the Packages
              </h3>
              <p className="text-sm text-gray-600">
                Choose the packages that interest you the most. View detailed
                information, including pricing, services, hotel details, and
                reviews from other pilgrims.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F2F6D4] text-gray-800 p-5 rounded-xl shadow-md flex items-start gap-4">
            <FaBalanceScale className="text-green-700 text-xl mt-1" />
            <div>
              <h3 className="font-semibold font-poppins text-lg mb-1">
                Compare The Packages
              </h3>
              <p className="text-sm text-gray-600">
                Select any of the packages and compare them side-by-side to find
                the most convenient and cost-effective option for your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
