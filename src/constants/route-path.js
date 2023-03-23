let path = "/";

export const HOME = path;
export const ABOUTPAGE = path + "about";
export const BLOGPAGE = path + "blog";
export const BLOGDETAIL = path + "blog/detail";
export const DASHBOARD = path + "dashboard";
export const ADDRESS = path + "dashboard/myaddress";
export const ORDER = path + "dashboard/myorder";
export const ACCOUNT = path + "dashboard/myaccount";
export const CART = path + "mycart";
export const SHOP = path + "shop";
export const AUTH = path + "user-login";
export const PRODUCTDETAILS = (title, id, category) =>
  path + `shop/details/${category}/${id}/${title}`;
export const CHECKOUT = path + "checkout";
export const CONTACT = path + "contact";
export const SEARCH = path + "search";

export const EXPOLICY = path + "exchange-policy";
export const CAPOLICY = path + "cancellations-returns";
export const PRPOLICY = path + "privacy-policy";
export const SHPOLICY = path + "shipping-policy";
export const TRPOLICY = path + "terms-conditions";
