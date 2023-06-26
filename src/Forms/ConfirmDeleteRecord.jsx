import React from "react";
import { SlClose } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";
import { useUserStore } from "../stores/userStore";

const ConfirmDeleteRecord = (props) => {
  const { showModalCDR, setShowModalCDR, id, callDeleteAPI } = props;

  return (
    <>
      {showModalCDR ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <main
                id="content"
                role="main"
                className="w-full max-w-md mx-auto p-6"
              >
                <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col">
                    <div className="ml-[175px] p-2">
                      <RiDeleteBinLine className="w-12 h-12" />
                    </div>
                    <div className="text-xl p-2">
                      <p>Are you sure want to delete this Record?</p>
                    </div>

                    <div className="flex justify-center space-x-5 p-5">
                      <button
                        type="button"
                        className="py-2 px-5 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={() => {
                          setShowModalCDR(false);
                        }}
                      >
                        No,Cancel
                      </button>
                      <button
                        type="submit"
                        className="py-2 px-5 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                        onClick={() => (
                          callDeleteAPI(id), setShowModalCDR(false)
                        )}
                      >
                        Yes,I am Sure
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      ) : null}
      ;
    </>
  );
};
export default ConfirmDeleteRecord;
