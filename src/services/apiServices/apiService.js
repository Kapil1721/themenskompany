import { API_PATH } from "../../constants/path-constant";
import { fetch } from "../fetchService";

// user Auth
export const userAuth = (body) =>
  fetch("post", API_PATH + "auth", { ...body }, {});

export const userRegister = (body) =>
  fetch("post", API_PATH + "register", { ...body }, {});

export const contactUs = (body) =>
  fetch("post", API_PATH + "contact", { ...body }, {});

export const subscribe = (body) =>
  fetch("post", API_PATH + "subscribe", { ...body }, {});

export const userDetails = (body) =>
  fetch("post", API_PATH + "user", { ...body }, {});

export const userUpdte = (body) =>
  fetch("put", API_PATH + "user", { ...body }, {});

export const userForgotPassword = (body) =>
  fetch("put", API_PATH + "user/forgot-password", { ...body }, {});

//addresssesssss

export const billAddress = (id) =>
  fetch("get", API_PATH + `user/billaddress?id=${id}`, {}, {});

export const billAddressPost = (method, body) =>
  fetch(method, API_PATH + `user/billaddress`, { ...body }, {});

export const shipAddress = (id) =>
  fetch("get", API_PATH + `user/shipaddress?id=${id}`, {}, {});

export const shipAddressPost = (method, body) =>
  fetch(method, API_PATH + `user/shipaddress`, { ...body }, {});

//blog

export const blogService = () => fetch("get", API_PATH + `blog`, {}, {});

// product

export const productService = (query) => fetch("get", API_PATH + query, {}, {});

export const productRandService = () =>
  fetch("get", API_PATH + `product/pr__sa`, {}, {});

export const productCateService = (category) =>
  fetch("get", API_PATH + `product/pr__sa?category=${category}`, {}, {});

export const productDetails = (id) =>
  fetch("get", API_PATH + `product/details/?id=${id}`, {}, {});

export const productImages = (id) =>
  fetch("get", API_PATH + `product/productImages/?id=${id}`, {}, {});

export const productCustomise = (id) =>
  fetch("get", API_PATH + `product/customise?id=${id}`, {}, {});

export const productSearch = (key) =>
  fetch("get", API_PATH + `product/search?key=${key}`, {}, {});

export const productSectionCustomise = (id, section) =>
  fetch(
    "get",
    API_PATH + `product/sectionCustomization?id=${id}&section=${section}`,
    {},
    {}
  );

// checkout services --------

export const couponService = (id) =>
  fetch("get", API_PATH + `checkout/coupon?id=${id}`, {}, {});

export const orderService = (object) =>
  fetch("post", API_PATH + `checkout/order`, { ...object }, {});

export const userNoReg = (object) =>
  fetch("post", API_PATH + `checkout/otywips`, { ...object }, {});

export const gteOrderService = (id) =>
  fetch("get", API_PATH + `checkout/order?id=${id}`, {}, {});

export const orderMailer = (details) =>
  fetch("post", API_PATH + `checkout/mglsss__`, { ...details }, {});

export const cancelOrder = (id) =>
  fetch("post", API_PATH + `checkout/cancelOrder`, { ...id }, {});

export const initiatePayment = (object) =>
  fetch("post", API_PATH + `checkout/initiatePayment`, { ...object }, {});
