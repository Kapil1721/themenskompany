import React from "react";
import {
  ABOUTPAGE,
  ACCOUNT,
  ADDRESS,
  AUTH,
  BLOGDETAIL,
  BLOGPAGE,
  CAPOLICY,
  CART,
  CHECKOUT,
  CONTACT,
  DASHBOARD,
  EXPOLICY,
  HOME,
  ORDER,
  SEARCH,
  PRPOLICY,
  SHOP,
  SHPOLICY,
  TRPOLICY,
} from "../constants/route-path";

const NotFound = React.lazy(() => import("./nowhere"));

const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/aboutPage"));
const Blog = React.lazy(() => import("../pages/blogPage"));
const BlogDetails = React.lazy(() => import("../pages/blogDetailPage"));
const Dashboard = React.lazy(() => import("../pages/dashboardPage"));
const Cart = React.lazy(() => import("../pages/cartPage"));
const Shop = React.lazy(() => import("../pages/shopPage"));
const ProductDetails = React.lazy(() => import("../pages/productDetails"));
const Checkout = React.lazy(() => import("../pages/checkoutPage"));
const Contact = React.lazy(() => import("../pages/contact"));
const Search = React.lazy(() => import("../pages/searchPage"));

//@ section imports

const ExchangePolicy = React.lazy(() =>
  import("../section/termscc/exchangePolicy")
);
const CancelPolicy = React.lazy(() =>
  import("../section/termscc/cancelPolicy")
);
const PrivacyPolicy = React.lazy(() =>
  import("../section/termscc/privacyPolicy")
);
const ShippingPolicy = React.lazy(() =>
  import("../section/termscc/shippingPolicy")
);
const TermsccPolicy = React.lazy(() =>
  import("../section/termscc/termsccPolicy")
);

//@ dashboard section

const Address = React.lazy(() =>
  import("../section/dashboard/pages/addressPage")
);

const Order = React.lazy(() =>
  import("../section/dashboard/pages/ordersPages")
);

const AccountDetails = React.lazy(() =>
  import("../section/dashboard/pages/accountDetails")
);

//@ authentaction

const UserAuth = React.lazy(() => import("../section/auth"));

const configureRoutes = () => {
  const routes = [
    {
      element: <NotFound />,
      exact: true,
      path: "*",
      title: "404 Not Found",
      type: "public",
    },
    {
      element: <Home />,
      exact: true,
      path: HOME,
      title: "home page",
      type: "public",
    },
    {
      element: <About />,
      exact: true,
      path: ABOUTPAGE,
      title: "about page",
      type: "public",
    },
    {
      element: <Blog />,
      exact: true,
      path: BLOGPAGE,
      title: "blog page",
      type: "public",
    },
    {
      element: <BlogDetails />,
      exact: true,
      path: BLOGDETAIL,
      title: "blog detail page",
      type: "public",
    },
    {
      element: <Dashboard />,
      exact: true,
      path: DASHBOARD,
      title: "dashboard page",
      type: "private",
    },
    {
      element: <ExchangePolicy />,
      exact: true,
      path: EXPOLICY,
      title: "home page",
      type: "public",
    },
    {
      element: <CancelPolicy />,
      exact: true,
      path: CAPOLICY,
      title: "home page",
      type: "public",
    },
    {
      element: <PrivacyPolicy />,
      exact: true,
      path: PRPOLICY,
      title: "home page",
      type: "public",
    },
    {
      element: <ShippingPolicy />,
      exact: true,
      path: SHPOLICY,
      title: "home page",
      type: "public",
    },
    {
      element: <TermsccPolicy />,
      exact: true,
      path: TRPOLICY,
      title: "home page",
      type: "public",
    },
    {
      element: <Address />,
      exact: true,
      path: ADDRESS,
      title: "home page",
      type: "private",
    },
    {
      element: <Order />,
      exact: true,
      path: ORDER,
      title: "home page",
      type: "private",
    },
    {
      element: <AccountDetails />,
      exact: true,
      path: ACCOUNT,
      title: "home page",
      type: "private",
    },
    {
      element: <Cart />,
      exact: true,
      path: CART,
      title: "home page",
      type: "public",
    },
    {
      element: <Shop />,
      exact: true,
      path: SHOP,
      title: "home page",
      type: "public",
    },
    {
      element: <UserAuth />,
      exact: true,
      path: AUTH,
      title: "home page",
      type: "public",
    },
    {
      element: <ProductDetails />,
      exact: true,
      path: "/shop/details/:cate/:pid/:title",
      title: "home page",
      type: "public",
    },
    {
      element: <Checkout />,
      exact: true,
      path: CHECKOUT,
      title: "home page",
      type: "private",
    },
    {
      element: <Contact />,
      exact: true,
      path: CONTACT,
      title: "home page",
      type: "public",
    },
    {
      element: <Search />,
      exact: true,
      path: SEARCH,
      title: "search page",
      type: "public",
    },
  ];

  return routes;
};

export default configureRoutes;
