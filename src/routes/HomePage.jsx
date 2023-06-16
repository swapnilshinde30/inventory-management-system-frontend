import { Link } from "react-router-dom";
import image from "../../src/images/images/homePage1.jpg";
function HomePage() {
  return (
    <section className="gradient-form bg-gradient-to-r from-emerald-400 to-teal-600 h-full">
      <div className="flex items-center justify-center">
        <div
          className="block mt-[14px] mb-[14px] shadow-md shadow-black"
          style={{
            backgroundImage: `url(${image})`,
            height: "620px",
            width: "980px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="flex flex-row-reverse space-x-4 space-x-reverse mr-9 mt-5">
            <div className="italic text-sm font-semibold text-cyan-700">
              <Link to="/login" className="nav-link" aria-current="page">
                LOGIN
              </Link>
            </div>
            <div className="italic text-sm">
              <a href="#!">ABOUT US</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
