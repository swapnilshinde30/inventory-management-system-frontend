import addCategoryImage from "../../src/images/formImages/addCategory.png";
const CategoryForm = () => {
  return (
    <div
      className=" bg-gradient-to-r from-emerald-400 to-teal-600"
      style={{ height: "600px" }}
    >
      <div className="flex">
        <div
          className="flex-none bg-cover  border border-black mt-24 ml-16 bg-white "
          style={{
            backgroundImage: `url( ${addCategoryImage})`,
            height: "400px",
            width: "700px",
          }}
        ></div>
        <div
          className="flex-none w-96 border border-black mt-24"
          style={{ height: "400px" }}
        >
          <div className="min-h-[398px] flex items-center justify-center bg-gray-50">
            <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">
              <form class="space-y-4" action="#" method="POST">
                <input type="hidden" name="remember" value="True" />
                <div class="rounded-md shadow-sm -space-y-px">
                  <div class="grid gap-6">
                    <div class="col-span-12">
                      <label
                        for="category_name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Category Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />

                      <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
