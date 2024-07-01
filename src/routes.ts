import Accordions from "./components/accordion";
import TabMenus from "./components/tabMenu";
import Test_React from "./components/test/react";
import Test_Vanilla from "./components/test/vanilla";

const routerPaths = [
  "/",
  "/test",
  "/test/vanilla",
  "/test/react",
  "/accordions",
  "/tabMenus",
] as const;
export type ROUTE_PATH = (typeof routerPaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};

export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};

export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};

export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: ["/test", "/accordions", "/tabMenus"],
  },

  "/test": {
    key: "/test",
    link: "/test/vanilla",
    name: "테스트",
    children: ["/test/vanilla", "/test/react"],
  },
  "/test/vanilla": {
    key: "/test/vanilla",
    link: "/test/vanilla",
    name: "Vanilla",
    children: Test_Vanilla,
  },
  "/test/react": {
    key: "/test/react",
    link: "/test/react",
    name: "React",
    children: Test_React,
  },
  "/accordions": {
    key: "/accordions",
    link: "/accordions",
    name: "아코디언",
    children: Accordions,
  },
  "/tabMenus": {
    key: "/tabMenus",
    link: "/tabMenus",
    name: "탭메뉴",
    children: TabMenus,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
