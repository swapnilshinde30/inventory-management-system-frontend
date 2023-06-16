import React, { useEffect, useState } from "react";
import { SlClose } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useItemClassStore } from "../stores/itemClasseStore";
import { useItemStore } from "../stores/itemStore";
import { useParams } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Please enter item"),
  itemClass: yup.string().required("Please select itemclass"),
  description: yup.string().required("Please enter description"),
});

const ItemsForm = (props) => {
  const { showModal, setShowModal } = props;
  const navigate = useNavigate();
  const params = useParams();
  const itemId = params.id;
  const item = useItemStore((state) => state.currentItem);
  const callGetItemAPI = useItemStore((state) => state.getItemAPI);
  const callEditItemAPI = useItemStore((state) => state.editItemAPI);
  const callAddItemAPI = useItemStore((state) => state.addItemAPI);

  const callGetAllItemClassesAPI = useItemClassStore(
    (state) => state.getAllItemClassesAPI
  );
  const itemClasses = useItemClassStore((state) => state.itemClasses);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    if (data._id) {
      callEditItemAPI(data);
    } else {
      callAddItemAPI(data);
    }
    navigate("/items");
    setShowModal(false);
  };

  const closeAndReset = () => {
    setShowModal(false);
    navigate("/items");
    reset();
  };
  useEffect(() => {
    if (!itemId) return;
    callGetAllItemClassesAPI();
    callGetItemAPI(itemId);
    if (item === undefined) return;
    setValue("_id", item._id);
    setValue("name", item.name);
    setValue("itemClass", item.itemClass);
    setValue("description", item.description);
  }, [itemId, item.name]);

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
                  <div className="font-semibold text-xl text-teal-500 mt-6 ml-6">
                    <p>MANAGE ITEMS</p>
                  </div>
                  <div className="ml-[280px] mt-6 mb-4">
                    <SlClose
                      className="w-7 h-7 text-teal-500 cursor-pointer"
                      onClick={() => {
                        closeAndReset();
                      }}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="flex mx-7 space-x-2 my-5">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Name:</span>
                      <input
                        type="text"
                        placeholder="Name"
                        // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                        className="w-[220px] py-2 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        {...register("name")}
                      />
                      <p className="text-red-500">{errors.name?.message}</p>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">Item Class:</span>
                      <select
                        id="itemClasses"
                        className="w-[220px] py-2 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md appearance-none"
                        {...register("itemClass")}
                      >
                        <option value={""} hidden>
                          Item Class
                        </option>
                        {itemClasses.map((itemClass) => (
                          <option key={itemClass._id} value={itemClass._id}>
                            {itemClass.name}
                          </option>
                        ))}
                      </select>
                      <p className="text-red-500">
                        {errors.itemClass?.message}
                      </p>
                    </div>
                  </div>
                  <div className="mx-5 space-x-2 my-2">
                    {" "}
                    <span className="ml-2 text-gray-500">Description:</span>
                    <input
                      type="text"
                      placeholder="Description"
                      // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                      className="w-[450px] py-2 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                      {...register("description")}
                    />
                    <p className="text-red-500">
                      {errors.description?.message}
                    </p>
                  </div>
                  {/* <div className="w-full md:w-[450px] md:max-w-full mx-auto">
                    <div>
                      <form
                        method="POST"
                        // action="https://herotofu.com/start"
                        // enctype="multipart/form-data"
                      >
                        <label className="">
                          <input
                            required
                            name="photo"
                            type="file"
                            className=" w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                        </label>
                      </form>
                    </div>
                  </div> */}
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
export default ItemsForm;
