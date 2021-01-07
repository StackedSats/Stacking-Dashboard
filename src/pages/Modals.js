import React, { useState } from "react";

import PageTitle from "../components/Typography/PageTitle";
import StackProcess from "../components/modals/StackProcess";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <PageTitle>Modals</PageTitle>

      <div className="my-6">
        <div>
          <Button onClick={openModal}>Generic modal</Button>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader>
            <h2 className="text-4xl">Modal Header</h2>
          </ModalHeader>
          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
            eligendi repudiandae voluptatem tempore!
          </ModalBody>
          <ModalFooter>
            {/* I don't like this approach. Consider passing a prop to ModalFooter
             * that if present, would duplicate the buttons in a way similar to this.
             * Or, maybe find some way to pass something like size="large md:regular"
             * to Button
             */}
            <div className="hidden sm:block">
              <Button layout="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button>Accept</Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button block size="large" layout="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button block size="large">
                Accept
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>

      <div className="my-6">
        <StackProcess></StackProcess>
      </div>
    </>
  );
}

export default Modals;
