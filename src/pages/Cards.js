import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";

import InfoCard from "../components/Cards/InfoCard";
import NetworkCard from "../components/Cards/NetworkCard";
import { Card, CardBody } from "@windmill/react-ui";
import {
  CartIcon,
  ChatIcon,
  MoneyIcon,
  PeopleIcon,
  MainNet,
  TestNet,
} from "../icons";
import RoundIcon from "../components/RoundIcon";
import { TabGroup } from "@statikly/funk";
import {
  Select,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Badge,
} from "@windmill/react-ui";

function Cards() {
  return (
    <>
      <PageTitle>Cards</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <NetworkCard title="Total clients">
          <TestNet className="mr-4" />
        </NetworkCard>

        <NetworkCard title="Total clients">
          <MainNet className="mr-4" />
        </NetworkCard>
      </div>

      <SectionTitle>Tabbed Cards</SectionTitle>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center">
                <TabGroup.TabList>
                  <TabGroup.Tab
                    index={0}
                    className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
                    activeClassName="text-primary-500 text-white"
                    inactiveClassName="text-gray-400 text-gray-300"
                  >
                    Tab 1
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={1}
                    className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
                    activeClassName="text-primary-500 text-white"
                    inactiveClassName="text-gray-400 text-gray-300"
                  >
                    Tab 2
                  </TabGroup.Tab>
                </TabGroup.TabList>
                <div className="ml-10 text-primary-500">Export</div>
              </div>
              <div>
                <Select className="py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1">
                  <option>Sort By</option>
                </Select>
              </div>
            </div>
            <TabGroup.TabPanel
              index={0}
              className="py-10 text-gray-200 transition-all transform"
              activeClassName="opacity-100 duration-500 translate-x-0"
              inactiveClassName="absolute opacity-0 -translate-x-2"
            >
              <TableContainer className="mb-8">
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Date</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <span className="text-sm">$ 123</span>
                      </TableCell>
                      <TableCell>
                        <Badge type="success">Status</Badge>
                      </TableCell>
                      <TableCell>12345</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </TabGroup.TabPanel>
            <TabGroup.TabPanel
              index={1}
              className="flex flex-col py-10 text-gray-200 transition-all transform"
              activeClassName="opacity-100 duration-500 translate-x-0"
              inactiveClassName="absolute opacity-0 -translate-x-2"
            >
              Tab 2 Content
            </TabGroup.TabPanel>
          </TabGroup>
        </CardBody>
      </Card>

      <SectionTitle>Big section cards</SectionTitle>

      <Card colored className="mb-8 shadow-md bg-primary-500">
        <CardBody>
          <p className="text-lg text-white">
            Large, full width sections goes here
          </p>
        </CardBody>
      </Card>

      <SectionTitle>Responsive cards</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total clients" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-100"
            bgColorClass="bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Account balance" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-100"
            bgColorClass="bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New sales" value="376">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-100"
            bgColorClass="bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending contacts" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-100"
            bgColorClass="bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <SectionTitle>Cards with title</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-300">Revenue</p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
              dolorum.
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-purple-600">
          <CardBody>
            <p className="mb-4 font-semibold">Colored card</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
              dolorum.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Cards;
