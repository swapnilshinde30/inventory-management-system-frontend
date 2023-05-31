
import image from "../../src/images/images/loginPage1.jpg";
import { AiOutlineUser } from 'react-icons/ai'
import {FiLock} from 'react-icons/fi'
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <section className="gradient-form bg-gradient-to-r from-emerald-400 to-teal-600 h-full">
      <div className="flex items-center justify-center ">
        <div
          className="block mt-10 mb-10 shadow-md shadow-black" 
          style={{
            backgroundImage: `url(${image})`,
            height: "620px",
            width: "1020px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="flex flex-row-reverse space-x-4 space-x-reverse mr-9 mt-5">
            <div className="italic text-sm font-semibold text-cyan-700"><a href="#!">LOGIN</a></div>
            <div className="italic text-sm"><a href="#!">ABOUT US</a></div>
          </div>
          <div className="relative">
            <div class="absolute top-80 left-96">
              <div className="form ml-5 w-56 h-56 bg-white">
                <form>
                  {/* <!-- Email input --> */}
                  <div class="form-outline mb-3 ">
                    <input
                      type="email"
                      id="form2Example1"
                      placeholder="username"
                      className="rounded-full border  w-52 h-9 mt-2 pl-8 hover:border-teal-400 focus:outline-none "
                    />
                    <AiOutlineUser className="-mt-6 ml-3"/>
                  </div>

                  {/* <!-- Password input --> */}
                  <div class="form-outline mb-3">
                    <input
                      type="password"
                      id="form2Example2"
                      placeholder="password"
                      class="border rounded-full w-52 h-9 pl-8  hover:border-teal-400 focus:outline-none"
                    />
                    <FiLock className="-mt-6 ml-3"/>
                  </div>
                  {/* <!-- Submit button --> */}
                  <Link to="/" className="nav-link" aria-current="page">
                  <button
                    type="button"
                    class="btn text-white bg-teal-500 rounded-lg mb-2 w-52 h-9">
                    Login
                  </button>
                  </Link>
                  <div class="ml-14 mb-8 text-sm text-blue-600">
                    <a href="#!">Create Account</a>
                  </div>
                  <div class="ml-14 text-xs  text-blue-600">
                    <a href="#!">Forget Password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
