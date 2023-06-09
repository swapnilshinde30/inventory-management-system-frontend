import { Link } from "react-router-dom";

const Error403 = () => {
    return (
      <div className="p-[40px] bg-white font-serif">
        <section class="page_404 w-full">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                  <div
                    class="four_zero_four_bg"
                    style={{
                      backgroundImage:
                        "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
                      height: "400px",
                      backgroundPosition: "center",
                    }}
                  >
                    <h1 class="text-center text-[80px]">403</h1>
                  </div>
  
                  <div class="contant_box_404 -mt-[50px]">
                    <h3 class="h1 text-5xl mb-5">Your request is Forbiden</h3>
  
                    <p className="text-xl">The page you are looking for not avaible!</p>
  
                    <Link
                    to={"/home"}
                      href=""
                      class="link_403"
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
  
  export default Error403;