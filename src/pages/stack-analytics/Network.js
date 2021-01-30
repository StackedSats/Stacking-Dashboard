import React from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/Typography/PageTitle";

import NetworkCard from "../../components/Cards/NetworkCard";

import { MainNet, TestNet } from "../../icons";

import { userSession, getUserData, authenticate } from "../../scripts/auth";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Network</h1>
      <div>Dec 20, 2020 01:38</div>
    </>
  );
};

const Right = () => {
  return <></>;
};

function Blank() {
  const history = useHistory();
  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>
      <div className="p-4 space-y-6">
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <div onClick={() => authenticate(history)}>
            <NetworkCard title="Total clients">
              <TestNet className="mr-4" />
            </NetworkCard>
          </div>
          {/* <div>
            <NetworkCard title="Total clients">
              <MainNet className="mr-4" />
            </NetworkCard>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Blank;
