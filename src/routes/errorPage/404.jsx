import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="p-[40px] bg-white font-serif">
      <section className="page_404 w-full">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div
                  className="four_zero_four_bg"
                  style={{
                    backgroundImage:
                      "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
                    height: "400px",
                    backgroundPosition: "center",
                  }}
                >
                  <h1 className="text-center text-[80px]">404</h1>
                </div>

                <div className="contant_box_404 -mt-[50px]">
                  <h3 className="h1 text-5xl mb-5">Look like you're lost</h3>

                  <p className="text-xl">
                    The page you are looking for not avaible!
                  </p>

                  <Link
                    to={"/home"}
                    href=""
                    className="link_404"
                    style={{
                      color: "#fff!important",
                      padding: "10px 20px",
                      background: "#39ac31",
                      margin: "20px 0",
                      display: "inline-block",
                    }}
                  >
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404;

{
  /* <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
<div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
    <div class="relative">
        <div class="absolute">
            <div class="">
                <h1 class="my-2 text-gray-800 font-bold text-2xl">
                    Looks like you've found the
                    doorway to the great nothing
                </h1>
                <p class="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
            </div>
        </div>
        <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
        </div>
    </div>
</div>
<div>
    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
</div>
</div> */
}
