import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

function InfoCard({ title, value, children: icon }) {
  return (
    <Card>
      <CardBody className="flex items-center">
        {icon}
        <div>
          <p className="font-medium text-gray-600 dark:text-white">{title}</p>
          <p className="text-2xl font-medium text-gray-700 opacity-75 dark:text-white">
            {value}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
