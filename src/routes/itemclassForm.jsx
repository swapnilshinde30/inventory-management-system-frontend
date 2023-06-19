const ItemclassForm = () => {
  const category = [
    { _id: 1, name: "fruits", imagePath: "fruits.jpg" },
    { _id: 2, name: "vegetables", imagePath: "vege.jpg" },
    { _id: 3, name: "bakery", imagePath: "cake.jpg" },
    { _id: 4, name: "eggs & meat", imagePath: "egg.jpg" },
    { _id: 5, name: "grains", imagePath: "grains.jpg" },
    { _id: 6, name: "beverage", imagePath: "beverage.jpg" },
    { _id: 7, name: "sweets", imagePath: "sweets.jpg" },
    { _id: 8, name: "medicine", imagePath: "medicine.jpg" },
  ];
  return (
    <div className=" " style={{ height: "600px" }}>
      <div className="flex">
        <div className="flex-none bg-cover mt-28 ml-24 bg-white pb-4 ">
          <img
            src={process.env.PUBLIC_URL + "/images/formImages/additemclass.jpg"}
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
              Manage Itemclass
            </div>
            <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5 border border-teal-500">
              <form>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="grid gap-6">
                    <div className="col-span-12">
                      <label
                        for="itemclass_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Itemclass Name
                      </label>
                      <input
                        type="text"
                        name="itemclass_name"
                        id="itemclass_name"
                        autocomplete="given-name"
                        className="text-teal-700 font-semibold mt-2 mb-2 p-2 border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 block w-full shadow-sm sm:text-sm  rounded-md"
                      />
                      <label
                        for="category_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category Name
                      </label>

                      <select className="mt-2 p-2  text-teal-700 font-semibold border border-teal-300 focus:  focus:ring-teal-500 focus:outline-none focus:border-teal-500 block w-full shadow-sm sm:text-sm  rounded-md">
                        {category.map((c) => (
                          <option
                            key={c._id}
                            value={c._id}
                            className="hover:bg-teal-400 "
                          >
                            {c.name}
                          </option>
                        ))}
                      </select>

                      <button
                        type="submit"
                        className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                      >
                        Add Itemclass
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

export default ItemclassForm;
