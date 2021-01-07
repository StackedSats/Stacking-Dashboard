import React, { useState } from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Table,
  TableContainer,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  Label,
  Select,
  Input,
} from "@windmill/react-ui";

import { MainNet, SSLogoSM } from "../../icons";

import StepWizard from "react-step-wizard";

import { FiCopy } from "react-icons/fi";

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div>
        <Button onClick={openModal}>Stack Assets Modal</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <StepWizard>
          <Process1 />
          <Process2 />
          <Process3 />
        </StepWizard>
        {/* <ModalFooter>
          <div>
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </ModalFooter> */}
      </Modal>
    </>
  );
}

const Next = ({ nextStep, totalSteps, step }) => (
  <div>
    {step < totalSteps ? (
      <button className="btn btn-primary" onClick={nextStep}>
        Next
      </button>
    ) : null}
  </div>
);

const TestNetButton = ({ nextStep, totalSteps, step }) => (
  <div>
    {step < totalSteps ? (
      <button className="btn btn-primary" onClick={nextStep}>
        Stack
      </button>
    ) : null}
  </div>
);

const Back = ({ previousStep, step }) => (
  <>
    {step > 1 && (
      <button className="btn btn-default" onClick={previousStep}>
        Go Back
      </button>
    )}
  </>
);

const Process1 = (props) => {
  return (
    <div>
      <ModalHeader className="text-center">
        <h2 className="text-4xl">Stack Your Assets</h2>
        <p className="mb-12 text-gray-500">
          Choose a network to start stacking your assets
        </p>
      </ModalHeader>
      <ModalBody>
        <TableContainer className="mb-8 bg-white">
          <Table>
            <TableHeader className="border-b dark:border-gray-100">
              <tr>
                <TableCell className="bg-gray-50">Network</TableCell>
                <TableCell className="bg-gray-50">APY</TableCell>
                <TableCell className="bg-gray-50">Lock Up</TableCell>
                <TableCell className="bg-gray-50"></TableCell>
              </tr>
            </TableHeader>
            <TableBody className="text-lg dark:divide-gray-100">
              <TableRow className="bg-white dark:border-white">
                <TableCell>
                  <div className="flex items-center">
                    <MainNet /> <div className="ml-4">Stacks TestNet</div>
                  </div>
                </TableCell>
                <TableCell>10%</TableCell>
                <TableCell>1 Day</TableCell>
                <TableCell>
                  <TestNetButton step={1} {...props} />
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-white">
                <TableCell>
                  <div className="flex items-center">
                    <MainNet /> <div className="ml-4">Stacks Mainnet</div>
                  </div>
                </TableCell>
                <TableCell>8%</TableCell>
                <TableCell>14 Day</TableCell>
                <TableCell>
                  <TestNetButton step={1} {...props} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ModalBody>
    </div>
  );
};

const Process2 = (props) => {
  return (
    <div>
      <ModalHeader>
        <div className="flex items-baseline justify-between pb-3 mb-3">
          <div className="flex items-center">
            <MainNet />
            <div className="ml-3">
              <h2 className="text-2xl">Stack Mainnet</h2>
              <span className="text-sm text-gray-300">
                APR <b className="text-secondary-500">8%</b>
              </span>
            </div>
          </div>
          <div className="text-xs text-gray-300">9.5% validator fee</div>
        </div>
        <hr className="block my-6 border-gray-100" />
      </ModalHeader>
      <ModalBody>
        <form action="" className="space-y-4">
          <Label>
            <span>Asset</span>

            <div className="relative flex">
              <Select className="pl-12 mt-1">
                <option>StackStats STX</option>
              </Select>
              <span className="absolute left-0 mt-4 ml-3 rounded-none">
                <SSLogoSM className="wh-6" />
              </span>
            </div>
          </Label>
          <Label>
            <span>Address</span>
            <div className="relative flex">
              <Input className="mt-1" placeholder="Enter your address here" />
              <span className="absolute right-0 mt-4 mr-3">
                <FiCopy className="w-4 h-4 text-gray-200 " />
              </span>
            </div>
          </Label>
          <Label>
            <span>Amount</span>
            <div className="relative flex">
              <Input className="mt-1" placeholder="Enter amount" />
              <span className="absolute right-0 mt-1 rounded-none">
                <Select className="bg-gray-50">
                  <option>STX</option>
                </Select>
              </span>
            </div>
          </Label>
        </form>
      </ModalBody>
      <div className="flex justify-between mb-6 space-x-2">
        <Back step={2} {...props} />
        <Next step={2} {...props} />
      </div>
    </div>
  );
};

const Process3 = (props) => {
  return (
    <div>
      <ModalHeader>
        <h2 className="mb-12 text-2xl font-medium text-center">
          Confirm before you proceed
        </h2>
      </ModalHeader>
      <ModalBody>
        <div className="flex justify-between text-base">
          <div className="text-gray-300">Asset</div>
          <div className="flex justify-center">
            <SSLogoSM className="mr-2 wh-6" />
            <span>StackedSats</span>
          </div>
        </div>
        <hr className="block my-4 border-gray-100" />
        <div className="flex justify-between text-base">
          <div className="text-gray-300">Address</div>
          <span>STX56r5f6rg52d6s6g2h1hj8h6g31d5d6fg14hd6d2</span>
        </div>
        <hr className="block my-4 border-gray-100" />
        <div className="flex justify-between text-base">
          <div className="text-gray-300">Amount of Stake</div>
          <span>80000 STX</span>
        </div>
        <div className="flex justify-center my-10">
          <button className="btn btn-primary btn-md">Confirm & Stack</button>
        </div>
      </ModalBody>
      <div className="flex justify-between mb-6">
        <Back step={3} {...props} />
        <Next step={3} {...props} />
      </div>
    </div>
  );
};

export default Modals;
