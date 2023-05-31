import { Link } from "react-router-dom";
import image from "../../src/images/images/homePage.jpg";
function HomePage() {
  return (
    <section className="gradient-form bg-gradient-to-r from-emerald-400 to-teal-600">
      <div className="flex items-center justify-center">
        <div
          className="block mt-10 mb-10 shadow-md shadow-black" 
          style={{
            backgroundImage: `url(${image})`,
            height: "548px",
            width: "800px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="flex flex-row-reverse space-x-4 space-x-reverse mr-9 mt-5">
            <div className="italic text-sm font-semibold text-cyan-700"><Link to="/login" className="nav-link" aria-current="page">LOGIN</Link></div>
            <div className="italic text-sm"><a href="#!">ABOUT US</a></div>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default HomePage;
