import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import { TabGroup } from "@statikly/funk";

function Cards() {
  return (
    <>
      <PageTitle>Tabs</PageTitle>

      <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
        <div className="flex items-center justify-between text-gray-400 dark:text-white">
          <TabGroup.TabList>
            <TabGroup.Tab
              index={0}
              className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
              activeClassName="text-primary-500 dark:text-white"
              inactiveClassName="text-gray-400 dark:text-gray-300"
            >
              Tab 1
            </TabGroup.Tab>
            <TabGroup.Tab
              index={1}
              className="px-1 py-2 mr-3 text-xl transition-colors duration-150"
              activeClassName="text-primary-500 dark:text-white"
              inactiveClassName="text-gray-400 dark:text-gray-300"
            >
              Tab 2
            </TabGroup.Tab>
          </TabGroup.TabList>
          <div>export</div>
          <div>Sort By</div>
        </div>
        <TabGroup.TabPanel
          index={0}
          className="py-10 text-gray-500 transition-all transform dark:text-gray-200"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Tab 1 Content
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="flex flex-col py-10 text-gray-500 transition-all transform dark:text-gray-200"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Tab 2 Content
        </TabGroup.TabPanel>
      </TabGroup>
    </>
  );
}

export default Cards;
