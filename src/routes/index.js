import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Badges = lazy(() => import("../pages/Badges"));
const Tabs = lazy(() => import("../pages/Tabs"));
const ContextMenu = lazy(() => import("../pages/ContextMenu"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const MyPortfolio = lazy(() => import("../pages/MyPortfolio"));
const Transfers = lazy(() => import("../pages/stack-analytics/Transfers"));
const Account = lazy(() => import("../pages/stack-analytics/Account"));
const NodeMap = lazy(() => import("../pages/stack-analytics/NodeMap"));
const Network = lazy(() => import("../pages/stack-analytics/Network"));
const ContractDetail = lazy(() =>
  import("../pages/stack-analytics/ContractDetail")
);
const Transaction = lazy(() => import("../pages/stack-analytics/Transaction"));
const Stacking = lazy(() => import("../pages/stack-analytics/Stacking"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/my-portfolio",
    component: MyPortfolio,
  },
  {
    path: "/stack-analytics/transfers",
    component: Transfers,
  },
  {
    path: "/stack-analytics/transaction",
    component: Transaction,
  },
  {
    path: "/stack-analytics/stacking",
    component: Stacking,
  },
  {
    path: "/stack-analytics/contract-detail",
    component: ContractDetail,
  },
  {
    path: "/stack-analytics/account",
    component: Account,
  },
  {
    path: "/stack-analytics/node-map",
    component: NodeMap,
  },
  {
    path: "/network",
    component: Network,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/badges",
    component: Badges,
  },
  {
    path: "/tabs",
    component: Tabs,
  },
  {
    path: "/context-menu",
    component: ContextMenu,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
