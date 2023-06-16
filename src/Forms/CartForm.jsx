import React, { useEffect, useState } from "react";
import { SlClose } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCartStore } from "../stores/cartStore";
import { useShopitemStore } from "../stores/shopitemStore";
import { useRequisitionStore } from "../stores/requisitionStore";

const schema = yup.object().shape({
  requiredQuantity: yup.object().shape({
    amount: yup.number().required(),
    unit: yup.string().required(),
  }),
});

const CartForm = (props) => {
  const { showModal, setShowModal, product } = props;
  // console.log(product);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const navigate = useNavigate();
  const params = useParams;
  const itemId = params.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    // resolver: yupResolver(),
  });

  const callAddToCartAPI = useCartStore((state) => state.addToCartAPI);
  // const product = useShopitemStore((state) => state.currentShopitem);
  console.log(product);
  const callGetShopitemAPI = useShopitemStore((state) => state.getShopitemAPI);
  const callAddRequisitionsAPI = useRequisitionStore(
    (state) => state.addRequisitionsAPI
  );

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const onSubmitHandler = async (data) => {
    data.requiredQuantity.amount = parseInt(data.requiredQuantity.amount);
    data.user = user._id;
    //----------------- for adding in cart
    data.shop = product.shop;
    data.shopName = product.shopName;
    data.itemName = product.itemName;
    data.shopId = product.shopId;

    console.log(data);
    if (product.availableQuantity.amount < data.requiredQuantity.amount) {
      alert("Not Sufficient Quantity!");
    } else {
      let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
      if (cartItems === null) {
        cartItems = [data];
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      } else {
        cartItems.push(data);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      }

      //callAddToCartAPI(data);
    }
    reset();
    navigate("/shopsForCustomer");
    setShowModal(false);
    //-------------------------
    //for direct requisition
    //delete data.itemName;
    // console.log(data);
    // callAddRequisitionsAPI(data);
  };

  useEffect(() => {
    // if (!itemId) return;
    // callGetShopitemAPI(itemId);
    if (!product) return;
    setValue("itemName", product.itemName);
    console.log(product.itemName);
    setValue("shopItem", product._id);
    // setValue("price", 50);
    // setValue("shop", product.shop);
    // setValue("shopName", product.shopName);
    //  setValue("requiredQuntity.unit", product.requiredQuntity.unit);
    //setValue("requiredQuntity.unit", product.availableQuantity["unit"]);
  }, [product.itemName]);

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
                    <p>Add Item To Cart</p>
                  </div>
                  <div className="ml-[240px] mt-6 mr-5 mb-4">
                    <SlClose
                      className="w-7 h-7 text-teal-500 cursor-pointer"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="mx-7 my-5">
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">Shop Item:</span>
                        <input
                          type="text"
                          id="itemName"
                          value={product._id}
                          className="w-[220px] py-2 px-3 mb-3 appearance-none shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("itemName")}
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">
                          Prefered Delivery Date:
                        </span>
                        <input
                          type="date"
                          placeholder="Prefered Delivery Date"
                          className="w-[220px] py-2 px-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          min={disablePastDate()}
                          {...register("preferedDeliveryDate")}
                        />

                        <p className="text-red-500">
                          {/* {errors.firstName?.message} */}
                        </p>
                      </div>
                    </div>
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">Amount:</span>
                        <input
                          type="number"
                          placeholder="Amount"
                          className="w-[220px] py-2 px-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("requiredQuantity.amount")}
                        />

                        <p className="text-red-500">
                          {/* {errors.firstName?.message} */}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500"> Unit:</span>
                        <input
                          type="text"
                          placeholder="Unit"
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("requiredQuantity.unit")}
                        />
                        <p className="text-red-500">
                          {/* {errors.lastName?.message} */}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex p-8">
                    <button
                      type="button"
                      className="ml-64 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                      onClick={() => {
                        setShowModal(false);
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

export default CartForm;
