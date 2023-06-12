import { useState } from "react";

import React from "react";
interface OnDelete {
  isCloseModal: () => void;
}
const ModalCustom: React.FC<OnDelete> = (props) => {
  const { isCloseModal } = props;

  return (
    <div>
      <div className="fixed top-0 bottom-0 w-screen h-screen z-50 right-5">
        <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:w-5/6 sm:h-screen"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-5xl leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    View our Plan for you
                  </h3>
                  <div className="mt-2"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ModalCustom);
