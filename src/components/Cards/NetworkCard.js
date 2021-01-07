import React from "react";
import { Card, CardBody } from "@windmill/react-ui";
import { VscArrowSmallRight } from "react-icons/vsc";

function NetworkCard({ title, children: icon }) {
  return (
    <Card className="text-white border border-gray-900 cursor-pointer hover:border-primary-500 hover:text-primary-500">
      <CardBody className="flex items-center">
        {icon}
        <p className="mr-4 text-lg font-medium text-white">{title}</p>
        <VscArrowSmallRight className="mt-1 wh-10"></VscArrowSmallRight>
      </CardBody>
    </Card>
  );
}

export default NetworkCard;
