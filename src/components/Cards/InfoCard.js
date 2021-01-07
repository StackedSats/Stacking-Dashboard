import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

function InfoCard({ title, value, children: icon }) {
  return (
    <Card colored className="bg-gray-500">
      <CardBody className="flex items-center">
        {icon}
        <div>
          <p className="font-medium text-white">{title}</p>
          <p className="text-2xl font-medium text-white opacity-75">{value}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
