/**
 * Used just to render the Sidebar!
 */
const routes = [
  // Top level icon only shows if there are no child routes
  {
    name: "My Portfolio",
    path: "/app/my-portfolio",
  },
  {
    name: "Stacks Analytics",
    routes: [
      {
        path: "/app/stack-analytics/transfers",
        name: "Transfers",
        icon: "NavTransfers",
      },
      {
        name: "Single Transaction",
        path: "/app/stack-analytics/transaction",
        icon: "NavTransfers",
      },
      {
        path: "/app/stack-analytics/stacking",
        name: "Stacking",
        icon: "NavStacking",
      },
      {
        path: "/app/stack-analytics/contract-detail",
        name: "Smart Contract",
        icon: "NavSmartContracts",
      },
      {
        path: "/app/stack-analytics/account",
        name: "Accounts",
        icon: "NavAccounts",
      },
      {
        path: "/app/stack-analytics/node-map",
        name: "Node Map",
        icon: "NavNodeMap",
      },
    ],
  },
  // {
  //   name: "Freeholders",
  //   path: "/app/blank",
  // },
  {
    name: "Network",
    path: "/app/network",
  },
];

export default routes;
