import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import { Badge } from "@windmill/react-ui";

function Buttons() {
  return (
    <>
      <PageTitle>Badges</PageTitle>

      <SectionTitle>Sizes</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Badge>primary</Badge>
        <Badge type="neutral">neutral</Badge>
        <Badge type="success">success</Badge>
        <Badge type="danger">danger</Badge>
        <Badge type="warning">warning</Badge>
      </div>
    </>
  );
}

export default Buttons;
