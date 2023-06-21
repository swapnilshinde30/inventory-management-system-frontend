import React, { useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCategoryStore } from "../stores/categoryStore";

const schema = yup.object().shape({
  name: yup.string().required("please enter Category"),
});

const CategoryForm = (props) => {
  const { showModal, setShowModal } = props;
  const params = useParams();
  const categoryId = params.id;
  const navigate = useNavigate();
  const callAddCategoryAPI = useCategoryStore((state) => state.addCategoryAPI);
  const category = useCategoryStore((state) => state.currentCategory);
  const callGetCategoryAPI = useCategoryStore((state) => state.getCategoryAPI);
  const callPatchCategoryAPI = useCategoryStore(
    (state) => state.patchCategoryAPI
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    console.log(data);
    if (data._id) {
      callPatchCategoryAPI(data);
    } else {
      callAddCategoryAPI(data);
    }
    navigate("/categories");
    setShowModal(false);
  };

  const closeAndReset = () => {
    setShowModal(false);
    navigate("/categories");
    reset();
  };
  useEffect(() => {
    console.log(categoryId);
    if (!categoryId) return;
    callGetCategoryAPI(categoryId);
    console.log(category);
    if (category === {}) return;
    setValue("_id", category._id);
    setValue("name", category.name);
  }, [categoryId, category.name]);

  return (
    <>
      {showModal ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex border border-b-black">
                  <div className="font-semibold text-xl text-teal-500 mt-6 ml-6 w-64">
                    <p>MANAGE CATEGORY</p>
                  </div>
                  <div className="ml-[240px] mt-6 mr-5 mb-4">
                    <SlClose
                      className="w-7 h-7 text-teal-500 cursor-pointer"
                      onClick={() => {
                        closeAndReset();
                      }}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="mx-7 my-5">
                    <span className="text-gray-500">Category Name:</span>
                    <input
                      type="text"
                      placeholder="Category Name"
                      className="w-full mb-2 py-2 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                      {...register("name")}
                    />

                    <p className="text-red-500">{errors.name?.message}</p>
                  </div>

                  <div className="flex p-8">
                    <button
                      type="button"
                      className="ml-64 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                      onClick={() => {
                        closeAndReset();
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 rounded-full bg-teal-500 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CategoryForm;
