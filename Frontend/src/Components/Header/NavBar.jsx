import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="w-full flex justify-between items-center px-10 py-4 absolute top-0 left-0 z-50">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    O
                </div>
                <span className="font-bold text-lg text-white">Logo</span>
            </div>

            <div className="flex items-center gap-20">
                {/* Menu */}
                <ul className="hidden md:flex text-3xl gap-10 text-green-800 font-semibold tracking-wide">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT US</a></li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <Link to="/signup">
                        <button className="border border-green-600 text-green-600 px-5 py-1 rounded-full hover:bg-green-600 hover:text-white transition">
                            Sign Up
                        </button></Link>

                    {/* Avatar placeholder */}
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-green-600"
                    />
                    <FaBars className="text-green-700 text-2xl md:hidden" />
                </div>
            </div>
        </nav>
    );
}
export default NavBar;