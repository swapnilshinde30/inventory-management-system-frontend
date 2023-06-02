import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SlClose } from "react-icons/sl";

export default function Example() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:h-72 sm:my-5 sm:w-full sm:max-w-lg">
                <div className="flex border border-b-black">
                  <div className="font-semibold mt-6 ml-6 w-64">
                    <p>ADD CATEGORY</p>
                  </div>
                  <div className="ml-80 mt-6 mr-5 mb-4">
                    <SlClose className="w-7 h-7 text-neutral-500" />
                  </div>
                </div>
                <div className="mx-7 my-5">
                  <input
                    type="text"
                    placeholder="Category Name"
                    // class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                    className="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                  />
                </div>
                {/* <div class="w-full md:w-96 md:max-w-full mx-auto">
                  <div>
                    <form
                      method="POST"
                      // action="https://herotofu.com/start"
                      // enctype="multipart/form-data"
                    >
                      <label class="">
                        <input
                          required
                          name="photo"
                          type="file"
                          class=" w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </label>
                    </form>
                  </div>
                </div> */}
                <div className="flex ">
                  <button
                    type="button"
                    className="ml-72 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-3 rounded-full bg-teal-500 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                    onClick={() => setOpen(false)}
                  >
                    Add
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
