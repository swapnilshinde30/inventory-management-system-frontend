const CategoryForm = () => {
  return (
    <div className=" " style={{ height: "600px" }}>
      <div className="flex">
        <div className="flex-none bg-cover  mt-20 ml-24 bg-white pb-4 ">
          <img
            src={process.env.PUBLIC_URL + "/images/formImages/addcategory.jpeg"}
            style={{
              height: "400px",
              width: "700px",
            }}
            className="hover:scale-110 transition-all duration-500"
          ></img>
        </div>
        <div
          className="flex-none w-96  bg-white mt-16 "
          style={{ height: "400px" }}
        >
          <div className="min-h-[398px] flex flex-col items-center justify-center border-none">
            <div className="flex mb-10 text-xl text-teal-600 font-semibold">
              Manage Category
            </div>
            <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5 border border-teal-500">
              <form>
                {/* <input type="hidden" name="remember" value="True" /> */}
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="grid gap-6">
                    <div className="col-span-12">
                      <label
                        for="category_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category Name
                      </label>
                      <input
                        type="text"
                        name="category_name"
                        id="category_name"
                        autocomplete="given-name"
                        className="mt-2 p-2 border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 block w-full shadow-sm sm:text-sm  rounded-md"
                      />

                      <button
                        type="submit"
                        className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                      >
                        Add Category
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
