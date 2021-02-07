import React, { useState } from "react";

import PageTitle from "../components/Typography/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { MainNet } from "../icons";
import { FiTrash2, FiCopy } from "react-icons/fi";
import { VscArrowSmallRight } from "react-icons/vsc";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Label,
} from "@windmill/react-ui";

function Modals({
  openAddressModal,
  closeAddressModal,
  openManualAddressModal,
  closeManualAddressModal,
  isAddressModalOpen,
  isManualAddressModalOpen,
  addBTCAddress,
  addAddress,
  stxAddress,
  setStxAddress,
}) {
  const state = useSelector((state) => state.user);
  return (
    <>
      <div className="my-6 space-y-6">
        <div>
          <Button onClick={openAddressModal}>Address Modal</Button>
        </div>
        <div>
          <Button onClick={openManualAddressModal}>Manual Address Modal</Button>
        </div>

        <Modal isOpen={isAddressModalOpen} onClose={closeAddressModal}>
          <ModalHeader className="mb-10 text-center">
            <h2 className="mb-2 text-2xl">Add your Address</h2>
            <p>Add your BTC address to start stacking your assets</p>
          </ModalHeader>
          <ModalBody>
            <div className="my-4">
              <Label>Enter BTC address</Label>
              <div className="relative flex mt-2">
                <Input
                  className="border-0 bg-gray-50"
                  placeholder="Enter your address here"
                  onChange={(e) => {
                    addBTCAddress(e.target.value);
                  }}
                />
                <button
                  className="px-6 ml-2 btn btn-primary"
                  onClick={addAddress}
                >
                  Add
                </button>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={isManualAddressModalOpen}
          onClose={closeManualAddressModal}
        >
          <ModalBody>
            <div className="my-4">
              <Label className="text-xl">Manually add address</Label>
              <div className="relative flex mt-2">
                <Input
                  className="border-0 bg-gray-50"
                  placeholder="Enter your address here"
                  onChange={(e) => {
                    setStxAddress(e.target.value);
                  }}
                />
                <button
                  className="px-6 ml-2 btn btn-primary"
                  onClick={addAddress}
                >
                  Add
                </button>
              </div>
              <h2 className="mt-8 mb-2 text-2xl">Saved Addresses</h2>
              <p className="text-base text-gray-400">
                These addreses will be monitored on the dashboard. You can
                remove them at anytime.
              </p>
              <ul className="mt-6 mb-12">
                {state.stxAddress.map((value, index) => {
                  return (
                    <li
                      className="flex items-center justify-between py-4 border-b border-gray-100"
                      key={index}
                    >
                      <div className="flex items-center justify-between text-lg">
                        <MainNet width="32" />
                        <span className="ml-4">{value}</span>
                      </div>
                      <div className="flex items-center justify-between space-x-2 text-primary-500">
                        <button>
                          <FiCopy size={20} />
                        </button>
                        <button>
                          <FiTrash2 size={20} />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <button className="text-xl font-medium text-success-500 btn-icon text-md">
                Go to Dashboard <VscArrowSmallRight />
              </button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default Modals;
