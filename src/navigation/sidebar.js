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
  {
    name: "Freeholders",
    path: "/app/blank",
  },
  {
    name: "Network",
    path: "/app/network",
  },
  {
    icon: "PagesIcon",
    name: "UI Kit",
    routes: [
      {
        path: "/app/buttons",
        icon: "IconPlaceholder",
        name: "Buttons",
      },
      {
        path: "/app/forms",
        icon: "IconPlaceholder",
        name: "Forms",
      },
      {
        path: "/app/badges",
        icon: "IconPlaceholder",
        name: "Badges",
      },
      {
        path: "/app/tabs",
        icon: "IconPlaceholder",
        name: "Tabs",
      },
      {
        path: "/app/context-menu",
        icon: "IconPlaceholder",
        name: "ContextMenu",
      },
      {
        path: "/app/cards",
        icon: "IconPlaceholder",
        name: "Cards",
      },
      {
        path: "/app/charts",
        icon: "IconPlaceholder",
        name: "Charts",
      },

      {
        path: "/app/modals",
        icon: "IconPlaceholder",
        name: "Modals",
      },
      {
        path: "/app/tables",
        icon: "IconPlaceholder",
        name: "Tables",
      },
    ],
  },
  {
    icon: "PagesIcon",
    name: "Utility Pages",
    routes: [
      {
        path: "/login",
        name: "Login",
        icon: "IconPlaceholder",
      },
      {
        path: "/create-account",
        name: "Create account",
        icon: "IconPlaceholder",
      },
      {
        path: "/forgot-password",
        name: "Forgot password",
        icon: "IconPlaceholder",
      },
      {
        path: "/app/404",
        name: "404",
        icon: "IconPlaceholder",
      },
      {
        path: "/app/blank",
        name: "Blank",
        icon: "IconPlaceholder",
      },
    ],
  },
];

export default routes;
