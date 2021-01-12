import React, { useEffect, useState } from "react";

import PageTitle from "../../components/Typography/PageTitle";
import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from "@windmill/react-ui";
import { TabGroup } from "@statikly/funk";

import map from "../../assets/img/graph-map.svg";
import axios from "axios";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Node Map</h1>
      <div>KsdfkjkfjsJDFhdaskjhsH56542246.formate.name</div>
    </>
  );
};

const Right = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="pr-6 mr-6 text-gray-300 border-r border-gray-400">
          <p className="mb-1">Total STX in circulation</p>
          <div className="text-xl font-medium text-success-400">
            4,647,916,016 XTZ
          </div>
          <div>$0.016</div>
        </div>
        <div>
          <p className="mb-1">Circulation with</p>
          <div className="text-xl text-white">
            <b>34000</b> Wallet
          </div>
        </div>
      </div>
    </>
  );
};
function Blank() {
  const [coordinates, setCoordinates] = useState([{ lon: "", lat: "" }]);
  const [count, setCount] = useState(0);
  const [key, setFinalKey] = useState({});

  useEffect(() => {
    const fetch = async () => {
      let data = await axios.get("https://stx-node-map.talhabulut.com/nodes");
      let count = 0;
      let list = [];

      let max = 0;
      let finalKey = "";

      data.data.nodes
        .filter((value) => {
          if (value.location !== undefined) {
            if (list[value.location.country]) {
              list[value.location.country] += 1;
            } else {
              list[value.location.country] = 1;
            }
            return true;
          } else {
            count++;
            return false;
          }
        })
        .map((value) => {
          list.push([value.location.lng, value.location.lat]);
          return { lon: value.location.lng, lat: value.location.lat };
        });

      console.log(list);
      Object.keys(list).forEach((key) => {
        if (list[key] > max) {
          max = list[key];
          finalKey = key;
        }
      });

      setFinalKey({ finalKey, max });
      setCoordinates(list);
      setCount(count);
    };
    fetch();
  }, []);
  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>
      <div className="p-4 space-y-6">
        <Card>
          <CardBody>
            <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
              <TabGroup.TabList>
                <TabGroup.Tab
                  index={0}
                  className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
                  activeClassName="text-white"
                  inactiveClassName="text-gray-300"
                >
                  Mining Node
                </TabGroup.Tab>
                <TabGroup.Tab
                  index={1}
                  className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
                  activeClassName="text-white"
                  inactiveClassName="text-gray-300"
                >
                  Block
                </TabGroup.Tab>
              </TabGroup.TabList>
              <TabGroup.TabPanel
                index={0}
                className="py-10 text-gray-200 transition-all transform"
                activeClassName="opacity-100 duration-500 translate-x-0"
                inactiveClassName="absolute opacity-0 -translate-x-2"
              >
                <div className="grid grid-cols-1 gap-16 mb-8 xl:grid-cols-3">
                  <div className="col-span-2">
                    <ComposableMap>
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                          ))
                        }
                      </Geographies>
                      {coordinates.map((value) => (
                        <Marker coordinates={value}>
                          <circle r={2} fill="#F53" />
                        </Marker>
                      ))}
                    </ComposableMap>
                  </div>
                  <div>
                    <div className="mb-6">
                      {/* <div className="flex flex-wrap items-center justify-between py-2 text-white border-b border-gray-600">
                        <span className="text-gray-200">
                          Total Transfers (POX) (24h)
                        </span>
                        <span>$89.59</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between py-2 text-white border-b border-gray-600">
                        <span className="text-gray-200">POX Winner</span>
                        <span>$89.59</span>
                      </div> */}
                      <div className="flex flex-wrap items-center justify-between py-2 text-white border-b border-gray-600">
                        <span className="text-gray-200">
                          Most Blocks:{" "}
                          <span className="text-white">{key.finalKey}</span>
                        </span>
                        <span>{key.max}</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between py-2 text-white border-b border-gray-600">
                        <span className="text-gray-200">Unknown Location</span>
                        <span>{count}</span>
                      </div>
                    </div>
                    <h2 className="text-xl text-white">Largest Nodes</h2>
                    <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
                      <div class="bg-warning-400 px-6 py-1 text-sm text-gray-700 rounded font-medium">
                        Binance
                      </div>
                      <div class="bg-error-500 px-6 py-1 text-sm text-gray-700 rounded font-medium">
                        OkCoin
                      </div>
                      <div class="bg-success-500 px-6 py-1 text-sm text-gray-700 rounded font-medium">
                        StackedSats
                      </div>
                      <div class="bg-purple-500 px-6 py-1 text-sm text-gray-700 rounded font-medium">
                        Playtaz
                      </div>
                      <div class="bg-primary-500 px-6 py-1 text-sm text-gray-700 rounded font-medium">
                        NodeX
                      </div>
                    </div>
                  </div>
                </div>
              </TabGroup.TabPanel>
              <TabGroup.TabPanel
                index={1}
                className="flex flex-col py-10 text-gray-200 transition-all transform"
                activeClassName="opacity-100 duration-500 translate-x-0"
                inactiveClassName="absolute opacity-0 -translate-x-2"
              >
                Block
              </TabGroup.TabPanel>
            </TabGroup>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            {/* <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
              <TabGroup.TabList>
                <TabGroup.Tab
                  index={0}
                  className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
                  activeClassName="text-white"
                  inactiveClassName="text-gray-300"
                >
                  Mining Node
                </TabGroup.Tab>
                <TabGroup.Tab
                  index={1}
                  className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
                  activeClassName="text-white"
                  inactiveClassName="text-gray-300"
                >
                  Block
                </TabGroup.Tab>
              </TabGroup.TabList>
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
                        <TableCell>Time</TableCell>
                        <TableCell>Block</TableCell>
                        <TableCell>Node</TableCell>
                        <TableCell>Network</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>POX Winners</TableCell>
                        <TableCell>Miner</TableCell>
                        <TableCell>Fee</TableCell>
                      </tr>
                    </TableHeader>
                    <TableBody className="text-lg divide-gray-500">
                      <TableRow className="text-white">
                        <TableCell>
                          <div className="text-lg text-white">Today</div>
                          <span className="text-sm text-gray-200">
                            09:06:30 GMT
                          </span>
                        </TableCell>
                        <TableCell>45,876,958</TableCell>
                        <TableCell>Ksdfk...Fhda</TableCell>
                        <TableCell>Testnet</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0/32</TableCell>
                        <TableCell>1000 STX</TableCell>
                        <TableCell>
                          <div className="text-white ">465,465,416 STX</div>
                          <div className="text-sm ">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-white">
                        <TableCell>
                          <div className="text-lg text-white">Today</div>
                          <span className="text-sm text-gray-200">
                            09:06:30 GMT
                          </span>
                        </TableCell>
                        <TableCell>45,876,958</TableCell>
                        <TableCell>Ksdfk...Fhda</TableCell>
                        <TableCell>Testnet</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0/32</TableCell>
                        <TableCell>1000 STX</TableCell>
                        <TableCell>
                          <div className="text-white ">465,465,416 STX</div>
                          <div className="text-sm ">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-white">
                        <TableCell>
                          <div className="text-lg text-white">Today</div>
                          <span className="text-sm text-gray-200">
                            09:06:30 GMT
                          </span>
                        </TableCell>
                        <TableCell>45,876,958</TableCell>
                        <TableCell>Ksdfk...Fhda</TableCell>
                        <TableCell>Testnet</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0/32</TableCell>
                        <TableCell>1000 STX</TableCell>
                        <TableCell>
                          <div className="text-white ">465,465,416 STX</div>
                          <div className="text-sm ">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-white">
                        <TableCell>
                          <div className="text-lg text-white">Today</div>
                          <span className="text-sm text-gray-200">
                            09:06:30 GMT
                          </span>
                        </TableCell>
                        <TableCell>45,876,958</TableCell>
                        <TableCell>Ksdfk...Fhda</TableCell>
                        <TableCell>Testnet</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0/32</TableCell>
                        <TableCell>1000 STX</TableCell>
                        <TableCell>
                          <div className="text-white ">465,465,416 STX</div>
                          <div className="text-sm ">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-white">
                        <TableCell>
                          <div className="text-lg text-white">Today</div>
                          <span className="text-sm text-gray-200">
                            09:06:30 GMT
                          </span>
                        </TableCell>
                        <TableCell>45,876,958</TableCell>
                        <TableCell>Ksdfk...Fhda</TableCell>
                        <TableCell>Testnet</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0/32</TableCell>
                        <TableCell>1000 STX</TableCell>
                        <TableCell>
                          <div className="text-white ">465,465,416 STX</div>
                          <div className="text-sm ">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-white">
                        <TableCell>
                          <div className="text-lg text-white">Today</div>
                          <span className="text-sm text-gray-200">
                            09:06:30 GMT
                          </span>
                        </TableCell>
                        <TableCell>45,876,958</TableCell>
                        <TableCell>Ksdfk...Fhda</TableCell>
                        <TableCell>Testnet</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0/32</TableCell>
                        <TableCell>1000 STX</TableCell>
                        <TableCell>
                          <div className="text-white ">465,465,416 STX</div>
                          <div className="text-sm ">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="text-white">
                        <TableCell>
                          <div className="text-lg text-white">Today</div>
                          <span className="text-sm text-gray-200">
                            09:06:30 GMT
                          </span>
                        </TableCell>
                        <TableCell>45,876,958</TableCell>
                        <TableCell>Ksdfk...Fhda</TableCell>
                        <TableCell>Testnet</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0/32</TableCell>
                        <TableCell>1000 STX</TableCell>
                        <TableCell>
                          <div className="text-white ">465,465,416 STX</div>
                          <div className="text-sm ">
                            <span className="text-warning-500">3.25</span> BTC |{" "}
                            <span className="text-success-600">245,635</span>{" "}
                            USD
                          </div>
                        </TableCell>
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
                Block
              </TabGroup.TabPanel>
            </TabGroup> */}
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Blank;
