import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useShopitemStore } from "../stores/shopitemStore";
import { useItemStore } from "../stores/itemStore";
import { useShopStore } from "../stores/shopStore";
import { SlClose } from "react-icons/sl";
import { useCategoryStore } from "../stores/categoryStore";
import { useItemClassStore } from "../stores/itemClasseStore";
import { useState } from "react";

const schema = yup.object().shape({
  shop: yup.string().required("Shop is required"),

  quantityAddition: yup.object().shape({
    amount: yup.number().required(),
    unit: yup.string().required(),
  }),
  availableQuantity: yup.object().shape({
    amount: yup.number().required(),
    unit: yup.string().required(),
  }),
});

const ShopItemsForm = (props) => {
  const { showModal, setShowModal } = props;
  const params = useParams();
  const shopitemId = params.id;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItemClass, setSelectedItemClass] = useState("");
  const callAddShopItemAPI = useShopitemStore((state) => state.addShopitemAPI);
  const callGetItemAPI = useItemStore((state) => state.getItemAPI);
  const callGetAllItemsAAPI = useItemStore((state) => state.getAllItemsAPI);
  const items = useItemStore((state) => state.items);
  const item = useItemStore((state) => state.currentItem);
  const callGetAllShopsAPI = useShopStore((state) => state.getAllShopsAPI);
  const shops = useShopStore((state) => state.shops);
  const callGetAllShopItemsAPI = useShopitemStore(
    (state) => state.getAllShopitemsAPI
  );
  const categories = useCategoryStore((state) => state.categories);
  const callgetAllCategoriesAPI = useCategoryStore(
    (state) => state.getAllCategoriesAPI
  );
  const category = useCategoryStore((state) => state.currentCategory);
  const callgetCategoryAPI = useCategoryStore((state) => state.getCategoryAPI);
  const callGetAllItemClassesAPI = useItemClassStore(
    (state) => state.getAllItemClassesAPI
  );
  const callGetItemClassAPI = useItemClassStore(
    (state) => state.getItemClassAPI
  );
  const itemClasses = useItemClassStore((state) => state.itemClasses);
  const itemClass = useItemClassStore((state) => state.currentItemclass);

  //Edit shopitem
  const callGetShopItemAPI = useShopitemStore((state) => state.getShopitemAPI);
  const shopitem = useShopitemStore((state) => state.currentShopitem);
  const callEditShopitemAPI = useShopitemStore(
    (state) => state.editShopitemAPI
  );
  const user = JSON.parse(sessionStorage.getItem("user"));
  const callGetShopitemsAPI = useShopitemStore(
    (state) => state.getAllShopitemsAPI
  );
  const navigate = useNavigate();

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
    // reset();
    delete data?.itemClass;
    delete data?.category;
    console.log(data);
    if (data._id) {
      data.quantityAddition.addedBy = user._id;
      callEditShopitemAPI(data);
      reset();
    } else {
      reset();
      callAddShopItemAPI(data);
    }

    navigate("/shopitems");
    setShowModal(false);
  };

  useEffect(() => {
    callGetAllShopsAPI();
    callGetAllItemsAAPI();
    callGetAllShopItemsAPI();
    callgetAllCategoriesAPI();
    callGetAllItemClassesAPI();
  }, []);

  useEffect(() => {
    console.log(shopitem);
    if (shopitem?._id) {
      callGetItemAPI(shopitem?.item);
      console.log(item);
      if (item?._id) {
        setSelectedItemClass(item?.itemClass);
        console.log(selectedItemClass);
        callGetItemClassAPI(item?.itemClass);

        console.log(itemClass);
      }
      if (itemClass?._id) {
        setSelectedCategory(itemClass?.category);
        callgetCategoryAPI(itemClass?.category);
        console.log(selectedCategory);
      }
    }
    setValue("itemClass", selectedItemClass);
    setValue("category", selectedCategory);
    setValue("item", shopitem?.item);
  }, [shopitem?.item, item?._id, itemClass?._id, category._id]);

  useEffect(() => {
    if (!shopitemId) return;
    console.log(shopitemId);
    callGetShopItemAPI(shopitemId);
    console.log(shopitem);
    if (!shopitem._id) return;
    console.log(shopitem);
    setValue("_id", shopitem._id);
    setValue("shop", shopitem.shop);
    setValue("item", shopitem.item);
    setValue("quantityAddition.amount", shopitem.quantityAddition["amount"]);
    setValue("quantityAddition.unit", shopitem.quantityAddition["unit"]);
    setValue("availableQuantity.amount", shopitem.availableQuantity["amount"]);
    setValue("availableQuantity.unit", shopitem.availableQuantity["unit"]);
  }, [shopitemId, shopitem.item]);

  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const key = String.fromCharCode(keyCode);
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(key)) {
      event.preventDefault();
    }
  };

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
                    <p>MANAGE SHOP ITEMS</p>
                  </div>
                  <div className="ml-[220px] mt-6 mb-4">
                    <SlClose
                      className="w-7 h-7 text-teal-500 cursor-pointer"
                      onClick={() => {
                        setShowModal(false);
                        reset();
                        navigate("/shopitems");
                      }}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="my-5 mx-7">
                    <select
                      id="shops"
                      className="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-lg appearance-none"
                      {...register("shop")}
                    >
                      {" "}
                      <option value="" hidden>
                        Select Shop
                      </option>
                      {shops.map((shop) => (
                        <option key={shop._id} value={shop._id}>
                          {shop.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-red-500 mb-3">{errors.shop?.message}</p>
                  </div>

                  <div className="my-2 mx-7">
                    <select
                      id="category"
                      {...register("category")}
                      className="w-full py-2 px-3 mb-2 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-lg appearance-none"
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {" "}
                      <option value="" hidden>
                        Select category
                      </option>
                      {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="my-2 mx-7">
                    <select
                      id="itemClass"
                      {...register("itemClass")}
                      className="w-full py-2 px-3 mb-2 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-lg appearance-none"
                      onChange={(e) => setSelectedItemClass(e.target.value)}
                    >
                      {" "}
                      <option value="" hidden>
                        Select Itemclass
                      </option>
                      {itemClasses
                        .filter(
                          (itemClass) => itemClass.category === selectedCategory
                        )
                        .map((itemClass) => (
                          <option key={itemClass._id} value={itemClass._id}>
                            {itemClass.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="my-2 mx-7">
                    <select
                      id="item"
                      className="w-full py-2 px-3 mb-2 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-lg appearance-none"
                      {...register("item")}
                    >
                      {" "}
                      <option value="" hidden>
                        Select Items
                      </option>
                      {/* {items.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))} */}
                      {items
                        .filter((item) => item.itemClass === selectedItemClass)
                        .map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex flex-row">
                    <div className="ml-[50px]">
                      <p className="text-xl font-semibold text-emerald-500">
                        Quantity Addition
                      </p>
                    </div>
                    <div className="ml-[70px]">
                      <p className="text-xl font-semibold text-emerald-500">
                        Available Quantity
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 my-2 mx-7 ">
                    <div className="form-outline mb-1">
                      <input
                        type="number"
                        placeholder="Quantity"
                        className="border rounded-lg w-[100px] h-9 pl-4  border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500"
                        {...register("quantityAddition.amount")}
                      />
                    </div>

                    <div className="form-outline mb-1 ">
                      <input
                        type="text"
                        placeholder="Kg / No / Ltr"
                        onKeyDown={handleKeyPress}
                        className="border rounded-lg w-[100px] h-9 pl-2 mr-7 border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500"
                        {...register("quantityAddition.unit")}
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <input
                        type="number"
                        placeholder="Quantity"
                        className="border rounded-lg w-[100px] h-9 pl-4  border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500"
                        {...register("availableQuantity.amount")}
                      />
                    </div>

                    <div className="form-outline mb-1 ">
                      <input
                        type="text"
                        placeholder="Kg / No / Ltr"
                        onKeyDown={handleKeyPress}
                        className="border rounded-lg w-[100px] h-9 pl-2  border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500"
                        {...register("availableQuantity.unit")}
                      />
                    </div>
                  </div>

                  <div className="flex p-5">
                    <button
                      type="button"
                      className="ml-[50px] rounded-full text-neutral-500 border border-neutral-500 px-10 pb-1 pt-1"
                      onClick={() => {
                        setShowModal(false);
                        navigate("/shopitems");
                        reset();
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-[120px] rounded-full bg-teal-500 px-11 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          //{" "}
        </div>
      ) : null}
    </>
  );
};

export default ShopItemsForm;
